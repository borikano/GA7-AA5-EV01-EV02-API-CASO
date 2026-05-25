# Política de secretos del proyecto

## Regla principal

No versionar secretos.

## Archivos prohibidos

- .env
- .env.local
- .env.production
- .env.development
- .env.test
- *.pem
- *.key
- *.pfx
- *.p12

## Archivo permitido

- .env.example

## Variables requeridas

| Variable | Descripción | Obligatoria | Ejemplo seguro |
|---|---|---|---|
| APP_ENV | Ambiente de ejecución | Sí | local |
| APP_NAME | Nombre de la aplicación | Sí | mi-proyecto |

## Gestión de secretos

- Usar variables de entorno.
- Usar GitHub Secrets para CI/CD si aplica.
- No guardar tokens en código.
- No guardar credenciales en README.
- Rotar secretos si hay exposición.

## Estado

Pendiente de completar según el proyecto.
