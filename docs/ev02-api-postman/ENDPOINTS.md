# Documentación de endpoints - GA7-AA5-EV01-EV02-API-CASO

## URL base

http://localhost:3000

## Endpoints disponibles

| Método | Endpoint | Descripción |
|---|---|---|
| GET | / | Ruta raíz informativa |
| GET | /api/health | Verificación técnica de la API |
| POST | /api/auth/register | Registro de usuario |
| POST | /api/auth/login | Inicio de sesión |
| GET | /api/auth/profile | Consulta de perfil con token |

## 1. Ruta raíz

Método: GET  
Endpoint: /

Permite verificar desde el navegador que la API está activa.

Respuesta esperada:

{
  "ok": true,
  "message": "API caso GA7-AA5-EV01-EV02 activa",
  "descripcion": "Servicio web independiente para registro e inicio de sesion."
}

## 2. Health

Método: GET  
Endpoint: /api/health

Permite validar técnicamente que la API está activa.

Respuesta esperada:

{
  "ok": true,
  "message": "API caso EV01/EV02 activa"
}

## 3. Registro de usuario

Método: POST  
Endpoint: /api/auth/register  
Header: Content-Type: application/json

Body:

{
  "nombre": "Usuario Demo",
  "usuario": "usuario_demo",
  "email": "demo@example.com",
  "password": "Clave123*"
}

Respuesta esperada:

{
  "ok": true,
  "message": "Usuario registrado correctamente"
}

## 4. Inicio de sesión

Método: POST  
Endpoint: /api/auth/login  
Header: Content-Type: application/json

Body:

{
  "usuario": "usuario_demo",
  "password": "Clave123*"
}

Respuesta esperada:

{
  "ok": true,
  "message": "Autenticacion satisfactoria",
  "token": "TOKEN_JWT_GENERADO"
}

Error esperado si las credenciales son incorrectas:

{
  "ok": false,
  "message": "Error en la autenticacion"
}

## 5. Perfil autenticado

Método: GET  
Endpoint: /api/auth/profile  
Header: Authorization: Bearer TOKEN_JWT_GENERADO

Respuesta esperada:

{
  "ok": true,
  "message": "Perfil consultado correctamente"
}

Error esperado si no se envía token:

{
  "ok": false,
  "message": "Token no enviado"
}
