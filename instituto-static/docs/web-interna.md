# Web interna — Instituto Terciario Río Gallegos

- Fecha: 2026-04-30
- Responsable operativo: Victoria
- Objetivo: tablero interno navegable con todo el proyecto, avance, insumos, backlog Paperclip y documentación consolidada.

## URL interna Tailscale

Alias/ruta fija dentro de la tailnet:

```text
https://victoria-zorin.tail4468ec.ts.net/instituto
```

La ruta `/instituto` queda configurada por Tailscale Serve contra el servidor local.

## Servicio local

Systemd user service:

```text
instituto-terciario-web.service
```

Puerto local:

```text
http://127.0.0.1:8096
```

Directorio servido:

```text
/home/santipauli/sites/instituto-terciario-web
```

Archivo principal:

```text
/home/santipauli/sites/instituto-terciario-web/index.html
```

Comandos útiles:

```bash
systemctl --user status instituto-terciario-web.service
systemctl --user restart instituto-terciario-web.service
journalctl --user -u instituto-terciario-web.service -f
sudo tailscale serve status
```

## Tailscale Serve

Configuración aplicada:

```text
https://victoria-zorin.tail4468ec.ts.net/instituto
|-- proxy http://127.0.0.1:8096
```

Nota: se intentó usar Tailscale Services con alias de servicio, pero el host no es un tagged node; por eso se usó la ruta fija `/instituto` sobre el MagicDNS estable del host.

## Insumo GitHub incorporado

Se buscó el paquete/repo de diseño y se incorporó como insumo el repositorio relevante:

```text
https://github.com/VoltAgent/awesome-design-md
```

Clonado localmente en:

```text
/home/santipauli/.local/share/design-insumos/awesome-design-md
```

Commit usado:

```text
6dc4def
```

Criterio aplicado:

- Uso de `DESIGN.md` como formato de insumo para agentes.
- Estética aplicada inspirada en Linear: modo oscuro, navegación lateral, cards sutiles, jerarquía precisa, acento violeta.

## Contenido incorporado

La web incluye:

- Resumen ejecutivo.
- Decisión recomendada de primera cohorte.
- Carreras priorizadas: Logística, Radiología, Geomática.
- Semáforo de avance.
- Hoja de ruta 90 días.
- Actores y alianzas.
- Insumos de diseño/proyecto.
- Backlog Paperclip completo (`FUN-1` a `FUN-15`).
- Documentos ejecutivos resumidos.
- Expediente completo embebido desde AgentsVault.

## Evolución 2026-04-30 — tablero vivo operativo

Se agregó actualización automática del tablero desde AgentsVault + Paperclip local.

Archivos/servicios nuevos:

```text
/home/santipauli/sites/instituto-terciario-web/update_dashboard.py
instituto-terciario-web-refresh.service
instituto-terciario-web-refresh.timer
```

Frecuencia:

```text
cada 5 minutos
```

Mejoras incorporadas:

- Copia servida de documentos Markdown fuente bajo `/instituto/docs/`.
- Enlaces directos a carpeta ejecutiva, nota CPE, matriz financiera, análisis y expediente.
- Sección de sprint vivo 7–15 días.
- Sección de decisiones y vencimientos.
- Botón `Imprimir / guardar PDF` vía navegador.
- CSS `@media print` para exportación limpia.
- Responsive móvil: sidebar pasa arriba y cards a una columna.
- Optimización mobile-first para uso frecuente desde celular: navegación horizontal tipo tabs, botones principales apilados, tablas transformadas en tarjetas legibles con etiquetas, breakpoints específicos para pantallas chicas y scrollbar del menú oculto.
- Backlog Paperclip regenerado en cada actualización.

Documentos nuevos enlazados:

```text
consulta-cpe-santa-cruz.md
aliados-shortlist-guiones-cartas.md
matriz-financiera-base.md
planes-estudio-preliminares.md
prefactibilidad-financiera-matricula-benchmark.md
```

## Evolución 2026-04-30 — rediseño frontend ejecutivo

Se reemplazó la vista anterior por una landing interna más clara, mobile-first y orientada a presentación ejecutiva.

Criterio aplicado:

- Menos lenguaje de backend/sistema.
- Más narrativa de decisión: carreras, planes, finanzas, proceso y documentos.
- Hero editorial con CTAs.
- Tabs por carrera.
- Acordeones por año de plan de estudio.
- Cards financieras por carrera.
- Escenarios financieros como tarjetas, no tabla.
- Proceso Paperclip resumido como avance ejecutivo y estados en español.
- Documentos fuente como expediente navegable.

Entregables integrados:

```text
FUN-16 — planes preliminares de estudio — completado
FUN-17 — benchmark financiero/matrícula — completado
FUN-18 — rediseño frontend/mobile — completado
```

## Verificación

- Servicio local responde en `127.0.0.1:8096`.
- Documento local `docs/consulta-cpe-santa-cruz.md` responde `200`.
- Tailscale Serve configurado para `/instituto`.
- Tailscale URL principal responde `200`.
- Tailscale documento `/instituto/docs/consulta-cpe-santa-cruz.md` responde `200`.
- Timer de refresh activo: `instituto-terciario-web-refresh.timer`.
- Browser/local verificó contenido nuevo: `Tablero vivo privado`, `Imprimir / guardar PDF`, `Backlog Paperclip`.

## Actualización 2026-04-30 · Marca Fundación Patagonia Libre

- Se incorporó logo oficial de Fundación Patagonia Libre desde `https://www.fundacionpatagonialibre.org/logo-patagonia-libre.jpg`.
- Assets locales del sitio: `/home/santipauli/sites/instituto-terciario-web/assets/logo-patagonia-libre.jpg`, `logo-patagonia-libre.png`, `favicon.png`, `favicon-32.png`.
- El header y hero pasan a priorizar el marco institucional de Fundación Patagonia Libre; el Instituto Terciario queda presentado como primera iniciativa operativa educativa.
- Se incorporó sección “Por qué este proyecto” con conceptos de la web oficial: educación como eje principal, educación formal, políticas públicas, diferencia territorial, formación pertinente y desarrollo patagónico.
- El cambio fue aplicado en el generador `/home/santipauli/sites/instituto-terciario-web/update_dashboard.py`, no sólo en `index.html`, para sobrevivir al refresh automático.
- Verificación: HTTP local `200`; assets logo/favicon `200`; inspección visual en navegador confirmó logo cargado en header y hero.

## Actualización 2026-04-30 16:38 -03 — lector Markdown y capa financiera

- Se agregó lector Markdown integrado en la sección `Documentos fuente`: los enlaces `.md` ya no abren texto plano por defecto; se renderizan debajo del link dentro de la web, usando `TextDecoder('utf-8')` para evitar acentos rotos.
- Se conserva botón `Abrir original` como respaldo, pero la lectura principal queda integrada al dashboard.
- Se agregó sección `Análisis previo` antes de la oferta académica, explicando los filtros usados para elegir carreras: demanda territorial, viabilidad regulatoria, economía de arranque y diferenciación institucional.
- Se ampliaron las tarjetas financieras con supuestos de costos: costo anual estimado, fijo mensual, setup inicial y principales drivers operativos por carrera.
- Se agregó sección final `Resumen de escenarios`, con lectura ejecutiva de Logística, Radiología, Geomática y conclusión de secuencia recomendada.
- Verificación: `update_dashboard.py` compila, regeneró `index.html`, navegador sin errores de consola, lector integrado probado con `consulta-cpe-santa-cruz.md` mostrando acentos correctos.

