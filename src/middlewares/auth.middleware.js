import jwt from "jsonwebtoken";

// Verifica que el cliente envie un token valido en el encabezado Authorization.
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      ok: false,
      message: "Token no enviado"
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: "Token invalido o expirado"
    });
  }
};
