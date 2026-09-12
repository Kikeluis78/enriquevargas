# ESTRATEGIA COMERCIAL UX - Diagnóstico y Propuesta

**Fecha:** 2026-09-10  
**Proyecto:** Portafolio comercial de Enrique Vargas  
**Objetivo:** Vender soluciones digitales económicas y reutilizables a micro y pequeños negocios en México

---

## 1. DIAGNÓSTICO ACTUAL

### 1.1 Modelo de negocio declarado vs. sitio actual

**Modelo real:**
- Productos reutilizables (menú digital, agenda digital, tarjeta digital)
- Personalización de colores, logo, textos, productos/servicios, contacto
- Producción eficiente y precios accesibles
- Atención directa por una persona (no agencia)

**Lo que comunica el sitio:**

#### Home.jsx (líneas 60-74)
```
h1: "Diseño Web & Android"
Subtítulo: "Tu negocio merece estar en internet."
Precio destacado: "Planes desde $699 MXN"
```

**Problema:** El h1 es genérico ("Diseño Web & Android"). No menciona soluciones específicas ni el modelo de reutilización. El visitante no sabe si contrata desarrollo desde cero o productos preexistentes.

#### ComoTrabajamos.jsx (líneas 20-47)
Sección titulada "Sistema de Pedidos Inteligente" que describe:
- Menú digital
- Todo por WhatsApp
- Carrito de compras
- Revisión del pedido

**Problema:** Solo describe el flujo de menú digital. No menciona que existe una base ya desarrollada que se personaliza. El texto "La atención y confirmación del pedido corresponden al negocio" (línea 61) es correcto para aclarar responsabilidades, pero no explica el modelo de reutilización.

#### Precios.jsx (líneas 38-102)
- **Planes Express:** Tarjeta Digital ($699), Básico Plus ($3,999), Agenda Digital ($1,499)
- **Planes Premium:** E-Commerce PRO ($9,499), Web Corporativa ($9,999), Oferta 2026 Web + App ($13,999)
- Sección adicional: "Aplicaciones Android" (cotización)

**Problemas identificados:**

1. **Jerarquía invertida:** Los productos principales (menú digital, agenda, tarjeta) están mezclados con servicios de desarrollo desde cero (E-Commerce, Web Corporativa, Apps) sin distinción clara.

2. **Ambigüedad en "Básico Plus":** El nombre no indica que es menú digital con pedidos por WhatsApp. La descripción dice "Mini tienda con carrito vía WhatsApp" pero no establece relación con la demo de pizzería.

3. **Precio de oferta confuso:** En ComoTrabajamos.jsx (líneas 183-187) se muestra "$2,999" como oferta especial para "Sistema de Pedidos por WhatsApp", pero en Precios.jsx el "Básico Plus" cuesta $3,999. No queda claro si son el mismo producto.

4. **Sin mención de reutilización:** Ningún plan explica que se trata de productos ya desarrollados que se personalizan. El usuario puede pensar que todo se desarrolla desde cero.

#### DemosDestacadas.jsx (líneas 3-19)
Dos demos:
1. Pizzería con pedidos por WhatsApp
2. Agenda digital

**Aspectos positivos:**
- Se aclara "Proyecto demostrativo" (no cliente contratado)
- Botones para "Ver planes y precios" y "Consultar esta solución"
- Links a demo funcional

**Problema:** No hay demo de tarjeta digital, que es el producto de entrada ($699).

#### Clientes.jsx (líneas 6-22)
"Otros proyectos demostrativos":
- Tarjeta Digital Oficios
- CRM Pagos
- Mini App World

**Problema:** "CRM Pagos" y "Mini App World" no se mencionan en ningún plan de precios. No hay path claro hacia la contratación.

### 1.2 Navegación

#### Header.jsx (líneas 11-44)
```
Inicio | Precios | Proyectos y demos | Contacto
```

**Problemas:**
1. No hay sección de "Servicios" o "Soluciones" que agrupe los productos principales
2. "Proyectos y demos" mezcla dos conceptos diferentes
3. No hay navegación directa a cada tipo de solución

#### Footer.jsx (líneas 59-72)
Columna "Otros Servicios" con links a:
- Criptomonedas
- Consultoría Digital
- Branding
- Marketing Digital
- SEO

**Problema crítico:** Cinco servicios sin implementar (todos llevan a `/proximamente`). Esto genera desconfianza y dispersa la atención de los productos reales.

### 1.3 Cantidad de información

#### Home.jsx - Estructura actual:
1. Hero (título + precio desde $699 + CTAs)
2. Sección "Explora mis demos" (dos demos)
3. Sección "Cómo trabajamos" (sistema de pedidos WhatsApp + oferta $2,999)
4. Sección "Sobre mí" (biografía)

**Problemas:**
- No hay descripción de los tres productos principales antes de mostrar demos
- La oferta de $2,999 en "Cómo trabajamos" compite con la sección de Precios
- El visitante debe scrollear hasta las demos para entender qué se vende

### 1.4 Claridad de los servicios

**Lo que el visitante puede inferir:**
- Se venden "planes" de diseño web
- Hay algo relacionado con WhatsApp y pedidos
- Hay demos de pizzería y agenda
- Los precios van de $699 a $13,999

**Lo que NO puede inferir:**
- Qué incluye cada producto exactamente
- Cuál es la diferencia entre "Básico Plus" y el menú de pizzería
- Si las demos son productos listos o solo ejemplos
- Qué se personaliza en cada producto

### 1.5 CTAs (Calls to Action)

**Home.jsx:**
- "Ver Planes" → /precios
- "Contactar" → /contacto

**DemosDestacadas.jsx:**
- "Ver demo de pizzería/agenda" → URL externa
- "Ver planes y precios" → /precios
- "Consultar esta solución" → /contacto?solucion=pizzeria|agenda

**ComoTrabajamos.jsx:**
- "¡Lo Quiero Ya!" → /contacto
- "Ver Demo" → demo externa pizzería

**Precios.jsx:**
- "Contratar Ahora" → /contacto

**Problemas:**
1. No hay CTA de "Ver demo" directo desde la tarjeta de precios
2. El CTA "Contratar Ahora" es agresivo para quien aún no ha visto una demo
3. No hay distinción entre "Ver demo" y "Pedir información"

### 1.6 Sección de Proyectos/Demos

**Clientes.jsx:**
- Título: "Proyectos y demos"
- Subtítulo: "Explora ejemplos de soluciones que puedo adaptar a tu negocio. Son proyectos demostrativos; no son casos de clientes contratados."

**Problemas:**
1. El término "Proyectos y demos" sugiere una mezcla de proyectos reales y demos
2. No hay separación clara entre demos principales (pizzería, agenda) y otros proyectos
3. "Tarjeta Digital Oficios" aparece en "Otros proyectos" en lugar de junto con los productos principales

### 1.7 Relación entre demos y productos

| Demo | Plan en Precios | Relación clara |
|------|-----------------|----------------|
| Pizzería con pedidos por WhatsApp | Básico Plus ($3,999) | NO - nombre diferente |
| Agenda digital | Agenda Digital ($1,499) | Sí |
| Tarjeta Digital Oficios | Tarjeta Digital ($699) | NO - está en otra sección |

### 1.8 Footer

**Problemas identificados:**
1. Columna "Otros Servicios" con 5 servicios no disponibles → genera frustración
2. No hay información de contacto directo en el footer
3. No hay CTA de WhatsApp en el footer (el botón flotante no es suficiente para todos los contextos)

### 1.9 Experiencia móvil inferida desde el código

**Aspectos positivos:**
- Layout responsive en grid (Home.jsx usa `md:grid-cols-2`)
- Navegación móvil con drawer lateral (Header.jsx)
- Botón WhatsApp flotante fijo (BotonWhatsApp.tsx)

**Problemas potenciales:**
- No se puede verificar la experiencia real sin pruebas en dispositivo
- El texto de "Cómo trabajamos" es largo para móvil
- Las tarjetas de planes en Precios.jsx tienen mucho contenido para pantallas pequeñas

---

## 2. PROBLEMAS DE CLARIDAD

### 2.1 Jerarquía de productos confusa

**Situación actual:**
```
Planes Express:
  - Tarjeta Digital ($699)
  - Básico Plus ($3,999) ← ¿Qué es esto?
  - Agenda Digital ($1,499)

Planes Premium:
  - E-Commerce PRO ($9,499)
  - Web Corporativa ($9,999)
  - Web + App ($13,999)
  - Aplicaciones Android (cotización)
```

**Problemas:**
1. "Básico Plus" no comunica que es menú digital con pedidos por WhatsApp
2. No hay distinción entre "productos reutilizables" y "desarrollo desde cero"
3. E-Commerce PRO ($9,499) aparece como "Express" en el primer tab pero es Premium

### 2.2 Modelo de negocio no explicitado

El sitio no menciona en ningún lugar:
- "Productos ya desarrollados que se personalizan"
- "Personalizo colores, logo, textos, productos, categorías, contacto"
- "Entrega rápida porque la base ya existe"

Sin esta información, el visitante puede pensar:
- Que todo se desarrolla desde cero → precio parece bajo (desconfianza)
- Que el desarrollo será lento → no se comunica la rapidez
- Que no hay flexibilidad → duda si se adaptará a su negocio

### 2.3 Precio de oferta duplicado y contradictorio

**ComoTrabajamos.jsx (líneas 183-187):**
```
$2,999 MX - Pago único
"Sistema de Pedidos por WhatsApp"
```

**Precios.jsx (líneas 48-61):**
```
Básico Plus: $3,999
"Mini tienda con carrito vía WhatsApp"
```

No queda claro si:
- Son el mismo producto con precio diferente
- El precio de $2,999 es una promoción temporal
- El precio de $3,999 incluye algo adicional

### 2.4 Navegación no alineada con productos

**Rutas actuales:**
- `/` → Home genérico
- `/precios` → Todos los planes mezclados
- `/clientes` → Proyectos y demos mezclados
- `/contacto` → Formulario genérico

**Rutas faltantes:**
- No hay páginas dedicadas por producto (ej: `/menu-digital`, `/agenda`, `/tarjeta`)
- No hay forma de navegar desde un producto específico a su demo y precio

---

## 3. PROBLEMAS DE CONFIANZA

### 3.1 Servicios no disponibles en el footer

**Footer.jsx (líneas 59-72):**
```jsx
{[
  ["Criptomonedas", "/proximamente"],
  ["Consultoría Digital", "/proximamente"],
  ["Branding", "/proximamente"],
  ["Marketing Digital", "/proximamente"],
  ["SEO", "/proximamente"],
]}
```

**Problema:** Cinco servicios que no existen. Esto genera:
- Desconfianza ("¿Esto es real o solo está placeholders?")
- Frustración ("Necesito SEO pero no está disponible")
- Dilución del mensaje ("¿Qué es lo que realmente vendes?")

### 3.2 Textos que sugieren agencia o equipo

**Home.jsx (línea 65):**
```
"Diseño Web & Android"
```
No especifica que es una persona. Podría interpretarse como una empresa.

**Precios.jsx (líneas 81-88):**
```
bestFor: ["Pizzerías", "Cualquier negocio con servicio a Domicilio"]
```
Usa plural ("Pizzerías") lo cual es correcto, pero no aclara el alcance real.

**ComoTrabajamos.jsx (línea 37):**
```
"Desarrollamos tu aplicación Android profesional desde cero"
```
**Problema crítico:** Usa primera persona del plural ("Desarrollamos"), lo que sugiere un equipo. Esto contradice la sección de Biografía que dice "No soy una agencia enorme".

**Precios.jsx (línea 56):**
```
"✅ Soporte 24/7"
```
**Problema crítico:** Promesa imposible de cumplir para una sola persona. Esto genera expectativas no realistas y puede resultar en insatisfacción.

### 3.3 Falta de prueba social real

**Lo que NO hay:**
- Testimonios de clientes (no se pueden inventar)
- Casos de éxito documentados
- Número de proyectos entregados
- Tiempo de respuesta promedio

**Lo que SÍ hay:**
- Demos funcionales que prueban capacidad técnica
- Biografía honesta ("No soy una agencia enorme")
- Precios transparentes

**Problema:** El sitio no aprovecha las demos como "prueba de capacidad". Podría decir: "Puedes explorar las demos y juzgar por ti mismo si es lo que necesitas".

### 3.4 Demos sin contexto de personalización

**DemosDestacadas.jsx (líneas 8-18):**
```
description: "Ejemplo para restaurantes: consulta el menú, agrega productos al carrito..."
```

No menciona:
- "Esta demo puede adaptarse a tu negocio con tus productos y colores"
- "El menú que ves es solo un ejemplo, se personaliza completamente"

---

## 4. PROPUESTA DE JERARQUÍA DE PRODUCTOS

### 4.1 Categorización propuesta

**PRODUCTOS PRINCIPALES (reutilizables y personalizables):**

| Producto | Precio actual | Propuesta de nombre | Demo asociada |
|----------|---------------|---------------------|---------------|
| Tarjeta Digital | $699 | Tarjeta Digital para Oficios | `/capturas/tarjeta-oficios.png` |
| Básico Plus | $3,999 | Menú Digital con Pedidos por WhatsApp | Pizzería demo |
| Agenda Digital | $1,499 | Agenda Digital para Citas | Agenda demo |

**PRODUCTOS SECUNDARIOS (desarrollo desde cero / cotización):**

| Producto | Precio actual | Propuesta | Justificación |
|----------|---------------|-----------|---------------|
| E-Commerce PRO | $9,499 | "Cotizar" en lugar de precio fijo | No es reutilizable, requiere análisis |
| Web Corporativa | $9,999 | "Cotizar" en lugar de precio fijo | Demasiado variable |
| Web + App | $13,999 | Mantener como paquete | Producto definido |
| Aplicaciones Android | Cotización | Mantener como cotización | Correcto |

### 4.2 Justificación

**Por qué esta jerarquía:**

1. **Productos principales = ingresos predecibles y rápidos**
   - Son productos ya desarrollados
   - Se pueden entregar en 3-7 días
   - Requieren menos esfuerzo de venta

2. **Productos secundarios = proyectos de mayor valor pero impredecibles**
   - Requieren análisis detallado
   - Tiempos de entrega variables
   - Mayor riesgo de scope creep

3. **Separar productos clarifica la propuesta**
   - Cliente que busca menú digital no necesita ver E-Commerce PRO
   - Cliente que busca desarrollo completo puede solicitar cotización

---

## 5. RECORRIDO IDEAL DEL VISITANTE

### 5.1 Recorrido actual vs. ideal

**Recorrido actual:**
```
Anuncio → Home → "Diseño Web & Android" → Scrollear → Demos → Precios → Contacto
           ↓
        No sabe qué se vende
           ↓
        Ve demos sin contexto
           ↓
        Ve planes confusos
           ↓
        No está seguro de qué contratar
```

**Recorrido ideal:**
```
Anuncio → Home → "Soluciones digitales para tu negocio" →
          ↓
        Ve claramente: Menú Digital | Agenda Digital | Tarjeta Digital
          ↓
        Hace clic en el que le interesa
          ↓
        Ve demo + qué incluye + qué se personaliza + precio
          ↓
        "Consultar esta solución" o "Ver otras opciones"
          ↓
        Contacto pre-llenado con la solución elegida
```

### 5.2 Puntos de fricción actuales

| Punto | Fricción | Solución |
|-------|----------|----------|
| Home | No explica qué se vende | Añadir sección "Soluciones" antes de demos |
| Precios | Planes mezclados | Separar productos de servicios |
| Demos | Sin contexto de personalización | Añadir "Se adapta a tu negocio" |
| Contacto | Genérico | Mantener pre-llenado actual (correcto) |
| Footer | Servicios no disponibles | Eliminar o marcar como "Próximamente" |

---

## 6. PROPUESTA DE ESTRUCTURA PARA INICIO

### 6.1 Estructura actual (Home.jsx)

```
1. Hero genérico ("Diseño Web & Android")
2. Sección "Explora mis demos"
3. Sección "Cómo trabajamos" (solo menú digital)
4. Sección "Sobre mí"
```

### 6.2 Estructura propuesta

```
1. Hero con propuesta clara
   "Soluciones digitales listas para tu negocio"
   "Menú Digital | Agenda Digital | Tarjeta Digital"
   "Personalizo colores, logo y productos. Entrega en días."

2. Tres tarjetas de productos (NO demos aún)
   Cada tarjeta:
   - Nombre del producto
   - Para qué sirve (1 frase)
   - Para quién es (negocios)
   - Precio
   - CTA: "Ver demo" | "Consultar"

3. Sección "Cómo funciona"
   Explicar el proceso de personalización:
   1. Eliges la solución base
   2. Me compartes tu información (logo, productos, colores)
   3. Personalizo y publico
   4. Recibes tu enlace para compartir

4. Demos destacadas (mantener, pero después de productos)

5. Sección de confianza (opcional)
   "Puedes explorar las demos y juzgar por ti mismo"
   "Contáctame directamente, no hay intermediarios"
   "Asesoría gratuita sin compromiso"

6. Sobre mí (mantener, es honesto)
```

### 6.3 Textos propuestos para el Hero

**Actual (Home.jsx líneas 60-74):**
```jsx
<h1>Diseño Web & Android</h1>
<p>Tu negocio merece estar en internet.</p>
<p>Planes desde $699 MXN</p>
```

**Propuesto:**
```jsx
<h1>Soluciones digitales para tu negocio</h1>
<p>Menú Digital · Agenda Digital · Tarjeta Digital</p>
<p>Productos listos que personalizo con tu logo, colores e información.</p>
<p>Desde $699 MXN · Entrega en días</p>
```

---

## 7. PROPUESTA PARA PRECIOS

### 7.1 Estructura actual (Precios.jsx)

```
Tab 1: Planes Express (Tarjeta, Básico Plus, Agenda)
Tab 2: Planes Premium (E-Commerce, Corporativa, Web+App)
Extra: Aplicaciones Android (cotización)
```

### 7.2 Estructura propuesta

**Opción A: Una sola página con secciones claras**

```
SOLUCIONES DIGITALES (productos personalizables)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│  Menú Digital   │ │ Agenda Digital  │ │Tarjeta Digital  │
│  $3,999 MXN     │ │  $1,499 MXN     │ │   $699 MXN      │
│                 │ │                 │ │                 │
│  Para:          │ │  Para:          │ │  Para:          │
│  Restaurantes,  │ │  Citas: pelu-   │ │  Oficios: elec- │
│  comida, etc.   │ │ querías, etc.   │ │  tricistas, etc.│
│                 │ │                 │ │                 │
│  [Ver demo]     │ │  [Ver demo]     │ │  [Ver demo]     │
│  [Consultar]    │ │  [Consultar]    │ │  [Consultar]    │
└─────────────────┘ └─────────────────┘ └─────────────────┘

¿Necesitas algo más grande?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

E-Commerce completo, Web Corporativa, Apps Android
Estos proyectos se cotizan según tus necesidades.

[Describir mi proyecto para cotización]


QUÉ INCLUYE CADA SOLUCIÓN
━━━━━━━━━━━━━━━━━━━━━━━━

✓ Producto base ya desarrollado
✓ Personalización de colores, logo, textos
✓ Configuración de productos/servicios
✓ Hosting y dominio por 1 año
✓ Soporte técnico
✓ Asesoría para usar tu nueva herramienta

No es desarrollo desde cero. Es un producto que adapto a tu negocio.
```

**Opción B: Dos páginas separadas**

- `/soluciones` → Productos reutilizables (menú, agenda, tarjeta)
- `/desarrollo` → Proyectos de cotización (e-commerce, corporativa, apps)

### 7.3 Cambios específicos en Precios.jsx

**Líneas a modificar:**

1. **Cambiar nombre "Básico Plus" → "Menú Digital con Pedidos por WhatsApp"**
   - Líneas 48-61
   - Añadir: "Basado en la demo de pizzería que puedes explorar"

2. **Eliminar o reubicar planes Premium del tab principal**
   - Líneas 64-102
   - Mover a sección "Proyectos a cotizar" al final

3. **Eliminar "Soporte 24/7"**
   - Línea 56 y otras ocurrencias
   - Reemplazar con "Soporte por WhatsApp y correo" o "Soporte en horario laboral"

4. **Añadir sección "Qué se personaliza"**
   - Nueva sección después de las tarjetas
   - Explicar: colores, logo, productos, categorías, información de contacto

5. **Resolver inconsistencia de precios**
   - Eliminar oferta de $2,999 en ComoTrabajamos.jsx
   - O explicar claramente qué incluye cada precio

---

## 8. PROPUESTA PARA PROYECTOS Y DEMOS

### 8.1 Problemas actuales (Clientes.jsx)

1. Mezcla "proyectos" y "demos" en el título
2. "Tarjeta Digital Oficios" no está en DemosDestacadas
3. "CRM Pagos" y "Mini App World" no tienen path a contratación

### 8.2 Estructura propuesta

**Cambiar título y organización:**

```
DEMOS DE SOLUCIONES
━━━━━━━━━━━━━━━━━━━━

Estos son ejemplos funcionales que puedes explorar.
No son casos de clientes, son productos que personalizo.

┌─────────────────────────────────────────────────────────┐
│  MENÚ DIGITAL CON PEDIDOS POR WHATSAPP                  │
│  Demo: Pizzería                                         │
│  [Explorar demo]  [Ver precio]  [Consultar esta solución]│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  AGENDA DIGITAL PARA CITAS                              │
│  Demo: Podólogo                                         │
│  [Explorar demo]  [Ver precio]  [Consultar esta solución]│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  TARJETA DIGITAL PARA OFICIOS                           │
│  Demo: Oficios                                          │
│  [Explorar demo]  [Ver precio]  [Consultar esta solución]│
└─────────────────────────────────────────────────────────┘


OTROS PROYECTOS DEMOSTRATIVOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Estos proyectos demuestran capacidades adicionales.
No son productos con precio fijo, pero puedo desarrollar algo similar.

- CRM Pagos: Sistema de gestión (cotización)
- Mini App World: Desarrollo para plataformas específicas (cotización)

[Consultar sobre un proyecto personalizado]
```

### 8.3 Cambios específicos

1. **Renombrar página:** "Proyectos y demos" → "Demos y ejemplos"
2. **Mover "Tarjeta Digital Oficios" a DemosDestacadas**
3. **Añadir contexto a cada demo:**
   - "Esta demo usa el plan [X] con [Y] personalizado"
   - "Tu versión tendría tus productos, colores y logo"

4. **Clarificar "Otros proyectos":**
   - Añadir "Disponible bajo cotización"
   - Eliminar si no se ofrece activamente

---

## 9. ELEMENTOS QUE DEBERÍAN ELIMINARSE

### 9.1 Footer - Columna "Otros Servicios"

**Footer.jsx líneas 59-72:**

```jsx
{[
  ["Criptomonedas", "/proximamente"],
  ["Consultoría Digital", "/proximamente"],
  ["Branding", "/proximamente"],
  ["Marketing Digital", "/proximamente"],
  ["SEO", "/proximamente"],
]}
```

**Acción:** Eliminar toda la columna o reemplazar con "¿Buscas otra solución?" → enlace a contacto.

**Justificación:**
- Cinco servicios no disponibles generan desconfianza
- Diluyen el mensaje de los productos reales
- No hay indicación de cuándo estarán disponibles

### 9.2 ComoTrabajamos.jsx - Oferta de $2,999

**Líneas 183-187:**

```jsx
$2,999 MX - Pago único
```

**Acción:** Eliminar o sincronizar con precio en Precios.jsx.

**Justificación:**
- Contradice el precio de $3,999 en "Básico Plus"
- Genera confusión sobre cuál es el precio real
- Si es promoción temporal, debe indicarse claramente

### 9.3 Textos en primera persona del plural

**ComoTrabajamos.jsx línea 37:**
```
"Desarrollamos tu aplicación Android profesional desde cero"
```

**Precios.jsx línea 57:**
```
"✅ Soporte 24/7"
```

**Acción:**
- Cambiar "Desarrollamos" → "Desarrollo"
- Cambiar "Soporte 24/7" → "Soporte por WhatsApp" o "Soporte técnico incluido"

**Justificación:**
- Son inconsistente con "No soy una agencia enorme" (Biografía)
- Generan expectativas no realistas
- Pueden resultar en insatisfacción si no se cumplen

### 9.4 Precios2.jsx (página completa)

**Acción:** Evaluar si es necesaria.

**Justificación:**
- Duplica información de la pestaña "Premium" en Precios.jsx
- No hay enlace claro desde navegación principal
- Confunde la jerarquía de productos

---

## 10. ELEMENTOS QUE DEBERÍAN CONSERVARSE

### 10.1 Sección de Biografía (Biografia.jsx)

**Por qué conservarla:**
- Es honesta ("No soy una agencia enorme")
- Genera confianza al ser transparente
- Establece expectativas correctas

**Mejoras sugeridas:**
- Añadir "Atención directa conmigo, sin intermediarios"
- Mencionar "Respuesta en menos de 24 horas" si es realista

### 10.2 DemosDestacadas con etiqueta "Proyecto demostrativo"

**Por qué conservarla:**
- Evita confusión con clientes reales
- Es honesta sobre el estado del proyecto
- Permite al usuario evaluar la calidad

### 10.3 Formulario de contacto con soluciones pre-llenadas

**Contacto.jsx (ya implementado correctamente):**
- Selector de solución
- Pre-llenado desde URL (`?solucion=pizzeria`)
- Mensaje de confirmación honesto

### 10.4 Botón flotante de WhatsApp

**Por qué conservarlo:**
- Facilita contacto directo
- Es apropiado para el mercado mexicano
- No interfiere con la navegación

### 10.5 Navegación móvil con drawer

**Header.jsx:**
- Implementación correcta para móvil
- Accesible con aria-labels
- No requiere cambios

---

## 11. RIESGOS ANTES DE PUBLICIDAD

### 11.1 Riesgo de confusión

**Si se lanza publicidad con el sitio actual:**

- Usuario hace clic en anuncio de "Menú Digital $2,999"
- Llega a Home que dice "Diseño Web & Android"
- No ve "Menú Digital" en el primer bloque
- Scrollea y ve oferta de $2,999 pero también planes de $3,999
- No está seguro de cuál es el precio real
- Abandona o pregunta por WhatsApp (más trabajo de explicación)

**Probabilidad:** Alta

### 11.2 Riesgo de expectativas no cumplidas

- Usuario lee "Soporte 24/7"
- Tiene problema a las 2am
- Escribe por WhatsApp y no recibe respuesta
- Genera queja o review negativo

**Probabilidad:** Media-Alta

### 11.3 Riesgo de desconfianza

- Usuario ve "Criptomonedas", "Marketing Digital", "SEO" en el footer
- Hace clic y ve "Próximamente"
- Piensa: "¿Esto es real o solo está placeholders?"
- Cuestiona la legitimidad del sitio

**Probabilidad:** Media

### 11.4 Riesgo de preguntas repetitivas

Sin información clara sobre personalización, recibirás las mismas preguntas:
- "¿Puedo cambiar los colores?"
- "¿Puedo poner mi logo?"
- "¿Cuántos productos puedo tener?"
- "¿Cuánto tarda?"
- "¿El precio incluye hosting?"

**Impacto:** Aumenta tiempo de respuesta, reduce eficiencia.

---

## 12. PRIORIDADES

### 12.1 CRÍTICA (antes de cualquier publicidad)

1. **Resolver inconsistencia de precios**
   - Eliminar oferta de $2,999 en ComoTrabajamos.jsx
   - O sincronizar con Precios.jsx
   - Tiempo estimado: 30 minutos

2. **Eliminar "Soporte 24/7"**
   - Reemplazar con "Soporte por WhatsApp"
   - Aplica a todos los planes
   - Tiempo estimado: 20 minutos

3. **Eliminar columna "Otros Servicios" del footer**
   - Reducir a 3 columnas
   - O reemplazar con "¿Buscas otra solución? Contáctame"
   - Tiempo estimado: 15 minutos

4. **Cambiar textos en primera persona del plural**
   - "Desarrollamos" → "Desarrollo"
   - Revisar todos los archivos
   - Tiempo estimado: 30 minutos

### 12.2 ANTES DE PUBLICIDAD

5. **Cambiar "Básico Plus" → "Menú Digital con Pedidos por WhatsApp"**
   - En Precios.jsx
   - Añadir relación con demo de pizzería
   - Tiempo estimado: 20 minutos

6. **Añadir sección "Qué se personaliza" en Precios**
   - Nueva sección explicativa
   - Aplica a los tres productos principales
   - Tiempo estimado: 1 hora

7. **Mover "Tarjeta Digital Oficios" a DemosDestacadas**
   - Actualizar Clientes.jsx
   - Actualizar DemosDestacadas.jsx
   - Tiempo estimado: 30 minutos

8. **Mejorar Hero de Home**
   - Cambiar "Diseño Web & Android" → propuesta más clara
   - Añadir mención de productos principales
   - Tiempo estimado: 45 minutos

9. **Añadir contexto de personalización en demos**
   - "Esta demo puede adaptarse a tu negocio"
   - "Se personaliza con tus productos, colores y logo"
   - Tiempo estimado: 30 minutos

### 12.3 PUEDE ESPERAR

10. **Crear páginas dedicadas por producto**
    - `/menu-digital`
    - `/agenda-digital`
    - `/tarjeta-digital`
    - Tiempo estimado: 4-6 horas

11. **Reorganizar estructura de Precios**
    - Separar productos reutilizables de proyectos a cotizar
    - Posiblemente crear `/soluciones` y `/desarrollo`
    - Tiempo estimado: 3-4 horas

12. **Eliminar Precios2.jsx**
    - Consolidar en una sola página
    - Actualizar navegación
    - Tiempo estimado: 1 hora

13. **Añadir sección de preguntas frecuentes específicas**
    - "¿Puedo cambiar los colores?" → Sí
    - "¿Puedo agregar mi logo?" → Sí
    - "¿Cuántos productos puedo tener?" → Depende del plan
    - Tiempo estimado: 1 hora

14. **Crear documentación interna de proceso**
    - Checklist de personalización
    - Tiempos estimados por tipo de proyecto
    - Plantillas de comunicación
    - Tiempo estimado: 2-3 horas

---

## 13. RESUMEN EJECUTIVO

### ¿Comunica correctamente el modelo de negocio?

**Respuesta: NO completamente.**

El sitio no comunica claramente que se venden productos ya desarrollados que se personalizan. El visitante puede pensar que todo es desarrollo desde cero, lo que genera:

1. **Desconfianza en el precio** ("¿Por qué tan barato si es desarrollo?")
2. **Expectativas incorrectas** sobre tiempos y alcance
3. **Preguntas repetitivas** que podrían evitarse

### ¿Qué cambios tendrían mayor impacto?

1. **Resolver inconsistencia de precios** (CRÍTICO)
2. **Eliminar promesas no realistas** como "Soporte 24/7" (CRÍTICO)
3. **Cambiar Hero para mencionar productos específicos** (ALTO IMPACTO)
4. **Añadir información sobre qué se personaliza** (ALTO IMPACTO)
5. **Eliminar servicios no disponibles del footer** (MEDIO IMPACTO)

### ¿Se recomienda lanzar publicidad con el estado actual?

**NO se recomienda.**

El riesgo de confusión y expectativas no cumplidas es alto. Los cambios críticos (sección 12.1) pueden implementarse en menos de 2 horas y reducirían significativamente el riesgo.

---

## 14. ARCHIVOS AFECTADOS

| Archivo | Cambios propuestos | Prioridad |
|---------|-------------------|-----------|
| `src/Components/ComoTrabajamos.jsx` | Eliminar oferta $2,999 o sincronizar, cambiar "Desarrollamos" → "Desarrollo" | CRÍTICA |
| `src/Pages/Precios.jsx` | Eliminar "Soporte 24/7", cambiar "Básico Plus" → "Menú Digital", añadir sección de personalización | CRÍTICA + ANTES DE PUB |
| `src/Components/Footer.jsx` | Eliminar columna "Otros Servicios" | CRÍTICA |
| `src/Pages/Home.jsx` | Cambiar Hero, añadir sección de productos | ANTES DE PUB |
| `src/Components/DemosDestacadas.jsx` | Añadir contexto de personalización, añadir tarjeta digital | ANTES DE PUB |
| `src/Pages/Clientes.jsx` | Reorganizar demos, eliminar o clarificar proyectos sin precio | ANTES DE PUB |
| `src/Pages/Precios2.jsx` | Evaluar eliminación o consolidación | PUEDE ESPERAR |

---

**Documento preparado por:** Kiro (asistente de desarrollo)  
**Basado en:** Análisis de código fuente actual  
**Sin modificar:** `Contacto.jsx`, `contact.js`, `script.gs`, lógica de cupones, número de WhatsApp
