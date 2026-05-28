# Evidencias Postman - EV02 API

Esta carpeta contiene los pantallazos de las pruebas realizadas en Postman para la evidencia:

GA7-220501096-AA5-EV02 - API

La API probada corresponde al servicio construido en:

GA7-220501096-AA5-EV01 - Diseño y Desarrollo de servicios web - caso

## Capturas incluidas

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

## Colección usada

La colección utilizada para las pruebas está en:

postman/GA7-AA5-EV01-EV02-API-CASO.postman_collection.json

## Observación

Estas capturas son parte de la evidencia formal de testing con Postman. El video de demostración se realiza al final usando estos mismos endpoints.
