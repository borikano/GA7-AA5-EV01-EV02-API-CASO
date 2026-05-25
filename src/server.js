import "./config/env.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

// Se inicia el servidor HTTP de la API.
app.listen(PORT, () => {
  console.log(`API caso EV01/EV02 ejecutandose en http://localhost:${PORT}`);
});
