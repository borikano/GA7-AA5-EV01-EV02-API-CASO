# Resumen de evidencias Postman - EV02 API

## Evidencia

GA7-220501096-AA5-EV02 - API

## API probada

GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso

## Capturas realizadas

1. 01-ruta-raiz.png
2. 02-health.png
3. 03-registro-correcto.png
4. 04-login-correcto.png
5. 05-perfil-con-token.png
6. 06-login-incorrecto.png
7. 07-perfil-sin-token.png

## Endpoints probados

| Método | Endpoint | Resultado esperado |
|---|---|---|
| GET | / | API activa |
| GET | /api/health | API activa |
| POST | /api/auth/register | Usuario registrado correctamente |
| POST | /api/auth/login | Autenticacion satisfactoria |
| GET | /api/auth/profile | Perfil consultado correctamente |
| POST | /api/auth/login | Error en la autenticacion |
| GET | /api/auth/profile | Token no enviado |

## Observación

Las pruebas fueron realizadas en Postman con la API ejecutándose localmente en:

http://localhost:3000

El video queda pendiente para el cierre final de la evidencia.
