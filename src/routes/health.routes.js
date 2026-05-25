import { Router } from "express";

const router = Router();

// Endpoint de prueba para confirmar que la API esta activa.
router.get("/", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "API caso EV01/EV02 activa",
    evidencias: [
      "GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso",
      "GA7-220501096-AA5-EV02 - API"
    ],
    timestamp: new Date().toISOString()
  });
});

export default router;
