import { getUserProfile, loginUser, registerUser } from "../services/auth.service.js";

// Controlador para registrar usuarios.
export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      ok: true,
      message: "Usuario registrado correctamente",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

// Controlador para iniciar sesion.
export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);

    return res.status(200).json({
      ok: true,
      message: result.message,
      token: result.token,
      data: result.user
    });
  } catch (error) {
    next(error);
  }
};

// Controlador para consultar perfil con token.
export const profile = async (req, res, next) => {
  try {
    const user = await getUserProfile(req.user.id);

    return res.status(200).json({
      ok: true,
      message: "Perfil consultado correctamente",
      data: user
    });
  } catch (error) {
    next(error);
  }
};
