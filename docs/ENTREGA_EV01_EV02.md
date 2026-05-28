# Entrega EV01 / EV02 - GA7-AA5-EV01-EV02-API-CASO

## Evidencias cubiertas

Este repositorio cubre únicamente las evidencias:

- GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso
- GA7-220501096-AA5-EV02 - API

No corresponde al proyecto MLBT principal ni a las evidencias EV03 / EV04.

## EV01 - Diseño y Desarrollo de servicios web - caso

Se construyó una API independiente con Node.js, Express y base de datos SQLite mediante Prisma.

La API permite:

- Registrar usuarios.
- Iniciar sesión con usuario y contraseña.
- Devolver mensaje de autenticación satisfactoria cuando las credenciales son correctas.
- Devolver error de autenticación cuando las credenciales son incorrectas.
- Proteger contraseña mediante hash con bcrypt.
- Validar datos de entrada con Zod.
- Usar token JWT para proteger rutas.
- Mantener código comentado.
- Versionar el proyecto con Git.

## EV02 - API

Se realizaron pruebas de la API usando Postman.

Se incluye:

- Colección Postman.
- Documentación de endpoints.
- Evidencias de pantalla.
- Resumen de pruebas realizadas.
- Pruebas offline previas desde terminal.

## Endpoints principales

| Método | Endpoint | Descripción |
|---|---|---|
| GET | / | Ruta raíz informativa |
| GET | /api/health | Verificación de estado de la API |
| POST | /api/auth/register | Registro de usuario |
| POST | /api/auth/login | Inicio de sesión |
| GET | /api/auth/profile | Perfil protegido con token JWT |

## Evidencias incluidas

### Evidencias offline

Carpeta:

evidencias/EV02-API-OFFLINE/

Incluye resultados JSON de pruebas locales realizadas desde terminal.

### Evidencias Postman

Carpeta:

evidencias/EV02-API-POSTMAN/

Incluye las siguientes capturas:

1. 01-ruta-raiz.png
2. 02-health.png
3. 03-registro-correcto.png
4. 04-login-correcto.png
5. 05-perfil-con-token.png
6. 06-login-incorrecto.png
7. 07-perfil-sin-token.png

## Colección Postman

Archivo:

postman/GA7-AA5-EV01-EV02-API-CASO.postman_collection.json

## Comandos principales

Instalar dependencias:

pnpm install

Ejecutar servidor:

pnpm run dev

Ejecutar migraciones Prisma:

pnpm run db:migrate

Abrir Prisma Studio:

pnpm run db:studio

## Estado de seguridad

El archivo .env no se versiona.

Se incluye solamente:

.env.example

La base de datos SQLite local tampoco se versiona.

## Pendiente final

El video solicitado por el instructor queda como evidencia adicional de cierre, usando las pruebas ya realizadas en Postman.
