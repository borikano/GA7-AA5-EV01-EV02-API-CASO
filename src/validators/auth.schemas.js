import { z } from "zod";

// Validacion para crear un usuario nuevo.
export const registerSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(3, "El nombre debe tener minimo 3 caracteres"),

  usuario: z
    .string()
    .trim()
    .min(4, "El usuario debe tener minimo 4 caracteres")
    .max(30, "El usuario no debe superar 30 caracteres")
    .regex(/^[a-zA-Z0-9_]+$/, "El usuario solo puede contener letras, numeros y guion bajo"),

  email: z
    .string()
    .trim()
    .email("El correo electronico no tiene un formato valido")
    .optional()
    .or(z.literal("")),

  password: z
    .string()
    .min(6, "La contrasena debe tener minimo 6 caracteres")
});

// Validacion para iniciar sesion.
export const loginSchema = z.object({
  usuario: z
    .string()
    .trim()
    .min(1, "El usuario es obligatorio"),

  password: z
    .string()
    .min(1, "La contrasena es obligatoria")
});
