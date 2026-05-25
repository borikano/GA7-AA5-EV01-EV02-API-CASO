# Guía de pruebas en Postman - EV02

## Objetivo

Realizar el testing de la API construida para EV01 usando Postman, según lo solicitado en GA7-220501096-AA5-EV02.

## Preparación

1. Ejecutar el servidor:

pnpm run dev

2. Confirmar en navegador:

http://localhost:3000/

3. Importar en Postman:

postman/GA7-AA5-EV01-EV02-API-CASO.postman_collection.json

## Pruebas requeridas

### 1. Ruta raíz

GET {{base_url}}/

Pantallazo sugerido:

docs/ev02-api-postman/capturas/01-ruta-raiz.png

### 2. Health

GET {{base_url}}/api/health

Pantallazo sugerido:

docs/ev02-api-postman/capturas/02-health.png

### 3. Registro correcto

POST {{base_url}}/api/auth/register

Body:

{
  "nombre": "Usuario Demo",
  "usuario": "usuario_demo_postman",
  "email": "demo.postman@example.com",
  "password": "Clave123*"
}

Pantallazo sugerido:

docs/ev02-api-postman/capturas/03-registro-correcto.png

### 4. Login correcto

POST {{base_url}}/api/auth/login

Body:

{
  "usuario": "usuario_demo_postman",
  "password": "Clave123*"
}

Pantallazo sugerido:

docs/ev02-api-postman/capturas/04-login-correcto.png

### 5. Perfil con token

GET {{base_url}}/api/auth/profile

Header:

Authorization: Bearer {{token}}

Pantallazo sugerido:

docs/ev02-api-postman/capturas/05-perfil-con-token.png

### 6. Login incorrecto

POST {{base_url}}/api/auth/login

Body:

{
  "usuario": "usuario_demo_postman",
  "password": "ClaveIncorrecta"
}

Pantallazo sugerido:

docs/ev02-api-postman/capturas/06-login-incorrecto.png

## Guion sugerido para video

1. Presentar el repositorio GA7-AA5-EV01-EV02-API-CASO.
2. Explicar que corresponde a EV01 y EV02, no al proyecto MLBT.
3. Mostrar ejecución del servidor con pnpm run dev.
4. Mostrar la ruta raíz funcionando en navegador.
5. Abrir Postman.
6. Ejecutar health.
7. Ejecutar registro.
8. Ejecutar login correcto y mostrar token.
9. Ejecutar perfil protegido con token.
10. Ejecutar login incorrecto.
11. Mostrar documentación de endpoints.
