import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Middleware para permitir recibir datos en formato JSON.
app.use(express.json());

// Middleware para permitir solicitudes desde clientes externos como Postman.
app.use(cors());

// Ruta raiz informativa para navegador o verificacion rapida.
app.get("/", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "API caso GA7-AA5-EV01-EV02 activa",
    descripcion: "Servicio web independiente para registro e inicio de sesion.",
    evidencias: [
      "GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso",
      "GA7-220501096-AA5-EV02 - API"
    ],
    endpoints: {
      raiz: "GET /",
      health: "GET /api/health",
      register: "POST /api/auth/register",
      login: "POST /api/auth/login",
      profile: "GET /api/auth/profile"
    }
  });
});

// Ruta tecnica de verificacion.
app.use("/api/health", healthRoutes);

// Rutas de autenticacion para registro, login y perfil.
app.use("/api/auth", authRoutes);

// Middleware para manejar rutas no encontradas.
app.use((req, res) => {
  return res.status(404).json({
    ok: false,
    message: "Ruta no encontrada"
  });
});

// Middleware centralizado de errores.
app.use(errorHandler);

export default app;
