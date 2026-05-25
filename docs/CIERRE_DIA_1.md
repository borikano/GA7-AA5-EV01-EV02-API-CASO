# Cierre de avance - GA7-AA5-EV01-EV02-API-CASO

## Estado actual

Se dejó implementada y probada localmente la API independiente para las evidencias:

- GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso
- GA7-220501096-AA5-EV02 - API

Este repositorio no corresponde al proyecto MLBT principal ni a las evidencias EV03 / EV04.

## Funcionalidades implementadas

- Servidor Express ejecutable con pnpm.
- Ruta raíz informativa: GET /
- Endpoint de salud: GET /api/health
- Registro de usuario: POST /api/auth/register
- Inicio de sesión: POST /api/auth/login
- Perfil protegido con token: GET /api/auth/profile
- Validaciones con Zod.
- Hash de contraseña con bcrypt.
- Autenticación con JWT.
- Base de datos SQLite con Prisma.
- Migraciones versionadas.
- Variables de entorno separadas en .env.example.

## Pruebas realizadas

Se realizaron pruebas offline desde terminal con:

- Usuarios ficticios realistas.
- Nombres y apellidos.
- Correos de distintos dominios.
- Registro correcto.
- Login correcto.
- Consulta de perfil con token.
- Login incorrecto.
- Perfil sin token.

Los resultados quedaron guardados en:

evidencias/EV02-API-OFFLINE/

## Pendiente para mañana

1. Crear o revisar colección Postman.
2. Importar colección en Postman.
3. Ejecutar pruebas formales.
4. Guardar pantallazos en evidencias/EV02-API-POSTMAN/.
5. Hacer commit con capturas y documentación.
6. Después, al final de todo, preparar guía para el video solicitado por el profesor.
