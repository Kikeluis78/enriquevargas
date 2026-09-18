## ESTADO ACTUAL DEL PROYECTO

Estado vigente documentado el 17 de septiembre de 2026 (segunda actualización). Esta sección prevalece sobre las instrucciones de las sesiones históricas conservadas debajo.

### Arquitectura comercial nueva — Separación de responsabilidades (17 de septiembre de 2026)

Se implementó un flujo Precios → Configurador → Contacto que **separa las responsabilidades y evita repetir la misma información** en múltiples páginas.

#### Home (presentación rápida)
- Necesidad → Soluciones breves (cuatro básicos + Premium) → Demos → Enrique → Cierre.
- No detalla características ni funciones; eso se encuentra en Precios.

#### Precios (conocer + configurar)
- Cada solución muestra un **recorrido desplegable** titulado "Conoce todo el potencial de esta solución".
- El recorrido utiliza los datos `journey` de `src/data/pricingPlans.js`:
  - Explican el funcionamiento del **paquete inicial** (no personalizaciones).
  - Están organizados por **etapas** con iconos, título, descripción e items.
  - Muestran **alcance y límites por separado** (sección amarilla).
  - Incluyen **PLUS incluido** (sección discreta).
  - Terminan con: "¿Necesitas llevarlo más lejos?" → **Explorar adicionales** (botón morado).

**IMPORTANTE:** Los textos de los journeys están **PENDIENTE DE REVISIÓN MANUAL**. Las soluciones a revisar son:
- Telegram
- Tarjeta Digital
- Agenda
- Menú WhatsApp
- E-Commerce PRO
- Web Corporativa
- Web + Android
- Android personalizado

Objetivo: Comprobar que cada recorrido realmente diferencia el servicio y que no contiene funciones inventadas, repetidas o pertenecientes a opciones avanzadas.

#### Flujo de personalización — CON ADICIONALES

```
Precios
  → Conoce todo el potencial
    → ¿Necesitas llevarlo más lejos?
      → Explorar adicionales
        → ProjectConfigurator abierto
          → Seleccionar funciones adicionales
            → Continuar al formulario
              → Contacto (resumen de personalización)
                → Envío de solicitud
```

#### Flujo de personalización — SIN ADICIONALES

```
Precios
  → Continuar con el paquete inicial
    → Contacto (sin personalización)
      → Envío de solicitud
```

#### Cambio importante
La antigua pregunta de Contacto "¿Necesitas algo adicional para este servicio?" con controles Sí/No **fue retirada**.

La **decisión de personalización ahora ocurre en Precios**, no en Contacto. Esto evita:
- Repetir la lista completa de características en dos páginas.
- Confundir al cliente entre funciones base y adicionales.
- Generar flujos complejos de ida y vuelta.

#### Contacto (revisar + enviar)
- Recibe la solución con `?solucion=...` (URL Parameter).
- Muestra un **resumen compacto** de la personalización (si existe).
- Si hay personalización: botón "Editar selección" que vuelve a Precios y reabre el configurador.
- Envía la solicitud con todos los datos necesarios.

### Arquitectura técnica — Estado compartido (17 de septiembre de 2026)

#### Context + useReducer
Se utilizan dos nuevos archivos:

- `src/Context/SolutionConfigContext.jsx`: Proveedor con React Context + useReducer.
- `src/Context/solutionConfigReducer.js`: Lógica del reducer y acceso a borradores.

**Responsabilidad limitada:** Conservar el estado del recorrido Precios ↔ Contacto.

**Lo que NO hace:**
- No utiliza localStorage.
- No utiliza sessionStorage.
- No utiliza Redux/Zustand.
- No agregó dependencias nuevas.
- No es la fuente de verdad de la solución activa (eso sigue siendo `?solucion=...`).

**Lo que SÍ conserva:**
- **IDs seleccionados** (funciones adicionales elegidas).
- **Comentario** (explicación del cliente en Contacto).
- **Decisión paquete inicial/personalizado**: influye en el payload.
- **Datos temporales necesarios durante la navegación**.
- **Borradores independientes por solución**: cambiar de solución no mezcla funciones.

**Comportamiento:** El estado puede perderse al:
- Recargar completamente la página (F5).
- Abandonar el ámbito donde vive el Provider (salir de `/precios` o `/contacto`).

Esto es **comportamiento aceptado actualmente** porque Precios y Contacto están dentro del Provider.

#### ProjectConfigurator — Reutilización, no duplicación
- Ubicación: `src/Components/Contact/ProjectConfigurator.jsx`.
- Una **única instancia** montada en Precios (no un configurador por tarjeta).
- **No hay un segundo configurador en Contacto**.
- Utiliza el catálogo de `src/data/projectFeatures.js`.
- Filtra funciones según la solución seleccionada.
- Descarta **características del paquete base** (no las muestra como adicionales).

Flujo:
1. Cerrar el configurador: **conserva el borrador**.
2. Continuar: **conserva la selección** y navega a Contacto.

#### Editar selección
Durante la navegación normal se conserva el borrador necesario.

Flujo:
```
Contacto
  → Editar selección
    → Precios (recarga la página)
      → Reabre/reanuda configuración automáticamente
        → Modificar selección
          → Continuar al formulario
            → Contacto (de nuevo, con cambios)
              → Envío de solicitud
```

Contacto muestra **únicamente un resumen compacto** de la personalización, **no el catálogo completo**.

### Paquete inicial — Decisión explícita
"Continuar con el paquete inicial" es una **decisión explícita**.

Si existían adicionales anteriores para esa solución, **no se envían accidentalmente** al continuar con paquete inicial.

Los borradores permanecen **separados por solución** para evitar mezclar funciones entre productos.

### Catálogo avanzado — Responsabilidad
`src/data/projectFeatures.js` contiene un catálogo de **funciones adicionales/avanzadas** sin copiar sus 90 funciones completas en esta documentación.

**Su responsabilidad:**
- Listar funciones adicionales y avanzadas.
- Definir qué funciones aplican a cada solución.
- Proporcionar nombre, descripción técnica, categoría e información comercial.
- Permitir búsqueda y filtrado dentro del configurador.

**Importantes:**
- Las características del paquete base (definidas en Precios) **no deben aparecer** como adicionales.
- Las funciones se filtran según la solución; no todas aplican a todos los servicios.

### Refinamiento visual — Énfasis en claridad

- **Conectores visuales** entre etapas del recorrido (línea cyan vertical).
- **Colores por zona:**
  - Cyan: recorrido del paquete inicial.
  - Amarillo: alcance y límites.
  - Morado: personalización (botón "Explorar adicionales").
- **Cierre inferior** del recorrido para indicar fin del paquete base.
- **Retorno de foco:** Al cerrar el recorrido o el configurador, el foco vuelve al botón que lo abrió.
- **Transición compatible** con `prefers-reduced-motion: reduce`.
- **Una sola tarjeta/recorrido abierto** cuando corresponde (no multiples expandidas).
- **Revisión responsive:** 320, 375, 768 y 1440 px verificados. Sin overflow horizontal en los recorridos.

### Tests nuevos — Validación del flujo
Se agregaron **7 pruebas nuevas** en `tests/solution-config.test.mjs` para el flujo compartido y estado nuevo.

**Resultado reportado:**
- 34 pruebas existentes + 7 nuevas = 41 pruebas aprobadas.

**Verificaciones adicionales:**
- Lint aprobado: 0 errores, 0 advertencias.
- Build aprobado: verificado en producción.
- Advertencia conocida: bundle JS superior a 500 kB.
- Responsive verificado en 320, 375, 768 y 1440 px.
- Sin overflow horizontal en los recorridos verificados.

**NO se verificaron:**
- Envíos reales al backend.
- Pruebas de red/latencia.
- Capacidades de lectura de pantalla (WCAG en profundidad).
- Demos externas (funcionamiento real de las URLs).

### Protocol vigente
- Protocolo vigente: `consulta-v2`.
- El formulario activo hace POST directo con `URLSearchParams` y `mode: "no-cors"`. No existe GET previo antes del POST.
- El endpoint activo termina en `N8KZUG/exec`.
- La Google Sheet vigente utiliza la pestaña `Contactos`.
- Primero se guarda la solicitud en Sheets; después se intenta enviar correo a Enrique.
- Si el cliente proporcionó un correo válido, se intenta una confirmación independiente al cliente.
- Un fallo de correo no elimina la fila guardada. `NotificacionEnrique` y `ConfirmacionCliente` registran los estados de los intentos de correo.
- El frontend informa del envío para procesamiento, sin afirmar confirmación del backend: `no-cors` impide leer la respuesta.
- `public/script.gs` es la copia local definitiva del backend. Editar ese archivo local no actualiza automáticamente Apps Script remoto.

---

## PENDIENTES ANTES DEL CIERRE FINAL

1. **Revisar manualmente los journeys solución por solución.**
   - Verificar que cada recorrido diferencia realmente el servicio.
   - Asegurar que no contiene funciones inventadas, repetidas o pertenecientes a opciones avanzadas.
   - Soluciones pendientes de revisión: Telegram, Tarjeta Digital, Agenda, Menú WhatsApp, E-Commerce PRO, Web Corporativa, Web + Android, Android personalizado.

2. **Revisar textos comerciales finales.**
   - Descripciones en Home, Precios y Contacto.
   - PLUS destacados en cada tarjeta.
   - Alcance y límites.

3. **Resolver conscientemente la redacción de soporte.**
   - Definición final: "Soporte 24/7" vs "Soporte por WhatsApp".
   - NO decidirla automáticamente; esperar decisión explícita de Enrique.

4. **Agregar posteriormente un control global "Volver arriba"** (si se aprueba).
   - Actualmente cada página se comporta de manera diferente.
   - Considerar una solución uniforme.

5. **Realizar auditoría final de Git.**
   - `git diff --check` antes de commit.
   - Verificar que no se cometan archivos temporales ni cambios no autorizados.

6. **Resolver espacios finales preexistentes** (si aplica).
   - Detectados por `git diff --check` cuando corresponda.
   - No obligatorio si el proyecto decide mantenerlos por compatibilidad.

7. **Revisar cualquier otro pendiente REAL que ya esté documentado** y siga vigente.
   - Consultar este documento para historiales anteriores.

**NO se deben agregar nuevamente como pendientes:**
- Migrar Google Sheets.
- Crear backend consulta-v2.
- Desplegar el backend limpio.

Si la documentación vigente confirma que esas etapas ya fueron cerradas, no volver a listarlas como trabajo pendiente.

---

## IMPLEMENTACIÓN FINALIZADA — 17 de septiembre de 2026

### Header Sticky y Footer Animado + prefers-reduced-motion

**Archivos modificados:**
- `src/Components/Header.jsx`: Agregado `sticky top-0 z-40 w-full` al elemento `<header>`
- `src/Components/Footer.jsx`: Agregada detección de `prefers-reduced-motion` y condicional de transición
- `src/Components/Header.jsx` (Drawer): Agregado `zIndex: 41` al Drawer para asegurar que aparezca por encima del Header sticky

**Comportamiento implementado:**

#### Header Sticky
```
- Position: sticky
- Top: 0px
- Z-index: 40
- Ancho: 100%
- Permanece visible durante scroll
- No tapa contenido al cargar
- Drawer móvil (z-index 41) aparece por encima
```

Flujo:
1. Al cargar → Header aparece normalmente en su posición
2. Al scroll hacia abajo → Se "pega" al top y permanece visible
3. Al scroll hacia arriba → Vuelve a su posición natural

#### Footer con prefers-reduced-motion
```
- IntersectionObserver: detecta entrada al viewport
- useEffect: detecta preferencia del sistema operativo
- matchMedia("(prefers-reduced-motion: reduce)"): obtiene estado
- Condicional de transición:
  - Si usuario tiene "Reducir movimiento" activado: NO aplica transición
  - Si usuario NO tiene esa preferencia: Animación suave (opacity + translateY)
```

Comportamiento:
- Footer continúa en flujo normal (no fixed)
- Cuando entra en viewport: aparece con opacity 0→100 + translateY 8→0
- Si prefers-reduced-motion está activo: aparece instantáneamente
- No tapa contenido, botones ni navegación

#### Jerarquía de z-index
```
Nivel 0:    Contenido normal
Nivel 40:   Header sticky
Nivel 41:   Drawer móvil (menú)
Nivel 50:   BotonWhatsApp (respetado del original)
Nivel ~1300: Modales MUI (ProjectConfigurator, etc.)
```

**Verificaciones completadas:**

✅ **Tests:** 41/41 aprobados (34 contact + 7 solution-config)

✅ **Lint:** 0 errores, 0 advertencias

✅ **Build:** Exitoso
   - 745.08 kB JS (gzip: 234.19 kB)
   - 69.50 kB CSS (gzip: 9.95 kB)
   - Advertencia conocida: bundle JS superior a 500 kB

✅ **Responsive:** Verificado en 320, 375, 768, 1440 px
   - Header sticky visible sin tapar contenido
   - Menú móvil funcional
   - Footer responsivo en 3 columnas
   - Sin overflow horizontal

✅ **Accesibilidad:**
   - prefers-reduced-motion respetado
   - Navegación por teclado funcional
   - Footer sigue siendo contenido accesible

✅ **Comportamiento visual verificado:**
   - A. Header visible al cargar ✓
   - B. Scroll → Header permanece pegado ✓
   - C. Header no tapa contenido ✓
   - D. Menú móvil abre/cierra correctamente ✓
   - E. ProjectConfigurator aparece por encima ✓
   - F. BotonWhatsApp sin conflicto ✓
   - G. Footer entra suavemente en viewport ✓
   - H. Footer NO es fixed ✓
   - I. prefers-reduced-motion funciona ✓
   - J. Sin overflow horizontal ✓

✅ **Trailing whitespace eliminado:**
   - src/Components/Biografia.jsx (líneas 8, 12)
   - src/Pages/Home.jsx (líneas 103, 224, 225)
   - src/utils/constants.js (línea 93)

---

El contenido que sigue conserva el historial de decisiones y verificaciones de cada fecha. Las instrucciones antiguas de configuración, los estados pendientes y los resultados de pruebas describen esas sesiones, no sustituyen el estado vigente anterior ni autorizan nuevas acciones.

---

# SESIÓN COMPLETA — 2026-09-10

## Sesión 1: Preparación para publicidad (Fases 1-2)
- Análisis de UX comercial y creación de `ESTRATEGIA_COMERCIAL_UX.md`
- Cambios iniciales: Hero, productos principales (3), demos, footer
- Eliminación de servicios no disponibles
- Corrección de "Soporte 24/7" → "Soporte por WhatsApp"
- Archivo: `ACTUALIZACION.md` (sesión anterior)

## Sesión 2: Integración del Mini Sistema de Pedidos en Telegram (Fase 3)

**Fecha:** 2026-09-10  
**Lint:** ✅ 0 errores, 0 advertencias  
**Build:** ✅ exitoso (771 kB JS, 63.33 kB CSS)

---

## Cambios de HOY (Fase 3)

### 1. `src/Pages/Home.jsx`
- **Hero actualizado:** "Tres soluciones" → "Cuatro soluciones"
- **Precio mínimo:** "Desde $699" → "Desde $999" (nuevo producto)
- **Grid de tarjetas:** `md:grid-cols-3` → `md:grid-cols-2 lg:grid-cols-4`
- **Nueva tarjeta 1:** Mini Sistema de Pedidos en Telegram
  - Precio: $999 MXN
  - Badge: "Nuevo" (naranja)
  - Sin demo disponible
  - CTA: Solo "Consultar"
- **Tarjeta 2 (Menú Digital):** Destaca con border doble + "Más Popular"
- **Tarjetas 3-4:** Reordenadas (Tarjeta Digital, Agenda Digital)
- **Sección personalización:** 3 items → 4 items (añadido "Precios y categorías")

### 2. `src/Pages/Precios.jsx`
- **Nuevo plan en `planesExpress`:** Mini Sistema de Pedidos en Telegram (posición 1)
- **Orden de planes:** Telegram → Tarjeta → Agenda → Menú Digital (featured)
- **Campos nuevos:** `hasDemo: false`, `demoUrl: null` en Telegram
- **Renderización condicional:** Botón "Ver Demo" solo si `hasDemo === true`
- **Features de Telegram:** Explicadas sin tecnicismos

### 3. `src/Components/DemosDestacadas.jsx`
- **Grid actualizado:** `lg:grid-cols-3` → `lg:grid-cols-4`
- **Nueva demo (posición 1):** Mini Sistema de Pedidos en Telegram
  - ID: "telegram"
  - Sin imagen: gradiente + emoji 📱
  - Sin URL: enlaza a `/contacto?solucion=telegram`
- **Manejo dinámico:** Imágenes null = gradiente; URLs null = Link a contacto

### 4. `src/utils/constants.js`
- **`HOME_PHRASES` actualizado:** 4 productos con precios:
  - "Mini Sistema en Telegram desde $999 📱"
  - "Tarjeta Digital desde $699 🔧"
  - "Agenda Digital desde $1,499 📅"
  - "Menú Digital desde $3,999 🍕"

### 5. `ACTUALIZACION.md`
- Documentado con estructura clara de cambios

### Archivos del repositorio (sin cambios intencionales):
- `ESTRATEGIA_COMERCIAL_UX.md` — análisis previo (nuevo archivo)
- `src/Components/DemosDestacadas.jsx` — nueva lógica de demos (nuevo archivo)
- `src/utils/contact.js` — sin modificar (requerido)

---

## Estructura Comercial Final

### Home (4 tarjetas)
```
1. 📱 Telegram $999       (Nuevo, sin demo)
2. 🍕 Menú $3,999         (Más Popular, con demo)
3. 🔧 Tarjeta $699        (Con demo)
4. 📅 Agenda $1,499       (Con demo)
```

### Precios (Tab 1: Productos Personalizables)
4 planes: Telegram → Tarjeta → Agenda → Menú Digital (featured)

### Demos (4 tarjetas)
1. Telegram (gradiente, sin URL) → contacto
2. Menú Digital (imagen + URL) → oliver-pizzas.vercel.app
3. Agenda Digital (imagen + URL) → podologos-ten.vercel.app
4. Tarjeta Digital (imagen + URL) → web-oficios.vercel.app

---

## Decisiones Comerciales

✅ **Orden por narrativa:** Entrada (Telegram) → Completo (Menú) → Alternativas (Tarjeta, Agenda)  
✅ **Telegram sin demo disponible aún:** Solo CTA a contacto pre-llenado  
✅ **Demo URL compartida:** oliver-pizzas como referencia para ambos (web y futura versión Telegram)  
✅ **Presentación sin tecnicismos:** Sin mencionar Vercel, APIs, Mini Apps  
✅ **Sin promesas de hosting/mantenimiento:** Solo "Pago único, sin mensualidad"

---

## Diferenciación Clara

| Aspecto | Telegram $999 | Menú Digital $3,999 |
|---------|---|---|
| **Dónde funciona** | Dentro de Telegram | Tu sitio web propio |
| **Para quién** | Micro negocios, inicio | Negocios establecidos |
| **Presencia** | Privada (dentro app) | Pública (web) |
| **Alcance** | Sistema sencillo | Presencia completa |
| **Demo** | No disponible | Sí, accesible |

---

## Verificación Final

✅ **Lint:** 0 errores, 0 advertencias  
✅ **Build:** exitoso (771 kB JS, 63.33 kB CSS)  
✅ **Home:** 4 tarjetas renderizadas correctamente  
✅ **Precios:** 4 planes en Tab 1  
✅ **Demos:** 4 tarjetas (1 con gradiente, 3 con imágenes)  
✅ **Navegación:** Links funcionales a demos y contacto  
✅ **HOME_PHRASES:** 4 frases rotatorias  

---

## Lo que NO fue modificado

- ✅ `Contacto.jsx` — sin cambios (protegido)
- ✅ `src/utils/contact.js` — sin cambios (protegido)
- ✅ `public/script.gs` — sin cambios (protegido)
- ✅ Importes de productos — sin cambios
- ✅ Proyectos Premium/Especiales — sin cambios
- ✅ Identidad visual — sin cambios

---

## Advertencias del Build (PREEXISTENTES)

⚠️ CSS `@import` de Google Fonts debe ir antes de otras reglas  
⚠️ Chunk JS de 771 kB supera 500 kB (React + MUI)  

Ambas advertencias existían antes de hoy. No fueron introducidas por los cambios.

---

## PENDIENTES PARA MAÑANA

### Críticos
1. ❌ **Actualizar Google Apps Script desplegado**
   - El formulario funciona pero puede necesitar ajustes para campo "solucion=telegram"
   - Revisar integración con Google Sheets

2. ❌ **Prueba real del formulario**
   - Enviar como cada tipo de solución (telegram, pizzeria, tarjeta, agenda)
   - Verificar que llega a Google Sheets correctamente
   - Verificar envío de confirmación por email

3. ❌ **Revisión visual en móvil y escritorio**
   - Las 4 tarjetas en Home responsivas
   - Grid de 4 demos en diferentes tamaños
   - Tabs en Precios funcionando

4. ❌ **Revisar URL/acceso de Telegram**
   - Confirmar si oliver-pizzas.vercel.app tiene versión Telegram integrada
   - O si se necesita URL separada después

### Importantes
5. ❌ **Definición futura del mantenimiento anual**
   - Qué incluye
   - Costo
   - Duración

6. ❌ **Revisión final de precios**
   - ¿Son realistas?
   - ¿Tiempo de entrega estimado?
   - ¿Máximo de cambios/revisiones?

7. ❌ **Capturas definitivas**
   - Telegram (cuando esté lista)
   - Cualquier otra actualización visual

### Menores
8. ❌ **Documentación de proceso de venta**
   - Checklist de personalización por producto
   - Plantillas de comunicación

---

## Archivos Modificados Esta Sesión

```
Modificados (de esta sesión):
  ✏️  src/Pages/Home.jsx                 (+298/-298 líneas — reorg. de 3 a 4 tarjetas)
  ✏️  src/Pages/Precios.jsx              (+144/-144 líneas — nuevo plan Telegram)
  ✏️  src/Components/Footer.jsx          (+46/-46 líneas — por sesión anterior)
  ✏️  src/Pages/Clientes.jsx             (+255/-255 líneas — por sesión anterior)
  ✏️  src/utils/constants.js             (+13/-13 líneas — HOME_PHRASES actualizado)
  ✏️  ACTUALIZACION.md                   (Documentado)

Nuevos (de esta sesión):
  ✨  src/Components/DemosDestacadas.jsx (Nueva estructura, lógica condicional)

Protegidos (sin cambios):
  🔒 src/Pages/Contacto.jsx
  🔒 src/utils/contact.js
  🔒 public/script.gs
```

---

## Resumen de la Sesión

**Fase completada:** Integración del Mini Sistema de Pedidos en Telegram como cuarto producto principal.

**Lo logrado:**
- Nuevo producto ($999) añadido a Home, Precios y Demos
- Estructura flexible para demos sin URL (gradiente + emoji)
- Diferenciación clara entre Telegram (privado/micro) y Menú Digital (público/establecido)
- 4 HOME_PHRASES rotatorias con precios
- Lint y build sin errores

**Lo verificado:**
- Código renderiza sin errores
- No hay conflictos en navegación
- Formulario pre-llenado funciona (`?solucion=telegram`)
- Responsive para 4 tarjetas (verificar en móvil mañana)

**Lo pendiente:**
- Pruebas reales del formulario completo
- Revisión visual en dispositivos reales
- Integración definitiva del sistema Telegram
- Documentación de mantenimiento y precios finales

---

## Mensaje de Commit (Listo, Sin Ejecutar)

```
feat: agregar Mini Sistema de Pedidos en Telegram como cuarto producto principal

- Integrar nueva solución $999 MXN en Home (4 tarjetas)
- Añadir plan Telegram en Precios tab Productos Personalizables
- Crear demo sin URL con presentación visual (gradiente + emoji)
- Reordenar productos por narrativa comercial (entrada → completo → alternativas)
- Marcar Menú Digital como "Más Popular"
- Actualizar HOME_PHRASES con 4 frases rotatorias con precios
- Documentar decisiones comerciales en ACTUALIZACION.md

Verificado:
- Lint: 0 errores
- Build: exitoso (771 kB JS, 63.33 kB CSS)
- Sin cambios en archivos protegidos (Contacto, contact.js, script.gs)

Pendientes para mañana:
- Actualizar Google Apps Script para nuevo campo solucion
- Pruebas reales del formulario
- Revisión visual en móvil y escritorio
- Definición de mantenimiento anual
```




---

# CIERRE DE SESIÓN — 2026-09-12

## 1. Estado actual de Precios

La maquetación de `src/Pages/Precios.jsx` se considera suficientemente estable.

Se aprobó:

- Encabezado "Mis precios".
- Texto: "Elige la opción que mejor se adapte a tu negocio."
- Selector segmentado:
  - Precios accesibles
  - Precios Premium
- Responsive aprobado visualmente en PC y móvil.
- No modificar por ahora el grid ni la posición visual de los precios.

El bloque "Aplicaciones Android" fue cambiado a un bloque especial de cotización:

- Título: Aplicaciones Android
- Texto principal:
  "Desarrollo de aplicaciones adaptadas a las necesidades de tu proyecto."
- Texto secundario:
  "Las funciones, integraciones y complejidad se definen según tus requerimientos."
- Precio: "Cotización personalizada"
- CTA: "Cotiza tu aplicación"
- Ruta: `/contacto`

No se debe presentar este servicio como desarrollo Android nativo ilimitado.
El proyecto debe analizarse antes de aceptar y cotizar.

## 2. Estrategia comercial definida

Se estableció esta regla:

**PERSONALIZACIÓN INCLUIDA ≠ DESARROLLO NUEVO INCLUIDO**

Los productos predesarrollados pueden incluir personalización dentro de un alcance definido.

Funciones nuevas, integraciones, mayor complejidad o requerimientos fuera del alcance base se cotizan por separado.

La estructura provisional es:

- Tarjeta Digital: $699 MXN
- Sistema de pedidos desde Telegram: Desde $999 MXN
- Agenda Digital: Desde $1,499 MXN
- Menú Digital con pedidos detallados a WhatsApp: Desde $3,999 MXN
- E-Commerce PRO: Desde $9,499 MXN
- Web Corporativa: Desde $9,999 MXN
- Web + App Android: Desde $13,999 MXN
- Aplicaciones Android: Cotización personalizada

Los importes todavía deben considerarse parte de la estrategia comercial en revisión.
No modificar precios numéricos sin autorización.

## 3. Protección del alcance

Se decidió que los paquetes deberán tener límites claros.

Ejemplos que se estudiarán:

- cantidad de productos;
- categorías;
- revisiones;
- usuarios;
- empleados;
- sucursales;
- integraciones;
- funciones adicionales;
- mantenimiento.

Se habló como ejemplo de un máximo de 30 productos para Telegram, pero:

**IMPORTANTE:**
30 productos NO está aprobado todavía como límite definitivo.

Primero se debe analizar cuánto trabajo representa y proteger el margen.

La aclaración comercial general propuesta es:

"Los precios mostrados corresponden a la configuración base de cada solución. Funciones, integraciones o requerimientos adicionales se cotizan por separado."

## 4. Estrategia PLUS

Objetivo:

Encontrar extras con ALTO VALOR PERCIBIDO para el cliente y BAJO COSTO de implementación para Enrique.

No utilizar descuentos grandes como primera estrategia.

Candidatos encontrados durante el análisis:

**Tarjeta Digital:**
- QR personalizado.
- Guardar contacto / vCard.

**Telegram:**
- QR directo al bot.
- Enlace directo al bot.
- Configuración inicial.
- Bot configurado y listo para utilizar.

**Agenda:**
- QR para reservar.
- Configuración inicial.
- Posible PWA cuando técnicamente aplique.

**Menú WhatsApp:**
- QR para mesas/local.
- Configuración inicial.
- PWA cuando técnicamente aplique.

Estos PLUS son **CANDIDATOS**.
No anunciarlos todavía como incluidos hasta revisar técnicamente cada producto.

## 5. Telegram — decisión importante

No limitar conceptualmente Telegram solamente a restaurantes.

Telegram es el ecosistema desde el cual pueden abrirse Mini Apps/web apps.

El sistema actual de pizzería es una implementación orientada a pedidos, pero en el futuro la misma tecnología puede utilizarse para:

- catálogos;
- pedidos;
- agendas;
- servicios;
- carritos;
- cotizaciones;
- otras Mini Apps.

Separación comercial propuesta:

**Producto predesarrollado:**
"Sistema de pedidos desde Telegram"
Desde $999 MXN.

**Proyecto personalizado:**
"Mini Apps para Telegram"
Cotización según proyecto.

NO implementar todavía una nueva tarjeta/producto de Mini Apps.
Es una posibilidad comercial futura.

**IMPORTANTE:**
No afirmar todavía que los pedidos finales se reciben directamente en Telegram porque esa funcionalidad no ha sido validada.

## 6. Modelo comercial

La estrategia principal queda:

**PRECIO FIJO**
cuando el alcance está completamente controlado.

**DESDE $X**
cuando existe una configuración base pero el alcance puede crecer.

**COTIZACIÓN PERSONALIZADA**
cuando las funcionalidades dependen de los requerimientos del cliente.

El público principal continúa siendo micro y pequeños negocios que necesitan soluciones digitales accesibles y predesarrolladas/personalizables.

Los desarrollos especiales y Premium son una segunda línea.

## 7. Investigación de competencia realizada

Se inició análisis comercial de:

- Tarjeta Digital
- Telegram
- Agenda
- Menú WhatsApp
- E-Commerce
- Web Corporativa
- Web + Android
- Aplicaciones Android

Conclusión provisional:

El principal riesgo detectado no es únicamente el precio.

El riesgo principal es NO definir correctamente qué incluye cada precio y permitir que un cliente interprete un paquete económico como desarrollo personalizado ilimitado.

Por eso los límites de alcance serán parte fundamental de la siguiente fase.

## 8. CAMBIOS REALIZADOS EN ESTA SESIÓN

**Archivo:** `src/Pages/Precios.jsx`

**Modificaciones:**

1. **Precios con "Desde"** (6 productos):
   - Sistema de pedidos desde Telegram: `"Desde $999"`
   - Agenda Digital: `"Desde $1,499"`
   - Menú Digital con Pedidos por WhatsApp: `"Desde $3,999"`
   - E-Commerce PRO: `"Desde $9,499"`
   - Web Corporativa: `"Desde $9,999"`
   - Web + App Android: `"Desde $13,999"`

2. **Precio sin "Desde"** (1 producto):
   - Tarjeta Digital: `"$699"` (NO se modificó)

3. **Aclaración comercial agregada:**
   - Ubicación: antes del cierre de `</section>` de precios
   - Texto: "Los precios mostrados corresponden a la configuración base de cada solución. Funciones, integraciones o requerimientos adicionales se cotizan por separado."
   - Presentación: borde superior discreto, texto pequeño, legible en móvil
   - NO parece advertencia legal ni letra pequeña escondida

4. **Aplicaciones Android:**
   - SIN CAMBIOS. Continúa mostrando "Cotización personalizada"

**Verificación:**

- ✅ Lint: 0 errores
- ✅ Build: exitoso (738.33 kB JS, 64.21 kB CSS)
- ✅ Tarjeta Digital sin "Desde"
- ✅ Aplicaciones Android intacta
- ✅ Aclaración comercial legible en todos los tamaños

## 9. PENDIENTE PARA LA PRÓXIMA SESIÓN

**PRIORIDAD 1:**

Crear la matriz comercial definitiva:

```
PRODUCTO
→ PRECIO BASE
→ QUÉ INCLUYE
→ LÍMITES
→ PLUS
→ QUÉ SE COBRA ADICIONAL
→ MANTENIMIENTO
```

Revisar producto por producto.

**PRIORIDAD 2:**

Definir límites reales, especialmente cantidad de productos, modificaciones y trabajo inicial.

**PRIORIDAD 3:**

Definir los PLUS definitivos de cada producto verificando primero que realmente puedan entregarse con bajo costo de trabajo.

**PRIORIDAD 4:**

Revisar mantenimiento, hosting, dominio y modificaciones posteriores.

No prometer hosting gratuito para siempre ni mantenimiento ilimitado.

**PRIORIDAD 5:**

Después de cerrar precios y alcance, rediseñar/revisar la promoción y ModalPromocion.

La promoción actual relacionada con Web + Android NO debe considerarse comercialmente aprobada.

**PRIORIDAD 6:**

Después revisar Contacto y adaptar sus opciones al catálogo definitivo.

**PRIORIDAD 7:**

Posteriormente:
- desplegar/actualizar Google Apps Script;
- realizar prueba real del formulario;
- revisar demos una por una;
- resolver al final el comportamiento/enlace de Telegram.

## 10. Reglas para continuar

- No inventar funcionalidades.
- No inventar límites.
- No cambiar precios sin autorización.
- No presentar demos como clientes reales.
- No crear testimonios falsos.
- No prometer tiempos de entrega todavía.
- No prometer soporte 24/7.
- Preferir "Soporte por WhatsApp".
- No afirmar que el formulario de producción funciona hasta probar el Apps Script desplegado.
- No afirmar recepción directa de pedidos en Telegram hasta probarla.
- No realizar commit ni push sin autorización explícita.
- Antes de modificar código, indicar exactamente qué archivo se propone modificar y por qué.

## 11. Punto exacto para retomar

La próxima sesión debe comenzar directamente con:

**MATRIZ COMERCIAL DEFINITIVA DE PRODUCTOS**

Comenzar por:

1. Tarjeta Digital
2. Telegram
3. Agenda Digital
4. Menú WhatsApp
5. E-Commerce
6. Web Corporativa
7. Web + App Android
8. Aplicaciones Android

No volver a auditar toda la página de Precios salvo que se detecte un problema nuevo.

Al terminar:

- reporta únicamente que `ACTUALIZACION.md` fue actualizado;
- indica la sección agregada;
- NO modifiques código;
- NO commit;
- NO push.

---

# CONTINUIDAD — 2026-09-13 — CATÁLOGO COMERCIAL, PLUS Y ALCANCE

## Decisión vigente e implementación

Se leyó completo este documento, especialmente `CIERRE DE SESIÓN — 2026-09-12`.
La instrucción más reciente autoriza publicar los entregables comerciales QR/guardar contacto, los límites iniciales y dominio/hosting por un año en los tres paquetes Premium. Estas decisiones sustituyen su carácter de candidatos en el cierre histórico, sin dar por implementadas capacidades técnicas pendientes.

La actualización comercial está implementada en `src/Pages/Precios.jsx`. Los datos siguen definidos localmente; no se cambiaron arquitectura, imports, dependencias ni componentes externos.

| Producto | Precio mostrado | Alcance principal | PLUS destacado |
|---|---|---|---|
| Tarjeta Digital | $699 MXN, sin Desde | Información personalizada, WhatsApp, teléfono/correo, redes, ubicación/mapa, QR, guardar contacto y diseño adaptable | QR para compartir + Guardar contacto |
| Sistema de pedidos desde Telegram | Desde $999 MXN | Acceso desde Telegram, catálogo/categorías, carrito, personalización y configuración inicial de hasta 30 productos | QR directo al bot + Configuración inicial incluida |
| Agenda Digital | Desde $1,499 MXN | Servicios, horarios, solicitud/reserva de citas, contacto y diseño adaptable | QR directo para reservar + Configuración inicial incluida |
| Menú Digital con Pedidos a WhatsApp | Desde $3,999 MXN | Catálogo/categorías, carrito, pedido detallado a WhatsApp y configuración inicial de hasta 50 productos | QR listo para tu negocio + Sin comisión nuestra por pedido |
| E-Commerce PRO | Desde $9,499 MXN | Catálogo/categorías, carrito, proceso de compra, información del negocio y hasta 30 productos en la configuración inicial | Dominio + hosting por 1 año incluidos |
| Web Corporativa | Desde $9,999 MXN | Presentación de empresa/servicios, contacto, redes, formulario y hasta 5 secciones o páginas principales | Dominio + hosting por 1 año incluidos |
| Web + App Android | Desde $13,999 MXN | Web y experiencia Android cuando sea técnicamente viable, con alcance definido según requerimientos | Web + experiencia Android + Dominio y hosting por 1 año |
| Aplicaciones Android | Cotización personalizada | Bloque aprobado intacto: funcionalidades, integraciones y complejidad según requerimientos; CTA a /contacto | No se agregó PLUS ni precio |

## Alcance, servicios y mantenimiento

- Se conserva: **PERSONALIZACIÓN INCLUIDA ≠ DESARROLLO NUEVO INCLUIDO**.
- Los límites 30/50/30 corresponden a configuración/carga inicial comercial; no son límites técnicos del software.
- Se muestra configuración inicial y **Soporte por WhatsApp** en las siete tarjetas. No se anuncian soporte 24/7 ni mantenimiento ilimitado.
- **Dominio por 1 año** y **Hosting por 1 año** aparecen únicamente en E-Commerce PRO, Web Corporativa y Web + App Android.
- Las tarjetas tienen aclaraciones específicas sobre ampliaciones, integraciones y desarrollo especializado.
- La aclaración general de configuración base y cotización adicional se mantiene una sola vez.
- Se agregó: "Renovaciones, mantenimiento y servicios posteriores al periodo incluido se cotizan por separado."
- La FAQ de dominio/hosting identifica los tres planes con primer año incluido y aclara renovaciones y mantenimiento.
- No se prometen pagos incluidos, IA, inventario sincronizado, CRM, GPS, repartidores, facturación, Google Calendar, recordatorios automáticos, múltiples empleados/sucursales, publicación garantizada en Google Play, capacidades nativas universales ni funcionamiento offline completo.

## Presentación y enlaces

- Se conservaron encabezado, selector, grid de tres columnas desde md, estilo general, demos, botones y rutas.
- El precio permanece al comienzo de la tarjeta, antes de la descripción. "Desde" tiene menor jerarquía que el importe y la moneda muestra MXN.
- Cada tarjeta incorpora una sola zona discreta "PLUS incluido"; no se agregaron urgencia ni promociones.
- A 320 px, el selector admite etiquetas en dos líneas para evitar que se corten.
- Entre 768 y 1023 px, los títulos de las tarjetas usan 20 px y los importes 30 px para respetar su espacio interno; en tamaños mayores recuperan la jerarquía anterior. "Más Popular" permanece en una línea.
- Telegram conserva exactamente: **https://t.me/pizzas_test525_bot**.
- Las otras URLs y todos los CTA permanecen iguales. El bloque Aplicaciones Android fue comparado y está intacto.

## Verificación realmente realizada

- `npm run lint`: aprobado, sin errores ni advertencias.
- `npm run build`: aprobado; JS 741.89 kB y CSS 65.29 kB. Persiste la advertencia de chunk JS mayor de 500 kB.
- Revisión en Chrome headless de ambos tabs a **320, 375, 430, 768, 1024 y 1440 px**, con medición de overflow, cajas de texto, botones y capturas.
- Ningún ancho presentó overflow horizontal. Las siete tarjetas no presentaron textos que excedieran su caja interna tras las correcciones.
- Se repitieron 320 y 768 px después de ajustar selector y tipografía.
- Excepción pendiente: en el bloque Aplicaciones Android aprobado, el título y "Cotización personalizada" exceden ligeramente sus cajas internas a 320 px. No provocan scroll horizontal; no se modificó el bloque. A 375 px y superiores no se detectó este problema.
- Se revisaron diff y precios exactos, ausencia de duplicados en listas, URLs, rutas, grid y bloque Android. Los cambios previos de Home y otras partes del repositorio fueron preservados.

## Pendientes y continuidad

- **Guardar contacto/vCard:** el texto comercial fue autorizado y publicado. Su implementación o entrega funcional no fue desarrollada ni validada en esta tarea; verificar antes de producción.
- **QR:** se anuncian como entregables del servicio, no como componentes generadores dentro de la aplicación. Queda pendiente generar/entregar y validar que cada código apunte al enlace correcto antes de producción. No se implementó un generador QR.
- No se verificaron funcionalmente las demos externas ni se implementaron sus capacidades en esta tarea. Las listas base publicadas siguen la autorización comercial del usuario.
- Revisar el detalle del bloque Android a 320 px antes de aprobar la presentación final.
- La promoción Web + Android sigue pendiente de revisión comercial. ModalPromocion no fue modificado.
- No continuar aún con promociones, Contacto, Apps Script, onboarding Telegram, demos externas, Home o branding.
- Archivos modificados en esta tarea: `src/Pages/Precios.jsx` y esta sección agregada a `ACTUALIZACION.md`.
- **Sin commit y sin push. Esperar revisión del usuario.**


---

# CIERRE PRECIOS — 2026-09-13 — RESPONSIVE ANDROID CORREGIDO

- Se cerró el pendiente de desbordamiento interno del bloque Aplicaciones Android a 320 px.
- Cambio mínimo en dos clases de `src/Pages/Precios.jsx` (aproximadamente líneas 402 y 421): título de 24 px y cotización de 19 px por debajo de 375 px. Desde 375 px se conservan los tamaños anteriores.
- Chrome headless: verificado a 320, 375, 430, 768, 1024 y 1440 px; sin overflow horizontal, desbordamiento interno ni texto cortado; bloque centrado.
- `npm run lint`: aprobado, sin errores ni advertencias.
- `npm run build`: aprobado; contiene el ajuste final de 19 px. Persiste la advertencia de chunk JS mayor de 500 kB (741.94 kB).
- Ningún texto comercial, precio, lista, PLUS, grid, estructura del bloque, CTA o ruta cambió.
- Solo se modificaron `src/Pages/Precios.jsx` y esta sección de continuidad de `ACTUALIZACION.md`.
- Sin commit y sin push. Detenerse y esperar revisión.

---

# CIERRE DE SESIÓN — 2026-09-13 — CONFIGURADOR COMERCIAL / CONTACTO

## Estado de la fase

**IMPLEMENTADO LOCALMENTE — PENDIENTE DE AUDITORÍA/APROBACIÓN Y CIERRE.**

No declarar el configurador terminado. La implementación local y sus verificaciones técnicas están realizadas; falta aprobar/cerrar comercialmente el catálogo. El backend estructurado está pendiente. El nuevo flujo General de solicitud de llamada NO está implementado. Las pruebas reales del envío están pendientes. Hoy se cierra únicamente la documentación, sin nuevas funciones ni correcciones.

## Implementación local existente

- Básicos: `tarjeta`, `telegram`, `agenda`, `menu_whatsapp`; pregunta Sí/No sobre adicionales. No genera «No necesita nada adicional.»; Sí abre extras filtrados del servicio y comentario opcional.
- Premium: `ecommerce`, `web_corporativa`, `web_android`, `android`; datos personales más configurador y comentario opcional.
- General: `general` («Aún no estoy seguro»); actualmente conserva datos completos y textarea obligatorio. No utiliza configurador. Su simplificación se auditó solamente como propuesta.
- Stepper responsive compacto; modal/configurador; buscador por nombre sencillo, nombre técnico, descripción y categoría; acordeones colapsables; detalles técnicos y notas comerciales; contadores; resumen compacto con primeras cuatro funciones y cantidad restante.
- Catálogo de **90 funciones avanzadas en 20 categorías**, con IDs estables, nombre, nombre técnico, descripción, categoría, `aplicaA`, complejidad interna (`media`, `alta`, `avanzada`) y metadata comercial/servicios externos cuando corresponde.
- `SERVICE_BASE_FEATURES` documenta bases por servicio; `getAdditionalFeatures` combina compatibilidad y exclusión por ID. Si un extra pasa al plan base, añadir su ID a las bases del servicio lo excluye del configurador.
- Las selecciones se convierten temporalmente en texto dentro de `necesidad`, junto con el comentario del cliente. Se mantiene el límite de 2000 caracteres, sin truncamiento silencioso; se informa el exceso y se impide enviarlo.

| Servicio | Funciones disponibles |
|---|---:|
| tarjeta | 5 |
| telegram | 22 |
| agenda | 25 |
| menu_whatsapp | 24 |
| ecommerce | 63 |
| web_corporativa | 47 |
| web_android | 89 |
| android | 90 |

## Principio comercial vigente

**PRECIOS.JSX = FUNCIONALIDADES BASE YA INCLUIDAS.**

**CONFIGURADOR = ÚNICAMENTE FUNCIONALIDADES ADICIONALES, AVANZADAS O ESPECIALES.**

Una función incluida en la tarjeta comercial de un servicio no debe mostrarse nuevamente como adicional para ese mismo servicio. Precios y sus PLUS son la fuente comercial de verdad. Se conserva **PERSONALIZACIÓN INCLUIDA ≠ DESARROLLO NUEVO INCLUIDO**.

El configurador descubre necesidades que pueden ampliar el alcance y modificar la cotización. Seleccionar una función no implica inclusión en el precio base, precio automático, implementación garantizada ni ausencia de servicios externos. Viabilidad, alcance y cotización se revisan posteriormente; no se prometen compatibilidad universal ni capacidades móviles universales.

## Alcance del catálogo avanzado

Se amplió para E-Commerce avanzado, CRM robusto, sistemas empresariales, aplicaciones móviles, delivery, movilidad, servicios bajo demanda, logística, seguimiento en tiempo real, multi-sucursal, inventario, automatizaciones, integraciones, APIs e Inteligencia Artificial.

- CRM: ficha/historial del cliente, segmentos, prospectos/oportunidades, tareas comerciales, postventa e importación.
- Logística: seguimiento, asignación/reasignación, disponibilidad/aceptación, tablero operativo, cobertura/geofencing, tarifas, rutas/paradas, recorridos, prueba de entrega, calificaciones, ETA y proveedores de envío. Son capacidades técnicas individuales, no promesas de clonar plataformas existentes.
- IA: nueve usos concretos — asistente del negocio, búsqueda semántica, recomendaciones, clasificación de mensajes/prospectos, resúmenes/respuestas sugeridas, extracción documental/OCR, asistente interno, contenido/traducción asistidos y análisis de métricas/anomalías. Incluyen aviso de APIs/consumos y costos por revisar, sin prometer modelos específicos.

## Auditoría y aprobación pendientes

Durante la expansión se realizó una primera revisión contra las tarjetas de Precios y comprobaciones locales de IDs únicos, nombres únicos, complejidades, compatibilidad, exclusión de bases y exclusión futura al incorporar un extra al plan base. No se detectaron bases repetidas en esa revisión: carrito/catálogo/categorías y compra base no se ofrecen nuevamente para los servicios que los incluyen; tampoco contacto/redes/mapa/QR de Tarjeta, reserva simple de Agenda o formulario base de Corporativa.

Estas comprobaciones NO sustituyen la auditoría comercial/funcional profunda solicitada ni su aprobación definitiva. Sigue pendiente revisar las 90 funciones para detectar duplicados conceptuales, solapamientos, compatibilidad y funciones mal aplicadas, bases incorrectamente mostradas, huecos, profundidad de CRM/logística/IA, categorías, lenguaje para clientes, riesgos comerciales y servicios externos. La unicidad de IDs/nombres no demuestra ausencia de solapamientos conceptuales.

No hay una lista definitiva de correcciones aprobadas: deben decidirse al revisar el catálogo. No eliminar, fusionar, reclasificar, agregar ni corregir funciones hoy. La concordancia del contador singular fue corregida en la implementación anterior y validada con lint/build; no es un pendiente nuevo.

## General: propuesta auditada, NO implementada

`general` = «Aún no estoy seguro» debe convertirse en contacto rápido de orientación: quien no conoce la solución no tiene que explicar técnicamente su proyecto.

Propuesta recomendada, pendiente de aprobación final e implementación:

- Título: «¿No sabes cuál elegir?».
- Texto: «No te preocupes. Déjame tus datos y coordinamos una llamada para conocer lo que necesitas y orientarte.».
- Únicos campos obligatorios: Nombre, Teléfono / WhatsApp y Horario preferido.
- Sin configurador, cuestionario técnico, textarea obligatorio, negocio obligatorio ni correo obligatorio. Se recomendó ocultar también el cupón.
- CTA: **«Solicitar llamada»**.
- Pregunta de horario: «¿En qué horario prefieres que te contacte?»; selección única «Por la mañana», «Por la tarde», «Otro horario». Esta redacción evita confundir mañana como franja con mañana como fecha. «Otro horario» permitiría referencia breve obligatoria, máximo 120 caracteres. UX final y zona horaria aún por definir.
- Aclaración: «Es una preferencia de contacto; el horario se confirmará contigo.» No es agenda con disponibilidad real ni cita reservada automáticamente.
- Confirmación propuesta, solo tras registro confirmado: «Tu solicitud quedó registrada. Me pondré en contacto contigo para confirmar el horario de la llamada. El horario indicado es una preferencia, no una cita confirmada.» Conservar referencia de solicitud.

Impacto posterior: campos/título/CTA/confirmación y stepper condicionales en Contacto; validación frontend por servicio; payload de horario; validación condicional en Apps Script; almacenamiento y correo interno específicos para llamadas. Básicos y Premium deben mantener datos y selección de adicionales/configurador.

Casos límite: «Otro horario» vacío, día y zona horaria no especificados, URL inválida que actualmente deriva a General, cambio de servicio, reintentos y timeout, notificación interna fallida y compatibilidad con solicitudes actuales. No inventar negocio, correo o necesidad para superar validaciones. El backend compatible debe desplegarse/verificarse antes de activar el envío simplificado.

## Backend actual y pruebas reales pendientes

> **HISTÓRICO / OBSOLETO — NO USAR COMO CONFIGURACIÓN ACTUAL**
> Describe el backend y endpoint anteriores de esa sesión, incluido `consulta-v1`. Consultar el estado vigente al comienzo del documento.

- Se conserva `consulta-v1`, endpoint existente y envío remoto actual. El backend NO está adaptado al configurador estructurado.
- `necesidad` serializada es **TRANSITORIA**; no se envían aún IDs, complejidad o categorías como campos estructurados.
- `contact.js` y `public/script.gs` actualmente exigen nombre, teléfono, correo, negocio y necesidad para todos los servicios, incluido General. General simplificado sería rechazado sin adaptar ambos lados.
- Se mantienen requestId, deduplicación por huella, bloqueo, guardado confirmado y notificación solo al responsable. No se envía confirmación automática al correo del visitante.
- El último chequeo remoto conocido del endpoint devolvió HTML con «No se encontró la función de la secuencia de comandos: doGet». No afirmar que producción funciona: revisar versión desplegada y acceso en la fase de backend. Ese chequeo fue de lectura, no un envío real.
- No modificar hoy Apps Script, endpoint, Google Sheets ni protocolo.

## Próxima fase: datos estructurados

Después de aprobar UX y catálogo, definir cómo almacenar servicio, funciones adicionales, IDs estables, nombres legibles, comentario, respuesta Sí/No de Básicos, solicitud de llamada General y horario preferido.

Revisar validación frontend, payload definitivo, Apps Script, Google Sheets, correo interno y compatibilidad con solicitudes/reintentos actuales. Para General se sugirieron `horarioPreferido` y `horarioDetalle`; aún no constituyen contrato definitivo de payload. Los campos nuevos deben incluirse en la huella sin invalidar reintentos anteriores.

Sheets actualmente utiliza once columnas: Referencia, Fecha, Nombre, Telefono, Correo, Negocio, Solucion, Necesidad, Cupon para revision, Notificacion, Huella. Se recomendó añadir columnas de horario al final, conservando posiciones, y dejar Correo/Negocio/Necesidad vacíos para General. La pestaña existente requiere migración explícita: el script solo crea encabezados si no existe. La estructura final del configurador puede requerir más columnas y debe decidirse conjuntamente.

El correo interno de General debe indicar solicitud de llamada, nombre, teléfono y horario preferido, sin confirmación de cita. No implementar ninguna de estas propuestas hoy.

## Verificaciones conocidas de la implementación local

- `npm run lint`: aprobado, sin errores.
- `npm run build`: aprobado; último JS 804.26 kB, CSS 65.83 kB. Persiste advertencia de bundle/chunk > 500 kB.
- `git diff --check`: aprobado.
- Chrome local sobre el build: ocho servicios, apertura del modal, categorías inicialmente cerradas, selección y resumen; búsqueda por nombre técnico, descripción y categoría; búsqueda sin resultados conserva selección; cambio de servicio reinicia selección; General actual conserva textarea obligatorio sin configurador.
- Responsive verificado a **320, 375, 390, 768 y 1440 px**, sin scroll horizontal/desbordamiento interno, tanto con categorías colapsadas como abiertas y detalles largos. Capturas revisadas a 320 y 1440 px; cierre accesible y scroll vertical interno.
- No se enviaron solicitudes reales al backend durante estas pruebas del configurador. Guardado en Sheets y recepción real de correos siguen pendientes.
- Estas verificaciones corresponden al código local anterior al cierre documental; no prueban el flujo General propuesto ni capacidades seleccionables ya desarrolladas en productos.

## Archivos y estado real de Git

Rama actual: `main`. Último commit existente: `d4174e5` — `docs: actualiza convenio de prestacion de servicios digitales`. No se creó commit de Contacto/configurador.

Trabajo del configurador actual:
- `src/Pages/Contacto.jsx`: UX y lógica local; contiene además trabajo acumulado de fases anteriores de contratación.
- `src/data/projectFeatures.js`: catálogo, bases y filtrado; nuevo, sin seguimiento.
- `src/Components/Contact/ProjectConfigurator.jsx`: modal extraído; nuevo, sin seguimiento.
- `ACTUALIZACION.md`: únicamente documentación añadida en este cierre.

Cambios locales anteriores, conservados intactos en la expansión y en este cierre:
- `src/Pages/Home.jsx`: línea en blanco adicional ajena a la fase; no agregar ni revertir accidentalmente.
- `src/Pages/Precios.jsx`: cambios previos de UX de contratación/enlaces; no modificados por la expansión del catálogo.
- `src/utils/contact.js` y `public/script.gs`: trabajo anterior del flujo de contratación/validación/backend; no modificados por la expansión ni por este cierre. Son relevantes para la futura fase de backend, pero no deben mezclarse automáticamente en un commit.
- `CONTRATO_REFERENCIA.md`: sin cambios pendientes.

Estado tras agregar esta sección (todos los cambios fuera de staging):

```text
 M ACTUALIZACION.md
 M public/script.gs
 M src/Pages/Contacto.jsx
 M src/Pages/Home.jsx
 M src/Pages/Precios.jsx
 M src/utils/contact.js
?? src/Components/Contact/
?? src/data/
```

No revertir cambios anteriores ni hacer staging. Antes de un futuro commit, inspeccionar diff y seleccionar exclusivamente los archivos aprobados. Sin commit ni push en este cierre.

## Orden exacto para retomar mañana

1. Revisar el resultado de la auditoría de las 90 funciones.
2. Decidir qué funciones conservar, eliminar, fusionar, reclasificar o agregar.
3. Corregir y cerrar definitivamente el catálogo del configurador.
4. Implementar el nuevo flujo simplificado: «Aún no estoy seguro» → Solicitar llamada.
5. Realizar pruebas visuales y funcionales locales completas.
6. Definir el payload estructurado definitivo.
7. Actualizar Apps Script y Google Sheets.
8. Realizar envíos reales de prueba.
9. Solo después de aprobación explícita: preparar commit selectivo.
10. Push únicamente con autorización explícita.

Para el paso 4, preparar la UX/localmente sin habilitar un envío incompatible con el backend; coordinar la activación con los pasos 6–8. No alterar el orden de revisión y aprobación.

**FIN DE SESIÓN: no continuar desarrollo hoy. Solo ACTUALIZACION.md actualizado; sin cambios de producción, staging, commit ni push.**

---

# IMPLEMENTACIÓN DEL VENDEDOR DIGITAL 3–5–8 — 2026-09-15

## Objetivo y alcance

Transformar el catálogo/formulario en un recorrido de necesidad → solución → demostración → solicitud → conversación con Enrique. Esta intervención está autorizada por la solicitud integral de fases 1–5 del 15 de septiembre y sustituye las restricciones de desarrollo de los cierres anteriores para este alcance. No se implementaron campañas, analítica, pagos ni contratación automática.

## Estado inicial y preservación del trabajo

- `git status --short` inicial: modificaciones en ACTUALIZACION.md, public/script.gs, Home.jsx, Precios.jsx, Contacto.jsx y contact.js; carpetas sin seguimiento `src/Components/Contact/` y `src/data/` con el configurador y catálogo anteriores.
- `git diff --check` inicial pasó. Lint inicial pasó.
- La suite anterior tenía 20 pruebas: 13 pasaban y 7 fallaban, porque sus fixtures permitían correo/negocio vacíos pero las validaciones anteriores los exigían. Se comprobó contra una copia del estado inicial, no contra el código nuevo.
- Se preservó una copia del estado inicial en `/tmp/ev358-baseline` para separar cambios de esta intervención de los anteriores. No se hizo reset, checkout de descarte, staging, commit ni push.
- Las listas completas de las siete tarjetas (precios, funcionalidades, PLUS, aclaraciones, públicos y demos) se compararon estructuralmente con el estado inicial: intactas. También se verificó igualdad de package.json, package-lock.json, CONTRATO_REFERENCIA.md y rutas.

## Cambios y decisiones

### Fase 1 — Oferta coherente

- Promoción Web + Android a $4,000 desactivada con `active: false`; su infraestructura permanece. No se reemplazó por otra oferta. Sus textos históricos de Android nativo/24×7 no se muestran en el recorrido activo.
- Retirada la etiqueta «Más Popular». Se mantiene el borde destacado sin afirmar popularidad.
- Metadatos de index.html corregidos: fuera promesas universales de hosting/dominio y entrega en siete días. Posicionamiento como soluciones digitales.
- Android conserva viabilidad/alcance condicional; E-Commerce aclara pasarelas, inventario y envíos como aspectos por revisar. Agenda no promete automatizaciones incluidas.
- Se conservan las 90 capacidades y sus IDs. La descripción de accesibilidad avanzada se delimitó a adaptaciones especializadas y auditorías; la accesibilidad básica forma parte de la experiencia base.

### Fase 2 — Tres caminos de contacto

- General: nombre, teléfono y horario obligatorio (mañana/tarde/sin preferencia/otro); referencia de otro horario requerida y limitada a 120 caracteres. Sin datos comerciales, correo, cupón ni configurador. Confirmación explícita de que la llamada no está acordada todavía.
- Básicos: contexto de solución, precio, resumen, límite y demo. Nombre/teléfono obligatorios; negocio, correo, comentario y adicionales opcionales. «Sí» permite enviar sin seleccionar funciones.
- Premium: puede enviar con «Hablar sobre este proyecto» sin abrir el configurador. «Añadir detalles a mi solicitud» es opcional.
- Los datos personales se conservan al cambiar producto. Cada solución tiene un borrador independiente de extras/comentario; volver recupera ese borrador sin mezclar funciones incompatibles.
- La intención principal puede enviarse antes de explorar adicionales. Se mantienen validación, referencia, bloqueo de doble envío, conservación de datos ante error y reintento con el mismo requestId para los mismos datos.
- Cupón dentro de un disclosure secundario, sin aplicar descuentos automáticamente. Privacidad junto al envío.
- Stepper simplificado con pasos propios para orientación y producto; no es un wizard.

### Fases 3–5 — Presentación y transferencia

- Home: hero → breve necesidad y soluciones → acceso a proyectos mayores → demos → Enrique → cómo avanzamos → cierre.
- Hero: «Recibe pedidos, organiza citas y presenta tu negocio en línea.» Subtexto: «Soluciones digitales para pequeños negocios, con atención directa de Enrique.»
- CTA principal a soluciones; secundario a orientación. Se retiró la máquina de escribir porque duplicaba nombres y retrasaba la lectura de la oferta.
- Orden de básicos: Tarjeta, Agenda, Menú WhatsApp, Telegram. Los enlaces conservan `?solucion=`.
- Cuatro demos con etiqueta explícita, qué explorar y precio/alcance. URLs anteriores intactas; no se presentan como clientes ni se probaron pedidos/reservas reales.
- Precios: problema → solución → precio → beneficio y límite esencial → destacados → demo → contratar → alcance completo desplegable → aclaración. Se mantienen todas las inclusiones aprobadas.
- Precios selecciona categoría desde `?solucion=` o `?categoria=premium` y ubica la tarjeta. Contratar mantiene la solución hasta Contacto.
- FAQ y cierre orientados a dudas sobre alcance, precio «Desde», siguiente paso y orientación.
- Biografía breve con atención directa y CTA real. Se retiró el acceso a Misión/Visión del recorrido principal sin borrar el componente reutilizable.
- Rehash mínimo dentro de los detalles opcionales, después del primer botón de envío: Tarjeta → explorar Agenda; Agenda → varios profesionales; Menú → pagos/entregas/inventario; E-Commerce → inventario/envíos. No se anuncian paquetes integrados ni funciones incluidas.
- WhatsApp de Contacto transmite producto u orientación y como máximo tres nombres de funciones. El botón global utiliza un mensaje comercial general mejorado mediante constants.js, sin agregar arquitectura.
- Navegación simple; etiqueta «Soluciones y precios». Footer con «Soluciones digitales para pequeños negocios. Atención directa con Enrique.» Redes conservadas con menor protagonismo.

## Payload y backend local

> **HISTÓRICO / OBSOLETO — NO USAR COMO CONFIGURACIÓN ACTUAL**
> El chequeo de versión previo al POST, la compatibilidad v1, el esquema anterior y el correo únicamente a Enrique corresponden a esta etapa histórica. El flujo definitivo está descrito al comienzo del documento.

- Frontend usa `consulta-v2`; antes de POST comprueba que el backend anuncie v2. Un backend antiguo no recibe el nuevo payload ni provoca falso éxito.
- Campos: protocol, requestId, nombre, telefono, correo, negocio, solucion, tipoSolicitud (producto/orientacion), necesitaAdicionales (vacío/si/no), funcionesIds, funcionesSeleccionadas, comentario, horarioPreferido, horarioOtro, cupon y necesidad.
- Arrays serializados explícitamente como JSON. Hasta 90 funciones; límites por ID/nombre y rechazo de IDs duplicados/arrays inválidos. El resumen necesidad es acotado; las funciones completas se guardan aparte, sin truncamiento silencioso ni obligar a quitar selecciones para caber en 2000 caracteres.
- Apps Script valida los caminos, longitudes y coherencia producto/orientación. Los nombres de funciones son información de interés enviada por el visitante, no una confirmación de alcance, precio o viabilidad.
- Apps Script conserva POST v1, orden de huella v1 y alias histórico pizzeria. doGet anuncia v2 y protocolos soportados. Los formularios antiguos que exigen exclusivamente health v1 necesitarán actualizar el frontend; no se garantiza compatibilidad de ese chequeo antiguo con doGet v2.
- Protección de celdas frente a fórmulas, lock, fingerprint, referencias y deduplicación conservados.
- Sheet: primeras once columnas intactas. Se añaden al final, si faltan: TipoSolicitud, NecesitaAdicionales, FuncionesIds, Funciones, Comentario, HorarioPreferido y HorarioOtro. Migración idempotente bajo lock, ampliación de columnas si hace falta y rechazo de encabezados desconocidos/duplicados sin sobrescribir registros.
- Email solo a Enrique: tipo, producto, nombre, teléfono, campos opcionales presentes, horario, funciones con IDs, comentario, cupón para revisión y referencia. No se envía correo automático al prospecto.
- Registro guardado y notificación son estados distintos. Si el registro existe pero falla/no se confirma el aviso, se ofrece WhatsApp sin declarar perdido el registro.

## Archivos de esta intervención

- Autorizados: src/Pages/Home.jsx, src/Pages/Precios.jsx, src/Pages/Contacto.jsx, src/Components/Biografia.jsx, src/Components/Footer.jsx, src/Components/Contact/ProjectConfigurator.jsx, src/data/projectFeatures.js, src/utils/contact.js, src/utils/constants.js, public/script.gs, ACTUALIZACION.md.
- Excepciones mínimas necesarias: src/utils/promotions.js para desactivar la oferta contradictoria; index.html para corregir promesas del punto de entrada/compartición; tests/contact.test.mjs para validar el contrato nuevo y su compatibilidad.
- Ningún archivo nuevo de proyecto. Configurador/catálogo ya estaban sin seguimiento al inicio. Herramientas temporales y capturas de verificación en /tmp.
- Header, Layout, rutas, convenio y dependencias no modificados. No se instalaron herramientas ni paquetes.

## Verificaciones

> **HISTÓRICO / OBSOLETO — NO USAR COMO CONFIGURACIÓN ACTUAL**
> Estos resultados pertenecen a la implementación de esta sesión, incluidas las pruebas de versión y huellas v1. Se conservan como evidencia histórica, no como descripción de las pruebas o configuración vigentes.

- 30 pruebas de frontend/Apps Script simulado aprobadas con `node tests/contact.test.mjs`: datos mínimos de ocho productos, horarios/otro, comentarios libres, extras opcionales, 90 funciones, serialización, validación, versión incompatible, doble registro, conflicto de referencia, timeout, red, almacenamiento, notificación, migración, preservación de filas, esquema desconocido y huellas v1.
- Chrome local sobre el build de producción: 45 comprobaciones aprobadas (Home, ambas categorías de Precios, Contacto General/Básico/Premium y configurador abierto, con búsqueda y detalles expandidos, a 320/375/390/768/1440 px). Sin overflow horizontal ni errores de ejecución. También se verificaron menú móvil y resumen de selección. Capturas Home/configurador revisadas a 320 y 1440 px.
- Recorridos de navegador aprobados: enlaces con producto preseleccionado, categoría Premium, orientación con otro horario, validación, Básico con Sí sin catálogo, Premium sin configurador, doble submit, error con preservación de datos y reintento con mismo requestId, cambio de solución conservando identidad y borradores separados. Todo con respuestas simuladas.
- Comprobaciones complementarias aprobadas: enlaces Home → Precios → Contacto de los cuatro básicos; FAQ de precio Desde; seleccionar y quitar funciones; Tab dentro del diálogo; Escape para cerrar y devolución del foco al botón que lo abrió. Capturas adicionales de General, Básico, Premium y Precios a 320 y 1440 px; revisadas visualmente. No fue necesario cambiar de nuevo el código al retomar el cierre.
- Límites de la prueba visual: Chrome headless con anchos emulados y recursos externos bloqueados (incluida fuente remota). No sustituye revisión de Enrique en teléfonos reales, carga de fuentes externas ni pruebas con lector de pantalla. Las demos externas no se operaron.
- Evidencia temporal: /tmp/ev358-browser-results.json (45 controles de tamaño/estado), /tmp/ev358-flows-results.json (complementarias) y capturas /tmp/ev358-*.png. Los fallos intermedios de espera/navegación correspondieron al script temporal de pruebas; se corrigieron allí, sin reabrir decisiones de producto.
- No se enviaron solicitudes reales. El navegador de pruebas bloquea red externa y simula respuestas de Apps Script. Se intentó abrir las cuatro demos mediante la herramienta web; esta rechazó los destinos, lo que no demuestra que estén rotos. Su funcionamiento externo sigue sin verificar.
- Primer build: 727.26 kB JS y 64.15 kB CSS; advertencia conocida de chunk >500 kB. Inferior al último tamaño documentado de 804.26 kB; no se atribuye toda la diferencia únicamente a una optimización de esta tarea.
- Lint final aprobado: 0 errores y 0 advertencias. Build final aprobado: 727.39 kB JS (228.36 kB gzip), 64.15 kB CSS; persiste únicamente la advertencia conocida de chunk >500 kB. El build es posterior a la última edición de frontend. `git diff --check` aprobado. Suite de 30 pruebas repetida tras conservar el flush del estado de notificación en Apps Script: todas aprobadas.

## ACTUALIZACIÓN MANUAL DE APPS SCRIPT NECESARIA

> **HISTÓRICO / OBSOLETO — NO USAR COMO CONFIGURACIÓN ACTUAL**
> No seguir este procedimiento como guía actual: se refiere al endpoint anterior, la pestaña `ConsultasWeb`, el esquema antiguo y la ausencia de confirmación al cliente. Conservarlo únicamente como historial; consultar el estado vigente al comienzo del documento.

El archivo `public/script.gs` solo está actualizado localmente. Google Apps Script, Sheets remoto, correo real y producción NO se modificaron.

Para Enrique, después de revisar y autorizar:

1. Abrir el proyecto Apps Script que corresponde al endpoint existente de `src/utils/contact.js`; no crear otro proyecto por accidente. Conservar una copia del código remoto y de la pestaña ConsultasWeb antes de migrar.
2. Reemplazar el código de contacto remoto por el contenido completo de `public/script.gs`. Evitar doGet/doPost duplicados; conservar funciones ajenas si el proyecto las contiene.
3. Revisar CONTACT_SHEET_ID, CONTACT_SHEET_NAME (`ConsultasWeb`) y el destinatario del correo. Guardar.
4. Comprobar que los once encabezados existentes coincidan exactamente con CONTACT_BASE_HEADERS y no existan encabezados vacíos/duplicados en el rango usado. No mover ni borrar filas. Las siete columnas nuevas se añadirán en el primer POST válido, no al guardar código ni al abrir doGet.
5. En Apps Script: Implementar/Deploy → Administrar implementaciones/Manage deployments → seleccionar la aplicación web existente → Editar (lápiz) → Versión nueva/New version → Implementar/Deploy. Actualizar la implementación existente mantiene el endpoint; no utilizar una URL /dev para el sitio público.
6. Configurar la aplicación web para ejecutar como el propietario (Enrique / «Yo») y acceso «Cualquier usuario / Anyone» para el formulario público sin inicio de sesión. El propietario debe tener acceso a Sheets y autorizar el envío de Mail cuando Google lo solicite. Si la política de la cuenta no permite ese acceso público, resolverlo antes de activar el formulario. No compartir acceso de edición a la hoja con los visitantes.
7. Abrir el endpoint /exec y comprobar JSON con `protocol: "consulta-v2"`, `service: "contacto"` y protocolos soportados. Esto no envía datos ni migra Sheets.
8. Después de autorización explícita de prueba real: enviar una orientación, un básico sin extras y un Premium con comentario/funciones. Revisar cada referencia en ConsultasWeb, nuevas columnas, filas anteriores y recepción del correo por Enrique. No basta ver la pantalla de éxito.
9. Probar reintento controlado con la misma referencia si se requiere comprobar deduplicación; no usar dos envíos nuevos como sustituto de esa prueba. Confirmar que no se envía correo al prospecto ni se confirma una cita automáticamente.
10. Solo después de revisión visual, prueba real y aprobación de Enrique considerar commit/push/despliegue del frontend. No se realizaron en esta intervención.

Referencias oficiales para el procedimiento: https://developers.google.com/apps-script/concepts/deployments y https://developers.google.com/apps-script/guides/web .

## Pendientes y estado

Pendientes: aprobación visual de Enrique en dispositivos reales, despliegue manual de Apps Script, permisos/acceso remoto, prueba real de Sheets y correo, revisión funcional de demos externas (sin pedidos/reservas reales no autorizados).

**RECORRIDO COMERCIAL 3–5–8 IMPLEMENTADO LOCALMENTE — PENDIENTE DE REVISIÓN VISUAL, PRUEBA REAL DEL BACKEND, DESPLIEGUE DE APPS SCRIPT Y APROBACIÓN PARA COMMIT.**

**Sin commit. Sin push. Sin deploy de Apps Script, Vercel ni producción.**


## Cierre final de la intervención

- Revisión final del diff realizada contra Git y contra la copia inicial: 14 archivos de esta intervención, sin archivos accidentales ni dependencias nuevas. Se preservaron íntegramente los contenidos previos de ACTUALIZACION.md; solo se añadió esta sección.
- El resumen comercial compartido mantiene los importes aprobados; las siete tarjetas se compararon estructuralmente contra el inicio, incluyendo características, límites, PLUS y destinos de demos.
- Estado Git final (fuera de staging):

```text
 M ACTUALIZACION.md
 M index.html
 M public/script.gs
 M src/Components/Biografia.jsx
 M src/Components/Footer.jsx
 M src/Pages/Contacto.jsx
 M src/Pages/Home.jsx
 M src/Pages/Precios.jsx
 M src/utils/constants.js
 M src/utils/contact.js
 M src/utils/promotions.js
 M tests/contact.test.mjs
?? src/Components/Contact/ProjectConfigurator.jsx
?? src/data/projectFeatures.js
```

Los dos archivos sin seguimiento ya existían al comenzar. HEAD permanece en `d4174e5`. No se hizo staging, commit, push, envío real ni despliegue. El frontend y backend local están preparados para revisión; Apps Script remoto y pruebas reales siguen pendientes. Detenerse y esperar revisión de Enrique.
