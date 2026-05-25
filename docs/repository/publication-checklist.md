# Checklist de publicación

Antes de hacer público este repositorio, validar:

## Seguridad

- [ ] No hay .env real.
- [ ] No hay tokens.
- [ ] No hay contraseñas.
- [ ] No hay claves privadas.
- [ ] No hay certificados privados.
- [ ] No hay secretos en historial Git.
- [ ] No hay datos personales.
- [ ] No hay datos de clientes.

## Documentación

- [ ] README.md está preparado para público.
- [ ] SECURITY.md no revela información interna.
- [ ] CHANGELOG.md no contiene información sensible.
- [ ] docs no contiene decisiones privadas.

## Código

- [ ] No hay rutas locales sensibles.
- [ ] No hay endpoints privados.
- [ ] No hay configuraciones productivas internas.
- [ ] No hay archivos temporales.
- [ ] node_modules no está versionado.

## Licencia

- [ ] LICENSE.md definido.
- [ ] Licencia compatible con publicación.
- [ ] Dependencias revisadas.

## Auditoría

- [ ] pnpm audit ejecutado si aplica.
- [ ] pnpm audit signatures ejecutado si aplica.
- [ ] Licencias revisadas.
- [ ] SBOM generado si aplica.

## Decisión

- [ ] Responsable aprueba publicación.
- [ ] Fecha de publicación definida.
- [ ] Motivo de publicación documentado.
- [ ] Visibilidad cambiada conscientemente a pública.
