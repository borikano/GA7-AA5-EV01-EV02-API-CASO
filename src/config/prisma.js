import { PrismaClient } from "@prisma/client";

// Se crea una unica instancia de PrismaClient para reutilizar la conexion a la base de datos.
const prisma = new PrismaClient();

export default prisma;
