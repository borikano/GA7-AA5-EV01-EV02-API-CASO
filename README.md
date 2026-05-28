# GA7-AA5-EV01-EV02-API-CASO

API independiente desarrollada para las evidencias:

- GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso
- GA7-220501096-AA5-EV02 - API

Este repositorio no corresponde al proyecto MLBT principal ni a las evidencias GA7-220501096-AA5-EV03 / GA7-220501096-AA5-EV04.

## Objetivo

Construir y probar una API simple para registro e inicio de sesión de usuarios.

La API permite:

- Registrar usuarios.
- Iniciar sesión con usuario y contraseña.
- Devolver mensaje de autenticación satisfactoria cuando las credenciales son correctas.
- Devolver error de autenticación cuando las credenciales son incorrectas.
- Proteger contraseñas mediante hash.
- Validar datos de entrada.
- Proteger rutas con token JWT.
- Probar los endpoints con Postman.
- Documentar endpoints y evidencias de pantalla.

## Tecnologías utilizadas

- Node.js
- Express
- Prisma ORM
- SQLite
- pnpm
- bcrypt
- jsonwebtoken
- Zod
- Postman
- Git y GitHub

## Gestor de paquetes

Este proyecto usa pnpm.

No se usa npm ni npx.

## Estructura del repositorio

- docs/
  - CIERRE_DIA_1.md
  - ENTREGA_EV01_EV02.md
  - SEPARACION_EVIDENCIA_EV01_EV02.md
  - ev02-api-postman/
    - ENDPOINTS.md
    - PRUEBAS_POSTMAN.md

- evidencias/
  - EV02-API-OFFLINE/
  - EV02-API-POSTMAN/

- postman/
  - GA7-AA5-EV01-EV02-API-CASO.postman_collection.json

- prisma/
  - migrations/
  - schema.prisma

- src/
  - config/
  - controllers/
  - middlewares/
  - routes/
  - services/
  - validators/
  - app.js
  - server.js

## Alcance de EV01

Para la evidencia GA7-220501096-AA5-EV01 se construyó una API de caso con los siguientes endpoints:

| Método | Endpoint | Descripción |
|---|---|---|
| GET | / | Ruta raíz informativa |
| GET | /api/health | Verificación de estado de la API |
| POST | /api/auth/register | Registro de usuario |
| POST | /api/auth/login | Inicio de sesión |
| GET | /api/auth/profile | Consulta de perfil autenticado con token JWT |

## Alcance de EV02

Para la evidencia GA7-220501096-AA5-EV02 se realizaron pruebas de la API usando Postman.

Se incluye:

- Colección Postman.
- Documentación de endpoints.
- Pantallazos de pruebas.
- Evidencias offline desde terminal.
- Resumen de evidencias Postman.

## Instalación local

Clonar el repositorio:

    git clone https://github.com/borikano/GA7-AA5-EV01-EV02-API-CASO.git

Entrar al proyecto:

    cd GA7-AA5-EV01-EV02-API-CASO

Instalar dependencias:

    pnpm install

Crear archivo .env tomando como base .env.example:

    Copy-Item .env.example .env

Ejecutar migraciones:

    pnpm run db:migrate

Ejecutar servidor:

    pnpm run dev

La API queda disponible en:

    http://localhost:3000

## Variables de entorno

El archivo .env no se sube al repositorio.

Ejemplo:

    PORT=3000
    DATABASE_URL="file:./dev.db"
    JWT_SECRET="cambiar_esta_clave_en_entorno_local"
    JWT_EXPIRES_IN="1h"

## Pruebas con Postman

La colección se encuentra en:

    postman/GA7-AA5-EV01-EV02-API-CASO.postman_collection.json

Orden recomendado de pruebas:

1. 01 - Ruta raiz
2. 02 - Health
3. 03 - Registro correcto
4. 04 - Login correcto
5. 05 - Perfil con token
6. 06 - Login incorrecto
7. 07 - Perfil sin token

## Evidencias de pantalla

Las capturas de Postman se encuentran en:

    evidencias/EV02-API-POSTMAN/

Capturas incluidas:

1. 01-ruta-raiz.png
2. 02-health.png
3. 03-registro-correcto.png
4. 04-login-correcto.png
5. 05-perfil-con-token.png
6. 06-login-incorrecto.png
7. 07-perfil-sin-token.png

## Evidencias offline

Las pruebas locales previas a Postman se encuentran en:

    evidencias/EV02-API-OFFLINE/

Estas pruebas validan:

- Ruta raíz.
- Endpoint de salud.
- Registro de usuarios ficticios.
- Login correcto.
- Perfil con token.
- Login incorrecto.
- Perfil sin token.

## Seguridad aplicada

- Las contraseñas no se almacenan en texto plano.
- Se usa hash con bcrypt.
- Se usa JWT para rutas protegidas.
- Se validan datos de entrada con Zod.
- El archivo .env no está versionado.
- La base SQLite local no está versionada.
- Se incluye únicamente .env.example.

## Estado de entrega

- API funcional: completado.
- Documentación de endpoints: completado.
- Pruebas offline: completado.
- Pruebas Postman: completado.
- Evidencias de pantalla: completado.
- Repositorio GitHub: completado.
- Video de demostración: pendiente para cierre final.
