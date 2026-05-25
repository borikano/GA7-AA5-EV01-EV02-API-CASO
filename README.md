# Proyecto Base

Plantilla oficial para nuevos proyectos bajo E:\Dev.

## Reglas principales

- El proyecto debe vivir en E:\Dev\01_Repositorios si es formal.
- Si es prueba o experimento, debe vivir en E:\Dev\02_Laboratorios.
- No usar npm.
- No usar npx.
- Usar pnpm.
- No subir node_modules.
- No subir archivos .env reales.
- Documentar arquitectura.
- Documentar requisitos.
- Generar auditorías.
- Generar SBOM si aplica.
- Registrar decisiones técnicas importantes mediante ADR.
- Todo repositorio nace privado por defecto.
- Todo repo GitHub debe tener nombre, descripción y visibilidad definida.
- Todo repo público debe pasar checklist de publicación.
- Todo proyecto debe tener decisión de licencia.
- Todo proyecto debe documentar manejo de secretos.

## Comandos iniciales

pnpm install
pnpm audit --audit-level moderate
pnpm audit signatures
pnpm sbom --format cyclonedx > reports/sbom/sbom.cyclonedx.json
pnpm licenses list --json > reports/licenses/licenses.json

## Documentación obligatoria

- docs/repository/github-remote.md
- docs/repository/repository-policy.md
- docs/repository/publication-checklist.md
- docs/legal/license-decision.md
- docs/security/secrets-policy.md
