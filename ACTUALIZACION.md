# Plan de actualización y control del proyecto

Fecha del diagnóstico: 11 de septiembre de 2026.

## Objetivo

Preparar el sitio de Enrique Vargas para recibir posibles clientes desde publicidad, priorizando confianza, claridad comercial, contacto fiable y una buena experiencia móvil.

Este documento organiza el diagnóstico del código real y complementa `MODIFICACIONES.md`. No significa que las tareas estén implementadas ni autoriza por sí mismo su ejecución. Hasta su creación solo se realizó el diagnóstico y esta documentación. No se han implementado fases ni realizado commits o push.

## Reglas de seguimiento

- Estados permitidos: pendiente, en curso, bloqueada y verificada.
- Una casilla se marca únicamente cuando el cambio está implementado y comprobado.
- Registrar archivos modificados, comprobaciones, resultados y pendientes al terminar cada fase.
- Separar lo comprobado en código de lo comprobado en navegador o en servicios externos.
- No presentar como comprobada la recepción de un formulario por el hecho de que la petición termine.
- No cambiar precios sin definir primero el alcance y realizar el estudio comercial correspondiente.
- No inventar testimonios, clientes, resultados ni disponibilidad de promociones.
- No hacer commit ni push sin autorización explícita.

## Estado inicial comprobado

### Estructura y funcionalidades

- Aplicación React con Vite y React Router.
- Estilos mediante Tailwind, Material UI y estilos locales; animaciones con Framer Motion y AOS.
- Inicio: presentación, precio desde $699, testimonios, oferta para restaurantes, biografía y misión/visión.
- `/precios`: seis planes Express/Premium, servicio Android, FAQ y promoción flotante.
- `/precios2`: redirección a `/precios`; el archivo antiguo permanece sin uso como página.
- `/clientes`: cinco proyectos con capturas locales y enlaces específicos.
- `/contacto`: cinco campos obligatorios, cupón opcional, envío externo y descarga posterior de contrato PDF.
- Rutas adicionales: privacidad, términos, cookies, próximamente y 404.
- Elementos globales: navegación lateral/móvil, logo, WhatsApp, footer y pantalla inicial de carga artificial.
- Integraciones: Google Apps Script, Google Fonts, imágenes Pexels y script de AdSense.
- `public/script.gs` contiene escritura en Sheets y envío de correos; no se verificó que coincida con la versión desplegada.
- No se encontró cobro, firma electrónica ni gestión interna de prospectos implementados en este sitio.
- Stripe, PayPal, CRM y Google Analytics aparecen como prestaciones ofrecidas; eso no demuestra su integración en este sitio.

### Trabajo existente que debe aprovecharse

- Redirección de `/precios2` ya resuelta.
- Capturas locales y destinos concretos en el portafolio.
- FAQ y listas de prestaciones existentes.
- Biografía con fotografía, identidad y atención directa.
- Validación de campos, correo y teléfono en contacto.
- Páginas informativas de privacidad, términos y cookies.
- Metadatos básicos y carga diferida de algunas imágenes.
- Modal de promoción abierto por acción del usuario, no automáticamente.
- `ModalRemodelacion` y `ModalConstruccion` no se renderizan en el recorrido actual.

### Comprobaciones del diagnóstico

| Comprobación | Resultado |
| --- | --- |
| Lectura de estructura, archivos de `src` y documentación | Completada |
| Lectura completa de `MODIFICACIONES.md` | Completada |
| `npm run lint` | Falla con cinco errores |
| Compilación en memoria sin escribir salida | Correcta; advertencia de `@import` CSS |
| Tamaño actual del bundle | No cuantificado en esta comprobación; el dato histórico de 1.2 MB requiere medición |
| Revisión visual en navegador y móvil | Pendiente |
| Recepción real del formulario y correos | Pendiente; no se enviaron datos |
| Funcionamiento de destinos de demos y WhatsApp | Pendiente de comprobación real |

## Resumen de fases

| Fase | Prioridad | Estado | Relación con MODIFICACIONES.md |
| --- | --- | --- | --- |
| 1. Contacto fiable y coherencia comercial urgente | Antes de publicidad | Pendiente | Fase 1 y parte crítica de fase 4 |
| 2. Evidencia de trabajo y demos | Antes de publicidad | Pendiente | Fase 3 y parte de fase 2 |
| 3. Mensaje, proceso y catálogo | Antes de publicidad | Pendiente | Fase 2 y resto de fase 4 |
| 4. Experiencia móvil y accesibilidad esencial | Antes de publicidad | Pendiente | Parte esencial de fase 5 |
| 5. Medición y validación del recorrido comercial | Antes de publicidad | Pendiente | Ampliación del plan original |
| 6. Rendimiento, mantenimiento y pulido | Según impacto; lo bloqueante se adelanta | Pendiente | Fase 6 y resto de fase 5 |

Los errores técnicos que afecten una fase se resuelven durante esa fase. La fase 6 no es un motivo para posponer fallos que impidan captar clientes.

## Fase 1 — Contacto fiable y coherencia comercial urgente

Estado: pendiente.

### Problemas confirmados

- El formulario usa `no-cors`, oculta errores con `.catch()` y muestra éxito en `.finally()`.
- También borra los campos y consume el cupón aunque falle la petición.
- Cambiar solamente `.finally()` por `.then()` no permite verificar la respuesta opaca de `no-cors`.
- El número de WhatsApp de las constantes carece del prefijo de país publicado en privacidad.
- El contacto comienza como contratación y propone un contrato antes de conocer el proyecto.
- Los contadores de cupones son locales a cada navegador y no representan existencias compartidas.
- El cupón «Primer mes GRATIS» no aclara qué mensualidad o servicio cubre.

### Tareas

- [ ] F1-01. Definir una integración que permita confirmar el registro del prospecto.
- [ ] F1-02. Revisar el script realmente desplegado y distinguir registro guardado de correo enviado.
- [ ] F1-03. Mostrar éxito únicamente con confirmación válida; mostrar error claro y conservar campos ante fallo.
- [ ] F1-04. Controlar envíos repetidos, espera excesiva y recuperación; ofrecer WhatsApp como alternativa.
- [ ] F1-05. Unificar el número de WhatsApp y comprobar el destino en móvil y escritorio.
- [ ] F1-06. Retirar contrato e instrucciones de firma/anticipo del primer contacto, conservando el acuerdo para una etapa posterior.
- [ ] F1-07. Reformular el contacto como consulta o cotización y unificar sus CTA.
- [ ] F1-08. Definir si los cupones se retiran temporalmente o se validan con disponibilidad real en servidor.
- [ ] F1-09. Definir vigencia, productos aplicables y significado de cada descuento; no consumirlo ante fallo.
- [ ] F1-10. Resolver las contradicciones inmediatas de ofertas de la tabla siguiente, sin cambiar importes de forma arbitraria.
- [ ] F1-11. Revisar validación de servidor y controles contra abuso del formulario y del envío de correo.

### Contradicciones a resolver

| Elemento | Situación actual | Decisión necesaria |
| --- | --- | --- |
| Tarjeta Digital $699 | Una y hasta dos revisiones en la misma tarjeta | Cantidad única |
| Pedidos WhatsApp $2,999 / Básico Plus $3,999 | Prestaciones similares | Diferencias o condiciones de promoción explícitas |
| Web + Android $4,000 / Web + App $13,999 | Alcance insuficientemente diferenciado | Comparación de funciones y entregables |
| Entrega | 3–5 días hábiles, menos de una semana y siete días | Plazo por producto y condiciones de inicio |
| Soporte | Incluido, un año, 24/7 y actualizaciones gratis | Duración, horarios y límites |
| Publicación y liquidación | Orden distinto entre contacto y PDF | Proceso único |

Archivos implicados inicialmente: `Contacto.jsx`, `BotonWhatsApp.tsx`, `constants.js`, `couponStorage.js`, `coupons.js`, `Contrato.jsx`, `ImfoContrato.jsx`, `Precios.jsx`, `ComoTrabajamos.jsx`, `promotions.js` y `public/script.gs`. La integración elegida puede requerir otros archivos; definirlos antes de implementar.

### Criterios de cierre

- [ ] Un fallo real o simulado no muestra éxito, no pierde datos y no consume cupón.
- [ ] Un envío confirmado aparece en el destino esperado; los fallos de correo tienen un tratamiento definido.
- [ ] WhatsApp abre el contacto correcto.
- [ ] El primer contacto no exige pensar en firma o pago.
- [ ] Las ofertas públicas no contienen contradicciones inmediatas.
- [ ] Comprobaciones técnicas y del flujo registradas.

## Fase 2 — Evidencia de trabajo y demos

Estado: pendiente.

### Diagnóstico

Ya existen cinco proyectos: menú digital, tarjeta de oficios, CRM de pagos, sistema de citas y Mini App World. Falta distinguir su condición real y presentar las descripciones sin depender de `hover`.

El inicio contiene testimonios y afirmaciones como «+40% ventas», «3x más rápido» y «Cero errores». Su respaldo no se puede verificar desde el repositorio.

### Tareas

- [ ] F2-01. Clasificar cada proyecto como demo, proyecto personal o trabajo para cliente con evidencia.
- [ ] F2-02. Conservar testimonios y resultados únicamente si son verificables; retirar o reformular los demás.
- [ ] F2-03. Etiquetar explícitamente los proyectos demostrativos.
- [ ] F2-04. Mostrar tipo de negocio, problema resuelto, funciones y botón «Ver demo funcionando».
- [ ] F2-05. Mantener información esencial visible en móvil y accesible con teclado.
- [ ] F2-06. Comprobar enlaces, capturas y acceso público, incluido el enlace de World que contiene un parámetro `draft_id`.
- [ ] F2-07. Revisar que las capturas correspondan al proyecto enlazado.
- [ ] F2-08. Replantear los espacios vacíos de testimonios y sustituirlos por evidencia útil si corresponde.
- [ ] F2-09. Colocar demos relevantes cerca de la oferta y el CTA correspondiente.

Archivos iniciales: `Clientes.jsx`, `Home.jsx`, `ComoTrabajamos.jsx` y capturas en `public`.

### Criterios de cierre

- [ ] No hay demos presentadas como clientes reales ni resultados sin respaldo.
- [ ] Cada demo abre, se entiende y permite explorar las funciones anunciadas.
- [ ] Las tarjetas se comprenden sin usar `hover`.

## Fase 3 — Mensaje, proceso y catálogo

Estado: pendiente.

### Diagnóstico

El hero combina beneficios con un título técnico. La biografía ya comunica atención directa. Las FAQ y listas de prestaciones existen, pero son incompletas. `ComoTrabajamos.jsx` explica un producto de pedidos, no el proceso de trabajo de Enrique.

### Tareas

- [ ] F3-01. Orientar el mensaje principal a pequeños negocios y a la solución que recibirán.
- [ ] F3-02. Explicar el modelo de bases desarrolladas y personalización, únicamente en la medida en que refleje la operación real.
- [ ] F3-03. Añadir un proceso comercial breve: elección, información, personalización, revisión y publicación; mantener condiciones de pago coherentes.
- [ ] F3-04. Separar la explicación del sistema de pedidos de la explicación de cómo se presta el servicio.
- [ ] F3-05. Definir «Qué recibes» para cada producto: alcance, contenido, revisiones, entrega y soporte.
- [ ] F3-06. Ampliar las FAQ existentes con materiales, pagos, renovaciones, cambios posteriores, demos y cobertura de atención.
- [ ] F3-07. Condensar la biografía manteniendo foto, identidad, atención directa y comunicación clara.
- [ ] F3-08. Definir una fuente única de datos comerciales para planes y promociones.
- [ ] F3-09. Aclarar dominio, hosting, renovación, propiedad/entrega, mantenimiento, exclusiones y costes adicionales aplicables.
- [ ] F3-10. Diferenciar apps nativas, híbridas y otras soluciones según lo que realmente se entrega; aclarar condiciones de publicación.
- [ ] F3-11. Definir una acción dominante y otra secundaria por sección.
- [ ] F3-12. Realizar el benchmark separado antes de decidir cambios de precios; documentar conclusiones antes de aplicarlos.

Archivos iniciales: `Home.jsx`, `Biografia.jsx`, `ComoTrabajamos.jsx`, `Precios.jsx`, `ModalPromocion.jsx`, `promotions.js`, `constants.js` y componentes informativos relacionados.

### Criterios de cierre

- [ ] El visitante entiende qué se vende, para quién, cuánto cuesta y cómo preguntar.
- [ ] Cada precio tiene alcance y condiciones claros y consistentes.
- [ ] FAQ, promociones, proceso y mensajes utilizan la misma información comercial.
- [ ] No se atribuyen capacidades o automatizaciones que el producto no ofrezca.

## Fase 4 — Experiencia móvil y accesibilidad esencial

Estado: pendiente.

### Problemas observados en código

- El menú móvil reutiliza etiquetas ocultas hasta `hover`.
- Las tarjetas de proyectos esconden información con el mismo mecanismo.
- Hay botones flotantes, títulos grandes, márgenes amplios y múltiples animaciones que requieren revisión visual conjunta.
- El footer enlaza cinco servicios a «Próximamente» y contiene espacios de texto vacíos.
- Algunos botones de icono carecen de etiqueta accesible; el modal promocional personalizado requiere revisión de foco y teclado.

### Tareas

- [ ] F4-01. Mostrar etiquetas de navegación en móvil y revisar la navegación de escritorio.
- [ ] F4-02. Comprobar anchos, títulos, tarjetas, pestañas, formularios y ausencia de desplazamiento horizontal accidental.
- [ ] F4-03. Evitar superposición del regalo, WhatsApp, menú y contenido importante.
- [ ] F4-04. Verificar tamaños táctiles, foco visible, etiquetas, contraste y navegación por teclado.
- [ ] F4-05. Revisar cierre, foco, desplazamiento y teclado del modal promocional.
- [ ] F4-06. Reducir movimientos simultáneos y respetar la preferencia de movimiento reducido.
- [ ] F4-07. Revisar la pantalla inicial artificial y eliminar su demora si no aporta una necesidad real.
- [ ] F4-08. Mostrar en el footer servicios disponibles y pertinentes; eliminar recorridos comerciales sin contenido útil.
- [ ] F4-09. Revisar jerarquía, semántica y textos, incluida la página 404.

Archivos iniciales: `Header.jsx`, `Layout.jsx`, `Footer.jsx`, `Spinner.jsx`, `App.jsx`, `ModalPromocion.jsx`, `BotonWhatsApp.tsx`, páginas principales y estilos.

### Criterios de cierre

- [ ] Recorrido completo comprobado en móvil y escritorio, registrando dispositivos o tamaños usados.
- [ ] Menú, demos y contacto utilizables con pantalla táctil y teclado.
- [ ] No hay elementos flotantes que bloqueen acciones ni contenido esencial.
- [ ] Las páginas comerciales no llevan a servicios vacíos.

## Fase 5 — Medición y validación del recorrido comercial

Estado: pendiente.

### Diagnóstico

Los botones de planes llegan a contacto sin conservar la selección. El formulario no pregunta la necesidad concreta ni registra origen de campaña. No se encontró medición de conversiones implementada. AdSense está cargado en `index.html`.

La política de privacidad menciona herramientas que no describen exactamente el flujo incluido en el repositorio. Esta revisión trata de correspondencia entre información pública y funcionamiento; no constituye una validación legal.

### Tareas

- [ ] F5-01. Conservar el plan o promoción elegidos al llegar al formulario o abrir WhatsApp.
- [ ] F5-02. Permitir describir la necesidad con la mínima fricción y revisar qué campos deben ser obligatorios.
- [ ] F5-03. Definir captura de origen de campaña y su conservación durante el recorrido.
- [ ] F5-04. Definir eventos de interés: clic en demo, selección de plan, clic en WhatsApp y solicitud confirmada.
- [ ] F5-05. Evitar contar un clic en WhatsApp como conversación o venta confirmada.
- [ ] F5-06. Elegir e implementar la medición adecuada sin enviar datos personales en eventos o URLs de seguimiento.
- [ ] F5-07. Decidir si AdSense aporta al objetivo del sitio y actuar según esa decisión.
- [ ] F5-08. Alinear privacidad y cookies con las herramientas realmente utilizadas y hacer visible la información relevante junto al formulario.
- [ ] F5-09. Definir el seguimiento operativo: quién recibe el contacto, por qué canal responde y qué expectativa de respuesta se comunica.
- [ ] F5-10. Comprobar el recorrido desde una URL de campaña hasta el registro y seguimiento del prospecto.

Archivos iniciales: `Contacto.jsx`, `Precios.jsx`, `Home.jsx`, `ComoTrabajamos.jsx`, `ModalPromocion.jsx`, `BotonWhatsApp.tsx`, `Politica.jsx`, `PoliticaCookies.jsx`, `index.html` e integración receptora.

### Criterios de cierre

- [ ] Se conoce el servicio solicitado y el origen cuando están disponibles.
- [ ] Las conversiones registradas corresponden a hechos reales y no se duplican.
- [ ] El visitante sabe qué sucederá después de contactar.
- [ ] Se verificó el recorrido completo sin confundir envío, registro y notificación.

## Fase 6 — Rendimiento, mantenimiento y pulido

Estado: pendiente. Adelantar cualquier tarea que afecte a las fases anteriores.

### Hallazgos técnicos

- ESLint reporta cinco errores: `useState` sin usar en `Clientes.jsx`, `findCoupon` sin usar en `Contacto.jsx` y tres avisos sobre `motion` en componentes donde se utiliza en JSX. Estos últimos requieren revisar configuración/reconocimiento de JSX; no eliminar importaciones utilizadas.
- La compilación confirma un `@import` de fuentes mal ubicado en `src/index.css`.
- Las rutas se importan de forma directa y el contrato PDF forma parte de la cadena de importación de contacto.
- `public/luis3.png` pesa aproximadamente 2.23 MB y `public/capturas/pagina1.png` aproximadamente 2.36 MB.
- Todas las rutas comparten metadatos y canonical de portada.
- Las utilidades de rendimiento y validación existen, pero no se encontraron importaciones que las integren en el flujo actual.
- La documentación histórica no coincide con el catálogo, portafolio y contrato actuales.

### Tareas

- [ ] F6-01. Corregir los cinco errores de lint sin eliminar código usado ni silenciar problemas indiscriminadamente.
- [ ] F6-02. Corregir el orden de importación de fuentes y verificar que se conserve la apariencia prevista.
- [ ] F6-03. Medir bundle, recursos por ruta y carga móvil antes de elegir optimizaciones.
- [ ] F6-04. Optimizar las imágenes utilizadas: formato, tamaño, dimensiones y estrategia de carga.
- [ ] F6-05. Revisar la carga diferida de la imagen principal del inicio y priorizar los recursos visibles al entrar.
- [ ] F6-06. Evaluar división por rutas y carga de PDF únicamente cuando se necesite.
- [ ] F6-07. Revisar dependencias y componentes sin uso; eliminar únicamente tras comprobar referencias.
- [ ] F6-08. Evaluar las animaciones de AOS y Framer Motion según su coste y función real.
- [ ] F6-09. Revisar metadatos por ruta, dominio preferido, favicon y necesidades de indexación.
- [ ] F6-10. Revisar comportamiento ante errores de interfaz y almacenamiento local inválido o no disponible.
- [ ] F6-11. Actualizar README, CAMBIOS_REALIZADOS, IMPROVEMENTS y CONTRATO_REFERENCIA; distinguir contenido vigente de histórico.
- [ ] F6-12. Documentar integración de contacto, promociones, configuración y comprobaciones de despliegue.
- [ ] F6-13. Completar build, lint y comprobaciones de regresión pertinentes.

### Criterios de cierre

- [ ] Build y lint correctos; advertencias relevantes resueltas o documentadas con justificación.
- [ ] Optimizaciones respaldadas por mediciones antes/después.
- [ ] No hay regresiones visuales ni funcionales en las rutas principales.
- [ ] La documentación describe lo implementado y sus límites reales.

## Puerta de salida: listo para publicidad

Todas las condiciones siguientes deben verificarse antes de declarar el sitio preparado:

- [ ] El formulario no produce falsos éxitos y conserva datos ante fallo.
- [ ] WhatsApp abre el destinatario correcto.
- [ ] Se entiende rápidamente la oferta y su público objetivo.
- [ ] Los precios, promociones, revisiones, plazos y soporte son coherentes.
- [ ] Los demos funcionan y están identificados correctamente.
- [ ] No hay testimonios ni resultados sin respaldo.
- [ ] El primer contacto es sencillo y no exige contrato prematuro.
- [ ] La experiencia móvil y los controles esenciales están comprobados.
- [ ] El negocio puede recibir y dar seguimiento al prospecto.
- [ ] La medición distingue intención de contacto de registro confirmado.
- [ ] La información sobre datos corresponde a las herramientas utilizadas.
- [ ] Build y comprobaciones técnicas necesarias pasan.

## Estudios separados

1. **Benchmark de competencia en México:** comparar precios, alcance, renovaciones, tiempos, soporte, garantías, demos y señales de confianza. Debe informar cambios de precios, no retrasar la eliminación de contradicciones.
2. **Evaluación del dummy como producto vendible:** revisar móvil, personalización de productos, velocidad, pedidos/reservas, claridad para el negocio y posibles extras. Puede informar límites de los paquetes y qué se promete comercialmente.

## Registro de avance

| Fecha | Fase o actividad | Estado | Archivos modificados | Evidencia y pendientes |
| --- | --- | --- | --- | --- |
| 2026-09-11 | Diagnóstico del repositorio | Completado con límites documentados | Ninguno | Lectura de código y documentación; lint con cinco errores; build en memoria correcto con advertencia CSS; revisión visual e integraciones pendientes |
| 2026-09-11 | Creación del plan de control | Completada | ACTUALIZACION.md | Organización por fases; ninguna fase implementada |

### Plantilla para registrar cada avance

- Fecha:
- Fase e identificadores de tareas:
- Estado:
- Problema y cambio realizado:
- Archivos modificados:
- Comprobaciones ejecutadas y resultado:
- Evidencia del funcionamiento:
- Decisiones comerciales pendientes:
- Riesgos o limitaciones observadas:
- Próximo paso:

---

## Auditoría específica de UX y navegación — Análisis previo a implementación

Fecha: 11 de septiembre de 2026.

Esta sección es un análisis independiente de las tareas anteriores. No modifica su estado ni acredita implementación. Su único cambio es documental.

### Contexto confirmado por Enrique

Actualmente no hay clientes directos que puedan presentarse como casos reales. Por tanto, los testimonios actuales no deben utilizarse como evidencia de clientes de Enrique. Las dos demos prioritarias son una pizzería con carrito y pedidos por WhatsApp y una agenda digital. El usuario las identifica como funcionales; esta auditoría no ha probado sus funciones en vivo.

El visitante objetivo es dueño de un pequeño negocio en México, llega desde un anuncio, no conoce a Enrique y quiere resolver una necesidad concreta sin tener que entender tecnología.

### Método y límites de evidencia

- **CÓDIGO:** comprobado en rutas, componentes, contenido y destinos declarados en el repositorio. No garantiza que producción tenga exactamente esta versión.
- **USUARIO:** información proporcionada por Enrique sobre su experiencia comercial y sus demos.
- **INFERENCIA UX:** consecuencia probable del contenido o comportamiento programado; no es un resultado de pruebas con personas.
- **VISUAL PENDIENTE:** requiere navegador, pantalla táctil o dispositivo real para determinar su manifestación y gravedad efectiva.

Se revisaron nuevamente navegación, layout, CTA, páginas comerciales, modal promocional y WhatsApp. No hay herramienta de navegador disponible ni instalación local de Playwright, Puppeteer o Chromium detectada. No se instalaron herramientas, no se probaron formularios externos ni se enviaron pedidos o reservas. No se afirma que los enlaces externos estén rotos ni que las demos fallen. Tampoco se midieron tiempos de carga, contraste, recortes o desbordamientos en una pantalla real.

La evaluación del recorrido es una simulación razonada sobre el código, no una sesión observada de un visitante.

### Escala de prioridad

- **CRÍTICO:** puede provocar abandono o desconfianza por un fallo central de contacto o una presentación comercial engañosa o contradictoria.
- **IMPORTANTE:** debería corregirse antes de publicidad para facilitar comprensión, navegación y conversión.
- **MEJORA:** puede abordarse después de resolver los obstáculos principales.

La prioridad señala el impacto esperado, no demuestra que ya se haya producido abandono. Cuando el efecto depende de una comprobación visual, se indica expresamente.

### 1. Primera impresión: qué se entiende al llegar

| Pregunta del visitante | Respuesta que ofrece hoy el sitio | Evaluación |
| --- | --- | --- |
| ¿Qué ofrece Enrique? | «Diseño Web & Android» y planes desde $699 MXN | Se reconoce desarrollo web, pero no se priorizan menú, pedidos o agenda desde el encabezado |
| ¿Es para mi negocio? | «Tu negocio merece estar en internet» | Es amplio; falta identificar de inmediato restaurantes, profesionales y negocios locales |
| ¿Qué problema me resuelve? | Frases rotativas sobre clientes, presencia online y rapidez | El beneficio concreto depende de esperar o seguir leyendo; la solución de pedidos aparece más abajo |
| ¿Cuánto cuesta? | Desde $699 MXN | Da una referencia útil, pero no identifica en ese punto que corresponde a Tarjeta Digital, no a todas las soluciones |
| ¿Qué hago después? | «Ver Planes» y «Contactar» | Hay salida clara, pero no una invitación directa a comprobar la solución mediante una demo en el hero |
| ¿Por qué confiar? | Testimonios, más abajo biografía y demo de pizzería | La prueba más relevante debería ser la demo identificada como tal; los testimonios contradicen el contexto confirmado |

Antes de acceder al contenido se monta una pantalla de carga con progreso artificial. Su programación añade aproximadamente 900 ms nominales, sin representar la carga real; no se ha medido la duración percibida. Tras ella, el logo, espacios del layout y márgenes del inicio preceden o acompañan el mensaje. No se ha comprobado qué queda exactamente dentro del primer viewport.

Compiten por atención el título tecnológico, los colores de varios acentos, dos botones con fuerte tratamiento visual, la frase mecanografiada y una foto genérica. Más abajo compiten testimonios, cifras de resultados, oferta para restaurantes y presentación personal. En Precios se añade el regalo animado. El regalo no está montado en Inicio y la promoción no se abre sola.

### 2. Navegación: escritorio y móvil por separado

**Escritorio — comprobado en código:** existe una barra lateral fija con cuatro enlaces. La ruta activa cambia de borde, fondo y brillo. Las etiquetas están ocultas hasta `hover`; hay tooltips. Los títulos de las páginas ayudan a orientarse después de entrar. El logo no es un enlace al inicio y el menú usa «Home» junto a etiquetas en español. No se encontró `aria-current` en el enlace activo.

**Escritorio — valoración:** cuatro opciones son razonables. La dificultad no es su cantidad, sino obligar al visitante a reconocer iconos o explorarlos para leer destinos. Una navegación visible «Inicio · Soluciones y precios · Proyectos y demos · Contacto» sería más explícita. No hace falta añadir submenús ni breadcrumbs para esta estructura pequeña. La barra se expande sobre el área de la página; un solapamiento real requiere validación visual.

**Móvil — comprobado en código:** por debajo de 768 px se utiliza un botón de menú arriba a la derecha que abre un panel desde la izquierda. Ese panel reutiliza enlaces de 56 px de ancho y etiquetas con `opacity-0` hasta `hover`, igual que escritorio. Los botones de abrir y cerrar menú no tienen una etiqueta accesible explícita. El estado móvil se determina después del primer render mediante un efecto.

**Móvil — valoración:** abrir desde el lado opuesto al botón es una inconsistencia menor; la prioridad es mostrar siempre los nombres de las páginas dentro del panel. No puede asegurarse que las etiquetas sean imposibles de revelar en todos los teléfonos: algunos navegadores emulan `hover`, pero no es un mecanismo claro ni fiable para orientarse. No se comprobó visualmente un parpadeo inicial ni un fallo del Drawer.

### 3. Repetición, rutas y utilidad de cada página

| Lugar | Función actual | Fricción o repetición | Función propuesta |
| --- | --- | --- | --- |
| Inicio | Presentación general, testimonios y una oferta extensa de pedidos | Repite prestaciones y precio similares a Básico Plus sin aclarar la relación | Explicar soluciones, mostrar dos demos y conducir al precio o consulta |
| Precios | Catálogo Express/Premium con FAQ | Debe compararse con la oferta del inicio y el regalo; faltan enlaces de cada plan a su demo | Una definición coherente por solución y acceso directo a evidencia |
| Clientes | Cinco tarjetas y CTA genérico de contacto | Nombre inadecuado para proyectos demostrativos; repite promesas generales y no conecta cada demo con precio | Proyectos y demos, con las dos soluciones prioritarias destacadas |
| Contacto | Registro, instrucciones de contratación y PDF | Pide compromiso antes de conversar; no conserva plan elegido | Consulta breve con contexto y siguiente paso claro |
| Footer | Redes, legal y otros servicios | Siete redes y cinco servicios «Próximamente» crean salidas poco relacionadas con la consulta | Identidad, contacto, enlaces útiles y servicios realmente disponibles |

Repetir una referencia de precio o un CTA no es por sí mismo un problema. Es útil si mantiene los mismos datos y evita que el usuario tenga que buscarlos. El problema actual es repetir ofertas parecidas con condiciones distintas y sin una relación explícita.

`/precios2` ya redirige a `/precios`: no es un callejón sin salida. Las páginas legales tienen una función útil y deben conservarse. `/proximamente` no está roto, pero no resuelve las necesidades anunciadas en los enlaces del footer. Los modales de construcción/remodelación sin montar no bloquean el recorrido actual.

### 4. Registro de problemas, evidencia y clasificación

| ID | Clasificación | Problema y evidencia | Efecto probable y propuesta |
| --- | --- | --- | --- |
| UX-01 | CRÍTICO | «Clientes», «Lo Que Dicen Mis Clientes» y textos atribuidos a negocios, pese a que no hay clientes directos presentables. CÓDIGO + USUARIO | Puede inducir a creer que son trabajos contratados. Sustituir esa prueba social por demostraciones explícitas y retirar testimonios atribuidos |
| UX-02 | CRÍTICO | «+40% ventas», «3x más rápido», «Cero errores» y CRM que atiende sin intervención. CÓDIGO; sin respaldo aportado | Promesas que la demo no demuestra por sí sola. Describir funciones observables sin garantías de resultado |
| UX-03 | CRÍTICO | Contacto anuncia éxito en `.finally()`, borra datos y consume cupón ante fallo. CÓDIGO | Pérdida de prospectos y confianza. Confirmar registro real y conservar información ante error |
| UX-04 | CRÍTICO | WhatsApp se genera sin el prefijo de país publicado en privacidad. CÓDIGO; apertura real pendiente | Riesgo en una vía principal de contacto. Unificar número y probar destinatario; no se afirma que se haya observado un fallo en vivo |
| UX-05 | CRÍTICO | Ofertas de pedidos a $2,999/$3,999 y Web + App a $4,000/$13,999 sin diferenciación suficiente; revisiones y plazos inconsistentes. CÓDIGO | El usuario no puede saber qué está comprando. Unificar o explicar diferencias antes de captar tráfico |
| UX-06 | IMPORTANTE | Menú de escritorio basado en iconos y etiquetas bajo `hover`. CÓDIGO | Exige exploración innecesaria. Mostrar nombres y estado actual de forma explícita |
| UX-07 | IMPORTANTE | Panel móvil conserva las etiquetas ocultas y ancho compacto. CÓDIGO + INFERENCIA UX | Dificulta reconocer destinos en táctil. Mostrar enlaces completos sin depender de `hover` |
| UX-08 | IMPORTANTE | Hero técnico, público amplio, frase cambiante y precio mínimo sin producto asociado. CÓDIGO | Débil correspondencia con un anuncio específico. Mensaje estático por necesidad y precio claramente asociado |
| UX-09 | IMPORTANTE | La demo de pizzería está más abajo; no hay demo de agenda destacada en Inicio ni enlaces de demo por plan. CÓDIGO | Obliga a buscar evidencia entre páginas. Acercar cada demo a su solución y precio |
| UX-10 | IMPORTANTE | Títulos, descripción y categoría de proyectos se muestran mediante overlay de `hover`; no hay botón visible permanente de demo. CÓDIGO | Menor claridad en móvil y teclado. Información y acción visibles fuera del overlay |
| UX-11 | IMPORTANTE | «Contratar Ahora», «Lo Quiero Ya» y «Contactar» llevan al mismo formulario, sin transmitir producto o promoción. CÓDIGO | Promesa de acción distinta del destino y pérdida de contexto. CTA de consulta con solución preseleccionada |
| UX-12 | IMPORTANTE | Contacto presenta firma, anticipo, liquidación y descarga de contrato. CÓDIGO | Un visitante que solo pregunta puede interpretar un compromiso. Posponer contratación hasta acordar alcance |
| UX-13 | IMPORTANTE | Cinco campos obligatorios, incluido correo además de teléfono; no se pregunta qué necesita. CÓDIGO | Solicita datos antes de escuchar la consulta. Pedir nombre, canal de respuesta y necesidad; negocio y otros datos según necesidad real |
| UX-14 | IMPORTANTE | Seis pasos apilados en móvil y bloque de contrato antes del formulario. CÓDIGO; distancia visible no medida | Retrasa llegar a la acción. Mostrar formulario antes y una breve explicación de qué sucede después |
| UX-15 | IMPORTANTE | Cupones y existencias locales, sin condiciones claras de producto o vigencia. CÓDIGO | Puede sugerir escasez real inexistente y distraer a quien no tiene código. Retirar o respaldar con condiciones y control real |
| UX-16 | IMPORTANTE | Botón final «Enviar» y confirmación sin expectativa clara de respuesta; información de privacidad lejos del formulario. CÓDIGO | No aclara qué se envía ni qué ocurrirá. Nombrar solicitud, canal y siguiente paso sin prometer un plazo no acordado |
| UX-17 | IMPORTANTE | Cinco servicios del footer terminan en «Próximamente». CÓDIGO | Sensación de oferta incompleta y desvío del objetivo. Mostrar únicamente servicios disponibles |
| UX-18 | IMPORTANTE | Pantalla de carga artificial y contenido animado antes de la interacción útil. CÓDIGO; coste real pendiente | Demora innecesaria para tráfico que acaba de hacer clic. Acceso inmediato y movimiento moderado |
| UX-19 | IMPORTANTE | Regalo en precios con z-index 9998, modal 9999 y varios elementos fijos. CÓDIGO; solapamiento VISUAL PENDIENTE | Competencia con navegación y consulta; posible aparición por encima de otras capas. Revisar jerarquía y evitar promoción flotante distractora |
| UX-20 | IMPORTANTE | Modal promocional sin gestión explícita de foco, Escape o altura máxima con scroll; botones de menú sin nombre accesible explícito. CÓDIGO | Dificultad potencial con teclado o pantalla baja. Validar y corregir accesibilidad y cierre |
| UX-21 | IMPORTANTE | Textos grandes, anchos mínimos, rellenos anidados y CTA con `nowrap`; precio destacado con tipografía grande. CÓDIGO; recortes VISUAL PENDIENTE | Riesgo de desbordamiento en pantallas estrechas. Probar y ajustar solo los problemas observados |
| UX-22 | IMPORTANTE | Demos abren otra pestaña, sin puente explícito desde cada tarjeta al precio o consulta del producto. CÓDIGO; contenido externo no auditado | El visitante debe recordar cómo volver y qué solicitar. Avisar nueva pestaña y mantener precio/consulta en la tarjeta de origen |
| UX-23 | MEJORA | «Home» en navegación española y logo no enlazado. CÓDIGO | Pequeña inconsistencia con expectativas. Usar «Inicio» y permitir volver mediante el logo |
| UX-24 | MEJORA | Misión/visión, espacios vacíos de testimonios y siete redes compiten con información más útil. CÓDIGO + INFERENCIA UX | Añaden longitud y salidas secundarias. Priorizar presentación breve, demos y contacto |

Estos hallazgos se relacionan con las fases existentes: UX-03/04/11–16 con fase 1 y 5; UX-01/02/09/10/22 con fase 2; UX-05/08 con fase 3; UX-06/07/17–21/23/24 con fase 4 y, según impacto, fase 6. La tabla no marca ninguna tarea como realizada.

### 5. Confianza: propuesta de «Proyectos y demos»

Se recomienda **«Proyectos y demos»** como nombre de página y navegación. Permite incorporar proyectos personales sin atribuirles clientes y es más explícito que «Proyectos» solo. «Demostraciones» también sería honesto, pero limita el espacio si luego se incluyen otros trabajos. «Clientes» no corresponde al contexto actual.

Renombrar el texto no obliga a romper `/clientes`. Puede conservarse temporalmente la ruta; si se crea `/proyectos`, planificar una redirección para los enlaces existentes. Esto es una propuesta, no un cambio aplicado.

Texto introductorio propuesto:

> Explora dos ejemplos de soluciones que puedo adaptar a tu negocio. Son proyectos demostrativos creados para mostrar su funcionamiento; no son casos de clientes contratados.

| Demo | Presentación propuesta | Qué invitar a explorar | Qué no afirmar |
| --- | --- | --- | --- |
| Pizzería | «Demo — Menú digital y pedidos por WhatsApp» | Consultar menú, agregar productos, revisar carrito y preparar el pedido para WhatsApp | Ventas obtenidas, clientes atendidos, pedidos enviados sin intervención o ausencia garantizada de errores |
| Agenda | «Demo — Agenda digital para negocios» | Explorar servicios y el flujo de selección de cita que realmente esté implementado | Reservas reales, recordatorios, sincronización o confirmación automática sin comprobarlos |

La tarjeta de cada demo debería tener captura correspondiente, etiqueta visible «Proyecto demostrativo», descripción breve, funciones comprobadas y dos salidas claras: «Ver demo de pizzería/agenda» y «Consultar esta solución». El precio debe corresponder al alcance mostrado, indicando extras cuando existan. Los restantes proyectos pueden quedar en una sección secundaria solo si aportan evidencia relevante y tienen su naturaleza correctamente identificada.

Una demo demuestra que Enrique ha construido un flujo concreto; no demuestra ventas, satisfacción de clientes ni operación sostenida en negocios reales. La confianza puede apoyarse además en identidad visible, trato directo, condiciones claras y un proceso de entrega comprensible.

Antes de promocionarlas debe verificarse que los datos sean demostrativos y que el visitante pueda explorar sin enviar pedidos a un negocio real ni reservar citas reales por accidente. Esta es una condición pendiente, no un fallo comprobado de las demos actuales. Para WhatsApp, describir con precisión que se prepara o abre un mensaje y que su envío requiere la acción del usuario cuando así funcione la demo.

### 6. Simulación del recorrido comercial actual

| Paso | Lo que encuentra o debe hacer | Fricción detectada |
| --- | --- | --- |
| Anuncio → Inicio | Esperar pantalla inicial y leer una oferta general Web/Android | Si el anuncio ofrece una agenda o menú, la continuidad del mensaje no es inmediata |
| Entender servicio | Leer hero y desplazarse; aparecen testimonios antes de la explicación de pedidos | Evidencia inadecuada y solución de agenda menos visible |
| Ver demo | Encontrar la pizzería más abajo o descubrir «Clientes» en navegación | La etiqueta no anuncia demos; falta ruta directa desde el hero y desde planes |
| Explorar demo | Abrir un destino externo en otra pestaña | Debe volver a la pestaña original para seguir; no se evaluó la navegación interna del destino |
| Consultar precio | Buscar Precios y relacionar demo con plan | Oferta de restaurantes y Básico Plus no se explican entre sí; no hay selección conservada |
| Contactar | Pulsar un CTA de contratación o el icono de WhatsApp | El formulario parece una contratación; WhatsApp pierde contexto y su número necesita revisión |
| Enviar formulario | Completar datos y cupón opcional | Puede mostrar éxito sin registro confirmado; el visitante deja de intentar contactar |

El recorrido de agenda requiere descubrirla en Precios o Clientes; no dispone del bloque de demostración destacado que sí tiene pizzería en Inicio. Para un anuncio de agenda, esto añade búsqueda innecesaria.

Los principales callejones comerciales son los servicios «Próximamente» y el falso éxito del formulario. Los enlaces externos de demos no son callejones técnicos comprobados, pero necesitan un regreso comprensible al precio y la consulta. La ausencia de breadcrumbs no es un problema prioritario en este sitio.

### 7. Evaluación móvil y comprobaciones pendientes

| Área | Qué se puede afirmar desde código | Qué debe comprobarse visualmente |
| --- | --- | --- |
| Navegación | Drawer con etiquetas dependientes de `hover`; botón de menú fijo | Uso táctil real, lectura de etiquetas, foco, apertura y cierre |
| Botones | WhatsApp tiene 64 × 64 px y nombre accesible; varios CTA usan rellenos amplios y `nowrap` | Recortes de texto, alcance cómodo, separación y superposición |
| Textos | Hero grande y frase con altura fija `h-7` | Saltos de línea, invasión del siguiente bloque y espacio en primer viewport |
| Tarjetas | Proyectos con imagen de altura fija `h-80` y texto en overlay | Recorte útil de captura y lectura sin cursor |
| Precios | Tres tarjetas Express/Premium según pestaña y rellenos anidados | Ancho útil, pestañas legibles, comparación y desplazamiento horizontal |
| Demos | Enlaces externos con nueva pestaña | Retorno desde navegador de Instagram/Facebook y apertura de WhatsApp desde la demo |
| Flotantes | Menú arriba, WhatsApp abajo y regalo en precios con z-index elevado | Si tapan controles, compiten con Drawer o interfieren con teclado virtual |
| Formulario | Seis pasos verticales antes de campos; teléfono de diez dígitos y correo obligatorio | Esfuerzo de scroll, teclado, pegado de número con +52, lectura y recuperación de errores |
| Animaciones | Múltiples animaciones, escritura progresiva y cargador artificial | Fluidez en móvil modesto, movimiento reducido y tiempo hasta interacción |

Plan de validación posterior: pantallas de 320, 360, 390 y 768 px; escritorio de 1024 y 1440 px; orientación horizontal; ampliación de texto; teclado; un Android y un iPhone cuando estén disponibles; navegadores internos de anuncios. Estos tamaños son escenarios propuestos, no pruebas ejecutadas. No se inventan métricas ni capturas.

### 8. Recorrido ideal propuesto — Sin implementación

**Anuncio de una solución → Inicio con mensaje correspondiente → Demo identificada → Precio y alcance de esa solución → Consulta con contexto → Confirmación real y atención personal.**

No debe ser obligatorio pasar por todas las páginas. Un visitante que ya decidió puede contactar directamente; quien necesita evidencia puede explorar la demo sin perder el acceso al precio.

1. **Llegada:** título sencillo, por ejemplo «Menús digitales, agendas y páginas web para tu negocio». Subtexto con atención directa en México y personalización. Si se muestra «desde $699», asociarlo expresamente a la Tarjeta Digital y mantener las demás soluciones con su propio precio.
2. **Elegir necesidad:** presentar pedidos por WhatsApp, agenda y página para negocio con nombres comprensibles. Dar protagonismo a las dos demos, sin introducir primero Android, CRM o tecnologías.
3. **Comprobar:** ver captura, etiqueta de demo, funciones reales y «Ver demo». Indicar que se abre otra pestaña y conservar en la página original las acciones de precio y consulta.
4. **Entender coste:** mostrar un resumen coherente de qué incluye, plazo condicionado a materiales, revisiones, soporte y renovación. Ofrecer detalles sin obligar a leer todo el catálogo.
5. **Contactar:** «Consultar esta solución» o «Hablar por WhatsApp», con una acción visual dominante según la sección. Conservar el producto elegido. Formulario breve que permita contar la necesidad y elegir un canal de respuesta.
6. **Saber qué sigue:** explicar que Enrique revisará la consulta y responderá para confirmar alcance y propuesta. Mostrar recepción únicamente si está confirmada; ante fallo, conservar datos y ofrecer alternativa.
7. **Contratar después de conversar:** acuerdo, anticipo y entrega aparecen tras definir el alcance, sin convertir el primer formulario en un compromiso prematuro.

Estructura sugerida de Inicio: mensaje principal → soluciones y dos demos → precios resumidos coherentes → cómo se trabaja → presentación personal breve → FAQ → contacto. Navegación propuesta: Inicio, Soluciones y precios, Proyectos y demos, Contacto. Evitar añadir nuevas páginas si basta con ordenar y conectar las existentes.

### Conclusión de la auditoría

El sitio ya tiene rutas suficientes y material demostrativo aprovechable. El obstáculo principal es la distancia entre la intención del visitante y la forma de presentar, demostrar y consultar cada solución. Antes de publicidad se recomienda priorizar honestidad de la evidencia, contacto fiable, coherencia de la oferta y navegación táctil explícita. No se requiere aparentar una agencia ni ampliar el catálogo para resolverlo.

**Estado:** análisis documentado. Ninguna tarea de implementación completada. Único archivo modificado en esta auditoría: `ACTUALIZACION.md`. Sin commit ni push.


## Guardado documental para continuar más tarde

Por solicitud de Enrique, se creó `Auditoria UX.md` como documento independiente con el contenido de la auditoría. Se autorizó realizar commit y push de `MODIFICACIONES.md`, `ACTUALIZACION.md` y `Auditoria UX.md`. Esta autorización corresponde al guardado documental; ninguna fase de implementación se ha iniciado ni se ha marcado como completada.

Para retomar: revisar las decisiones pendientes del plan y la auditoría antes de implementar la siguiente fase.
