# Seguridad

## Política

Este proyecto no debe contener secretos, credenciales, tokens, llaves privadas ni archivos .env reales.

## Archivos permitidos

.env.example

## Archivos prohibidos

.env
.env.local
.env.production
*.pem
*.key
*.p12
*.pfx

## Gestor de paquetes

Permitido:

pnpm

Prohibido:

npm
npx

## Auditoría mínima

pnpm audit --audit-level moderate
pnpm audit signatures
pnpm sbom --format cyclonedx > reports/sbom/sbom.cyclonedx.json
pnpm licenses list --json > reports/licenses/licenses.json
