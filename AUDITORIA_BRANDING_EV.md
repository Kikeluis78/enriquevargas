# Auditoría visual y técnica del branding EV

Fecha: 11 de septiembre de 2026. Referencia Git: `db690be` y archivos de trabajo actuales.

## 1. Alcance, método y estado actual

Auditoría sin correcciones de código, SVG, textos, colores ni layout. Este documento es el único archivo nuevo del proyecto producido por esta revisión. Las capturas y scripts de medición se guardaron en `/tmp`; no forman parte de la implementación. No se hizo commit ni push.

Se revisaron ambos SVG, `Logo.jsx`, `Footer.jsx`, `Header.jsx`, `Layout.jsx`, `Spinner.jsx`, `src/index.css`, `index.html` y el historial de Git. Se capturó el sitio local con Chrome headless y se midieron cajas DOM en ocho anchos. Las medidas son de esta instalación de Chrome/Linux; no equivalen a una prueba física en Safari/iOS o Android. Las conclusiones estéticas se distinguen de las medidas geométricas.

**Hallazgo decisivo:** el sitio actual NO usa `enrique-vargas-soluciones-digitales.svg`. No se encontraron referencias a ese archivo en `src`, `public` o `index.html`. `Logo.jsx` ya implementa la opción B: EV en SVG y nombre/descriptor en HTML. Por tanto, un defecto del SVG completo no explica por sí solo el aspecto actual de Home.

`Layout.jsx` coloca `<Header />`, después una fila independiente con `<Logo />` (`py: 2`, `px: 3`, equivalentes a 16 px verticales y 24 px horizontales), después un divisor y el contenido. El menú móvil está a la derecha en la primera fila, mientras la marca está a la izquierda en la siguiente. No comparten línea base ni contenedor. `Spinner.jsx` también utiliza `Logo`.

## 2. Problemas y causas

| Problema | Evidencia / causa | Origen | Prioridad |
|---|---|---|---|
| Personalidad tipográfica no garantizada | Se declara Stack Sans Notch, pero Chrome no la registra en `document.fonts` ni solicita su recurso. Solo aparecen reglas de Montserrat, no utilizadas por el logo. | Carga CSS de fuentes | Alta |
| Nombre dominante en móvil | Nombre de 30 px/700 + EV de 48 px + gap de 12 px; nombre de unos 229 px con la fuente de respaldo observada. A 320 px salta a dos líneas. | HTML/CSS y presupuesto de ancho | Alta |
| EV parece separado del nombre | Gap CSS de 12 px más 8 px vacíos a la derecha del isotipo: separación geométrica hasta el texto de 20 px en móvil. El nombre domina por superficie, y el descriptor está centrado solo bajo el texto. | Padding del SVG + composición HTML | Alta |
| Sensación de desalineación general | Menú y logo en filas distintas; logo fuera del contenedor de ancho máximo del contenido. En escritorio empieza en x=24 aunque el contenido principal está más adentro. | Layout | Media |
| SVG completo desbalanceado | Contenido agrupado a la izquierda/arriba, gran margen derecho, nombre en system-ui, posiciones de palabras fijadas manualmente. | SVG completo, actualmente sin uso | Alta si se decide utilizarlo |
| Footer desconectado ópticamente | EV centrado en móvil, párrafo a la izquierda; no aparece el nombre junto al EV en ese bloque. | Layout del footer | Media |

La ausencia de overflow horizontal no demuestra buen ajuste: el navegador puede resolver el ancho disponible haciendo que el nombre se parta, con un cambio notable de altura.

## 3. Análisis de los SVG

### 3.1 `public/brand/ev-logo.svg`

- `viewBox="0 0 48 48"`, atributos `width="48"`, `height="48"`; proporción 1:1.
- Son dos paths geométricos; no hay texto ni dependencia tipográfica.
- E: extremos x=8…20, y=8…40. V: extremos x=20…40, y=8…44.
- Límites conjuntos reales de geometría: x=8…40, y=8…44; caja visible 32 × 36 unidades.
- Padding geométrico: izquierda 8, derecha 8, arriba 8, abajo 4. El dibujo ocupa 66,7% del ancho y 75% del alto del canvas; esto es ocupación de su caja delimitadora, no porcentaje de píxeles pintados.
- Centro de esa caja: (24,26), dos unidades por debajo del centro del viewBox. El centro óptico de las letras puede diferir del centro geométrico.
- V desciende cuatro unidades más que E. Las formas se encuentran en la parte superior en x=20: relación estrecha entre ambas letras, pero distinta altura inferior.
- A tamaño CSS 48 × 48, el EV visible mide 32 × 36 px. A 56 × 56 mide aproximadamente 37,3 × 42 px. El tamaño declarado de la imagen sobreestima el tamaño aparente de la marca.
- Gradiente diagonal `evGradient`: cyan `#00D9FF` → naranja `#FF6B35`, opacidad 1. Coordenadas 0%,0% → 100%,100%; sin `gradientUnits`, usa el bounding box de cada path. La transición se reinicia en cada letra: no es un barrido único por todo el monograma.
- Sin stroke, filtro, sombra ni fondo incorporado. La zona intermedia del gradiente se percibe grisácea/desaturada sobre oscuro; es visible en las capturas y resta fuerza respecto al cyan sólido del apellido.

**Diagnóstico:** la identidad EV es recuperable. Antes de aumentar sus dimensiones CSS conviene revisar el encuadre y el equilibrio óptico del propio dibujo. Reducir el viewBox sin recalibrar tamaños haría crecer el símbolo visible; ambos cambios deberán evaluarse juntos.

### 3.2 `public/brand/enrique-vargas-soluciones-digitales.svg`

- `viewBox="0 0 320 80"`, `width="320"`, `height="80"`; proporción 4:1.
- Isotipo dentro de `translate(0,8)`: límites finales x=4…36, y=12…48, tamaño 32 × 36. Misma geometría básica que el isotipo independiente, trasladada; no está centrada verticalmente respecto al canvas.
- Nombre: dos elementos `<text>`, ambos `font-size=22`, peso 700, baseline y=32. «Enrique» comienza en x=48; «Vargas» en x=143.
- Fuente: `system-ui, -apple-system, sans-serif`. **No es Stack Sans Notch.** No hay fuente embebida ni letras convertidas a contornos.
- Descriptor: x=48, baseline y=54, tamaño 14, peso 400. El descriptor mide 63,6% del tamaño nominal del nombre; en HTML actual es aproximadamente 40%. El SVG lo hace relativamente más prominente.
- Colores: nombre blanco `#FFFFFF` y cyan `#00D9FF`; descriptor gris `#9CA3AF`. El HTML usa descriptor amarillo `#FFE45E`. No son variantes equivalentes.
- Gradiente `brandGradient` igual al del EV independiente y con el mismo reinicio por path.
- Separación geométrica EV → origen de texto: 12 unidades. Baselines de nombre y descriptor separadas 22 unidades. Descriptor alineado a la izquierda, a diferencia del HTML centrado.

Medición de texto mediante `getBBox()` en Chrome/Linux, insertando temporalmente el SVG en el DOM de auditoría, sin guardar cambios:

| Elemento | x | y | Ancho | Alto |
|---|---:|---:|---:|---:|
| Enrique | 48 | 12 | 96,47 | 25 |
| Vargas | 143 | 12 | 86,11 | 25 |
| Soluciones Digitales | 48 | 41 | 143,92 | 16 |

Estas son cajas tipográficas del navegador, no una medición del contorno exacto de tinta. Cambian con la fuente del sistema. Los paths sí tienen límites geométricos exactos.

La envolvente conjunta calculada es x=4…229,11, y=12…57: unos 225,11 × 45 dentro de 320 × 80. Márgenes aproximados: izquierda 4, derecha 90,89, arriba 12, abajo 23. Centro de envolvente (116,55;34,5), frente a centro de canvas (160;40): desplazamiento geométrico de 43,45 unidades a la izquierda y 5,5 arriba. El vacío derecho ocupa aproximadamente 28,4% del ancho total.

Además, la caja de «Enrique» termina alrededor de x=144,47 y «Vargas» empieza en 143: hay solapamiento de cajas tipográficas. Esto no prueba colisión de tinta, pero sí evidencia que la separación manual es frágil. Otro sistema operativo puede producir espacios diferentes o colisiones.

Si se mostrara a 240 px de ancho, el nombre se reduciría a 16,5 px, el descriptor a 10,5 px y el EV visible a 24 × 27 px. Por tanto, **el SVG completo no tiene simplemente “texto demasiado grande”**: tiene una relación de elementos y un canvas ineficientes; el nombre grande observado hoy procede del HTML de 30/36 px.

## 4. Comparación con el logo anterior

`git show HEAD:src/Components/Logo.jsx` y el commit `4b29944` muestran:

- «Enrique Vargas» en HTML con `'Stack Sans Notch', sans-serif`.
- `text-3xl md:text-4xl`: 30 px antes de 768 px, 36 px desde 768 px.
- `font-bold`: peso 700. `tracking-wide`: 0,025 em, aproximadamente 0,75/0,9 px.
- «Enrique» blanco, «Vargas» cyan.
- Sin EV acompañante ni descriptor. En HEAD era un enlace accesible; en la versión histórica más antigua revisada era un div.
- Sin `leading-none`: altura de línea nominal de Tailwind 36/40 px, frente a 30/36 px del nombre actual.

**Qué se conserva hoy:** fuente declarada, tamaño, peso, tracking y separación de colores del nombre. No se perdió la fuente en `Logo.jsx` por haber movido el texto al SVG: ese movimiento no está en la implementación actual revisada.

**Qué cambió:** se añadieron 60 px nominales de ancho en móvil (48 de imagen + 12 de gap), 68 px en escritorio (56+12), y descriptor con margen superior de 4 px. El nombre conserva un tamaño pensado para funcionar solo. Antes era más fácil encajarlo en móvil; ahora se necesita dimensionar el conjunto, no cada pieza aisladamente.

**Qué perdería el SVG completo actual:** Stack Sans Notch, ajuste responsivo independiente del nombre/descriptor, flujo natural entre palabras y control desde CSS del documento cuando se usa como `<img>`. Mantener `<text>` dentro del SVG tampoco fija la tipografía entre sistemas. Para una versión gráfica portable habría que usar la fuente correcta y eventualmente contornos, conservando una fuente editable maestra.

No existe en esta auditoría una captura histórica que demuestre que Stack Sans Notch se cargaba correctamente antes. La comparación histórica prueba intención tipográfica y clases, no el aspecto exacto de un navegador del pasado.

### Carga de fuentes

`src/index.css` contiene primero `@import "tailwindcss"` y después el import remoto de Bebas Neue/Stack Sans Notch. La expansión de Tailwind puede dejar el import remoto detrás de reglas ordinarias. El build previo ya informó que `@import` debe preceder a las reglas salvo excepciones permitidas. En la sesión de Chrome solo se observaron reglas y una solicitud CSS de Montserrat, procedente de `index.html`; no de Stack Sans Notch.

Conclusión: la fuente original no estuvo disponible como webfont durante las mediciones. `getComputedStyle().fontFamily` muestra la familia solicitada, no garantiza que se use. No se identificó inequívocamente el nombre de la fuente de respaldo del sistema; no se debe presentarla como Stack Sans Notch. Una futura corrección de carga puede cambiar los anchos y requerirá repetir las medidas.

## 5. Auditoría responsive

Primera serie: Chrome con viewport de altura 900 px, DPR 1 y barra de desplazamiento clásica de 15 px. La anchura útil del documento fue viewport menos 15 px. Se midió `getBoundingClientRect`, no se estimaron cajas a partir de capturas. Los teléfonos con barras superpuestas pueden disponer de esos 15 px adicionales. No se infiere validación física de móvil de esta simulación. Se intentó una segunda serie con emulación móvil específica, pero no terminó correctamente; sus resultados no se usan. La consulta adicional para identificar la fuente de respaldo mediante CDP tampoco devolvió un nodo válido. Estas limitaciones no invalidan las medidas de la primera serie, pero impiden afirmar una comprobación completa en dispositivos móviles.

| Viewport | Logo completo ancho × alto | Caja EV / dibujo visible | Nombre: tamaño / caja | Descriptor | Evaluación |
|---:|---|---|---|---|---|
| 320 | 257 × 80 | 48² / 32×36 | 30 px / 197×60 | 12 px, línea 16 | Nombre en dos líneas; descriptor centrado bajo una caja amplia; equilibrio deficiente |
| 360 | 288,94 × 50 | 48² / 32×36 | 30 px / 228,94×30 | 12 px, línea 16 | Una línea, margen disponible reducido; nombre dominante |
| 375 | 288,94 × 50 | 48² / 32×36 | 30 px / 228,94×30 | 12 px, línea 16 | Legible, pero EV fino y distante frente al nombre |
| 390 | 288,94 × 50 | 48² / 32×36 | 30 px / 228,94×30 | 12 px, línea 16 | Mayor holgura; persiste descriptor centrado y fila separada |
| 430 | 288,94 × 50 | 48² / 32×36 | 30 px / 228,94×30 | 12 px, línea 16 | Sin presión de ancho; relación visual sin ajustar |
| 768 | 342,73 × 60 | 56² / 37,33×42 | 36 px / 274,73×36 | 14 px, línea 20 | Salto simultáneo de tamaños y navegación; marca en fila propia |
| 1024 | 342,73 × 60 | 56² / 37,33×42 | 36 px / 274,73×36 | 14 px, línea 20 | Sin overflow; amplia superficie vacía a la derecha |
| 1440 | 342,73 × 60 | 56² / 37,33×42 | 36 px / 274,73×36 | 14 px, línea 20 | Logo en x=24, separado de la alineación del contenido central |

En todos estos anchos el enlace comienza en x=24. El nombre comienza en x=84 en móvil y x=92 desde 768. El gap de cajas es 12 px; la distancia desde el extremo visible derecho del EV hasta el inicio de la caja del texto es 20 px o 21,33 px respectivamente.

No se observó overflow horizontal del documento en esta serie. A 320 px la adaptación ocurre por salto del nombre, no por reducción tipográfica. El isotipo se centra respecto al grupo nombre+descriptor: al crecer ese grupo a 80 px, EV queda a la altura intermedia del nombre partido y el descriptor, acentuando la sensación de desalineación. `text-center` centra el descriptor dentro de la anchura del nombre, no bajo el conjunto EV+nombre.

La proporción nominal descriptor/nombre es 12/30=40% y 14/36≈38,9%. Su amarillo brillante aumenta su atención percibida pese al tamaño secundario. El EV visible solo tiene unos 32 px de ancho frente a unos 229 del nombre en móvil: no es ilegible, pero su peso visual es pequeño y su espacio transparente acentúa la desconexión.

## 6. Footer

Estado actual: imagen EV directamente sobre el fondo oscuro del footer; no tiene recuadro, sombra ni gradiente externo propio. El wrapper solo alinea. El gradiente de fondo general `#0d1117` → `#111827` es discreto y no equivale al recuadro anterior.

- Antes de 640 px: imagen 64 × 64, dibujo real 42,67 × 48 px. Wrapper centrado; texto descriptivo alineado a la izquierda.
- Desde 640 px: imagen 80 × 80, dibujo real 53,33 × 60 px; alineación al inicio.
- En escritorio, el margen visible del EV respecto al comienzo del párrafo incluye 13,33 px de padding interno. En móvil el centro geométrico horizontal sí coincide con el wrapper, pero el bloque siguiente no comparte eje de alineación.
- La versión HEAD anterior usaba un recuadro 64 × 64 con gradiente cyan → azul `#0066FF`, sombra y letras EV blancas en HTML. Esa versión tenía más superficie visual; no mostraba simultáneamente el EV con gradiente interno.
- Por tanto, **no existe actualmente competencia entre un gradiente externo de recuadro y el interno del SVG**. Añadir el recuadro antiguo al SVG actual podría crearla; es una hipótesis para evitar, no un fallo observado.

Recomendación: EV directo sobre oscuro, sin contenedor decorativo adicional. El wrapper de alineación sí es útil. Tamaño inicial sugerido: caja de 56–64 px en móvil y 64–72 px en escritorio si se conserva el viewBox actual. Mantener un dibujo visible aproximado de 37–48 px de ancho y 42–54 px de alto; recalibrar si se recorta el viewBox. Decidir un eje coherente para símbolo y texto: ambos al inicio, o ambos centrados en móvil. El nombre aparece en el copyright, pero su distancia no sustituye una asociación cercana EV↔nombre.

## 7. Opciones A / B / C

| Opción | Ventajas | Desventajas | Adecuación |
|---|---|---|---|
| A. Un único SVG con EV, nombre y descriptor | Un activo, proporción fija, composición controlable | Todo se escala junto; descriptor puede volverse diminuto; con texto dependiente del sistema la apariencia sigue variando; difícil adaptar jerarquía móvil sin variantes | No usar el SVG completo actual tal como está |
| B. EV en SVG + nombre y descriptor HTML | Conserva Stack Sans Notch; tamaño, espacio, alineación y descriptor ajustables por breakpoint; texto accesible y seleccionable; coincide con la implementación actual | Exige carga fiable de fuente y revisar métricas con fallback; varias piezas necesitan reglas de alineación coherentes | **Recomendada para el sitio** |
| C. Nuevo SVG que preserve la tipografía y jerarquía | Máxima consistencia gráfica; útil para documentos, redes y exportación; con contornos no depende de fuentes del dispositivo | Trabajo de diseño; texto no editable si se convierte a paths; requiere etiqueta accesible y variantes compactas; corregir SVG no corrige la fila de Layout | Complemento posterior como activo maestro/exportable |

A y C comparten la arquitectura de activo único; C aporta un rediseño tipográfico y geométrico correcto, no una solución responsive automática. No es necesario abandonar B para disponer posteriormente de C.

## 8. Recomendación final

**Mantener B y ajustar la implementación, preservando la identidad EV y la fuente original del nombre.** El orden de trabajo posterior debería ser:

1. Garantizar carga real de Stack Sans Notch y confirmar su renderizado; medir de nuevo con fuente cargada y con fallback.
2. Ajustar el presupuesto horizontal del conjunto para 320 px antes de elegir tamaño del nombre. Mantener nombre primero en jerarquía, EV reconocible y cercano, descriptor secundario.
3. Revisar márgenes internos del EV, separación óptica, alineación del descriptor y relación con la navegación. No confundir centrado del elemento img con centrado de la geometría.
4. Unificar footer y cabecera con el mismo EV; evitar añadir un segundo gradiente decorativo.
5. Preparar posteriormente C como versión gráfica exportable, con tipografía original, espaciado y viewBox ajustados. La decisión requiere revisión visual, no se implementa en esta fase.

## 9. Medidas responsive sugeridas (no implementadas)

Puntos de partida para prototipo con Stack Sans Notch realmente cargada, no valores certificados. Mantener el apellido junto al nombre si encaja, sin imponer `nowrap` hasta comprobar el presupuesto de ancho y zoom.

| Viewport | Nombre | Descriptor | Caja EV con viewBox actual | Gap CSS | Padding horizontal de la fila |
|---|---:|---:|---:|---:|---:|
| 320 | 23–24 px | 11–12 px | 40–44 px | 6–8 px | 16 px |
| 360 | 24 px | 12 px | 44 px | 8 px | 16 px |
| 375 | 24–25 px | 12 px | 44 px | 8 px | 16 px |
| 390 | 25–26 px | 12 px | 44–48 px | 8 px | 16–20 px |
| 430 | 26 px | 12 px | 48 px | 8 px | 20 px |
| 768 | 28–30 px | 12–13 px | 48 px | 8–10 px | Alinear al contenedor elegido |
| 1024 | 30–32 px | 13 px | 48–52 px | 8–10 px | Alinear al contenedor elegido |
| 1440 | 32 px | 13–14 px | 52 px | 10 px | Alinear al contenedor elegido |

Nombre: peso 700, tracking inicial 0–0,01 em y line-height 1,05–1,15. Descriptor: line-height 1,2–1,35, separación vertical 3–4 px, preferentemente alineado al inicio del nombre para reforzar asociación; evaluar un tono más secundario manteniendo contraste. No cambiar colores sin aprobación.

Objetivos de aceptación posteriores: nombre sin corte inesperado a 320 px, imagen sin encogimiento accidental, ausencia de overflow a todos los anchos, descriptor legible, gap óptico consistente, prueba con fuente cargada/fallback y zoom al 200%, y revisión física al menos en Android e iOS. Si se decide compartir fila con el botón Menú, estos tamaños deben recalcularse: hoy se han analizado filas separadas.

## 10. Archivos que podrían modificarse en una fase posterior

| Archivo | Motivo posible |
|---|---|
| `src/Components/Logo.jsx` | Dimensiones, separación, alineación y comportamiento de nombre/descriptor |
| `public/brand/ev-logo.svg` | Encuadre y equilibrio óptico, solo si se aprueba |
| `public/brand/enrique-vargas-soluciones-digitales.svg` | Variante exportable con tipografía correcta y canvas sin vacío innecesario |
| `src/index.css` y/o `index.html` | Resolver carga efectiva de Stack Sans Notch por una única vía fiable |
| `src/Layout/Layout.jsx` | Relación de la fila del logo con navegación y contenedor de contenido |
| `src/Components/Header.jsx` | Solo si se autoriza integrar navegación y marca en una composición común |
| `src/Components/Footer.jsx` | Alinear EV con el bloque de marca, revisar tamaño y relación con el nombre |
| `src/Components/Spinner.jsx` | Revisar el consumidor secundario de Logo; cambiar solo si el nuevo tamaño lo requiere |

No es necesario modificar Home, Precios, Contacto, Apps Script ni promociones para resolver estos hallazgos. No se ejecutaron lint/build durante esta fase documental, porque no se alteró la implementación; se usó el servidor para inspección visual.
