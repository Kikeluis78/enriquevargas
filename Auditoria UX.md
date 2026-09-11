# Auditoría UX y navegación


Fecha: 11 de septiembre de 2026.

Este documento recoge la auditoría incluida en ACTUALIZACION.md y complementa MODIFICACIONES.md. No modifica el estado de las fases ni acredita implementación. Su alcance es documental.

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

**Estado:** análisis documentado. Ninguna tarea de implementación completada. La auditoría original se realizó sin commit ni push; posteriormente Enrique autorizó guardar y subir los documentos para continuar más tarde.
