import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

const SALT_ROUNDS = 10;

const publicUserSelect = {
  id: true,
  nombre: true,
  usuario: true,
  email: true,
  createdAt: true,
  updatedAt: true
};

const createHttpError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

// Registra un usuario guardando la contrasena protegida con hash.
export const registerUser = async ({ nombre, usuario, email, password }) => {
  const normalizedUsuario = usuario.toLowerCase();
  const normalizedEmail = email ? email.toLowerCase() : null;

  const duplicatedUser = await prisma.user.findFirst({
    where: {
      OR: [
        { usuario: normalizedUsuario },
        ...(normalizedEmail ? [{ email: normalizedEmail }] : [])
      ]
    }
  });

  if (duplicatedUser) {
    throw createHttpError("El usuario o correo ya se encuentra registrado", 409);
  }

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

  return prisma.user.create({
    data: {
      nombre,
      usuario: normalizedUsuario,
      email: normalizedEmail,
      passwordHash
    },
    select: publicUserSelect
  });
};

// Valida usuario y contrasena. Si son correctos, genera un token JWT.
export const loginUser = async ({ usuario, password }) => {
  const normalizedUsuario = usuario.toLowerCase();

  const user = await prisma.user.findUnique({
    where: {
      usuario: normalizedUsuario
    }
  });

  if (!user) {
    throw createHttpError("Error en la autenticacion", 401);
  }

  const passwordIsValid = await bcrypt.compare(password, user.passwordHash);

  if (!passwordIsValid) {
    throw createHttpError("Error en la autenticacion", 401);
  }

  const token = jwt.sign(
    {
      id: user.id,
      usuario: user.usuario
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "1h"
    }
  );

  return {
    message: "Autenticacion satisfactoria",
    token,
    user: {
      id: user.id,
      nombre: user.nombre,
      usuario: user.usuario,
      email: user.email
    }
  };
};

// Consulta el perfil del usuario autenticado.
export const getUserProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(userId)
    },
    select: publicUserSelect
  });

  if (!user) {
    throw createHttpError("Usuario no encontrado", 404);
  }

  return user;
};
