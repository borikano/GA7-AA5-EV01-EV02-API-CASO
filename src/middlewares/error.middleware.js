export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    ok: false,
    message: statusCode === 500 ? "Error interno del servidor" : err.message
  });
};
