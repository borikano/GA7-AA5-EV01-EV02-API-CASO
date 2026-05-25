import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";

const app = express();

// Middleware para permitir recibir datos en formato JSON.
app.use(express.json());

// Middleware para permitir solicitudes desde clientes externos como Postman.
app.use(cors());

// Ruta inicial de verificacion.
app.use("/api/health", healthRoutes);

// Middleware para manejar rutas no encontradas.
app.use((req, res) => {
  return res.status(404).json({
    ok: false,
    message: "Ruta no encontrada"
  });
});

export default app;
