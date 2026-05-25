import { Router } from "express";
import { login, profile, register } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validators/auth.schemas.js";

const router = Router();

// Registro de usuario.
router.post("/register", validateBody(registerSchema), register);

// Inicio de sesion.
router.post("/login", validateBody(loginSchema), login);

// Perfil protegido por token JWT.
router.get("/profile", authenticateToken, profile);

export default router;
