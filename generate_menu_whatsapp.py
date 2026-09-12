#!/usr/bin/env python3
"""
Genera la imagen del Menú Digital con Pedidos por WhatsApp
Dimensiones: 960x720 (WebP)
Colores: Fondo oscuro, acentos cyan (#00D9FF) y naranja (#FF6B35)
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Dimensiones
WIDTH = 960
HEIGHT = 720

# Colores
BG_DARK = (10, 10, 20)  # #0A0A14
BG_DARKER = (16, 23, 34)  # #101722
CYAN = (0, 217, 255)  # #00D9FF
ORANGE = (255, 107, 53)  # #FF6B35
WHITE = (255, 255, 255)
GRAY_LIGHT = (180, 180, 200)
GRAY_MED = (120, 120, 140)

# Crear imagen
img = Image.new('RGB', (WIDTH, HEIGHT), BG_DARK)
draw = ImageDraw.Draw(img, 'RGBA')

# Intentar cargar fuentes, si no están disponibles, usar default
try:
    font_title = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 28)
    font_subtitle = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 16)
    font_small = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 13)
    font_tiny = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 11)
except:
    font_title = ImageFont.load_default()
    font_subtitle = ImageFont.load_default()
    font_small = ImageFont.load_default()
    font_tiny = ImageFont.load_default()

# Dibujar fondo con gradiente simulado (áreas)
# Zona superior izquierda - smartphone
draw.rectangle([(0, 0), (480, 720)], fill=(14, 18, 28))

# Zona superior derecha - navegador web
draw.rectangle([(480, 0), (960, 720)], fill=(12, 16, 26))

# Línea divisoria sutil
draw.line([(480, 0), (480, 720)], fill=(50, 60, 80), width=2)

# ===== SMARTPHONE (Izquierda) =====
phone_x1, phone_y1 = 30, 80
phone_x2, phone_y2 = 450, 680

# Marco del teléfono
draw.rectangle([(phone_x1, phone_y1), (phone_x2, phone_y2)], outline=CYAN, width=8, fill=(8, 12, 20))

# Pantalla del teléfono
screen_x1, screen_y1 = phone_x1 + 8, phone_y1 + 30
screen_x2, screen_y2 = phone_x2 - 8, phone_y2 - 8
draw.rectangle([(screen_x1, screen_y1), (screen_x2, screen_y2)], fill=(20, 26, 40))

# Notch
draw.rectangle([(180, phone_y1 + 8), (300, phone_y1 + 22)], fill=BG_DARK)

# Contenido del teléfono - Menú de comida
# Título
draw.text((screen_x1 + 12, screen_y1 + 12), "Menú Digital", fill=WHITE, font=font_subtitle)

# Categorías
categories = ["🌮 Tacos", "🍕 Pizzas", "🥤 Bebidas"]
y_pos = screen_y1 + 42
for i, cat in enumerate(categories):
    color = ORANGE if i == 0 else GRAY_LIGHT
    draw.text((screen_x1 + 12, y_pos + i * 28), cat, fill=color, font=font_small)

# Carrito simple
cart_y = screen_y1 + 140
draw.rectangle([(screen_x1 + 12, cart_y), (screen_x2 - 12, cart_y + 85)], outline=CYAN, width=1, fill=(18, 24, 36))

draw.text((screen_x1 + 18, cart_y + 8), "🛒 Carrito", fill=ORANGE, font=font_small)
draw.text((screen_x1 + 18, cart_y + 28), "2x Tacos Al Pastor", fill=GRAY_LIGHT, font=font_tiny)
draw.text((screen_x1 + 18, cart_y + 42), "1x Pizza Grande", fill=GRAY_LIGHT, font=font_tiny)
draw.text((screen_x1 + 18, cart_y + 56), "Total: $280", fill=CYAN, font=font_small)

# Botón WhatsApp en el teléfono
button_y = screen_y2 - 50
draw.rectangle([(screen_x1 + 12, button_y), (screen_x2 - 12, button_y + 40)], fill=ORANGE)
draw.text((screen_x1 + 80, button_y + 8), "Enviar a WhatsApp", fill=WHITE, font=font_small)

# ===== NAVEGADOR WEB (Derecha) =====
browser_x1, browser_y1 = 490, 80
browser_x2, browser_y2 = 930, 680

# Marco del navegador
draw.rectangle([(browser_x1, browser_y1), (browser_x2, browser_y2)], outline=CYAN, width=2, fill=(12, 16, 26))

# Barra de navegación del navegador
draw.rectangle([(browser_x1, browser_y1), (browser_x2, browser_y1 + 35)], fill=(20, 26, 40))
draw.text((browser_x1 + 12, browser_y1 + 8), "🔒 ejemplo.com/menu", fill=GRAY_LIGHT, font=font_tiny)

# Contenido de la web - Grid de productos
content_y = browser_y1 + 50

# Título de la página
draw.text((browser_x1 + 15, content_y), "Nuestro Menú", fill=WHITE, font=font_subtitle)

# Grid de productos (2x2)
products = [
    ("🌮", "Tacos", "$45"),
    ("🍕", "Pizza", "$120"),
    ("🍔", "Burgers", "$65"),
    ("🥗", "Ensalada", "$50"),
]

product_y = content_y + 35
col_width = 110

for i, (emoji, name, price) in enumerate(products):
    col = i % 2
    row = i // 2
    
    x = browser_x1 + 15 + col * col_width
    y = product_y + row * 100
    
    # Caja del producto
    draw.rectangle([(x, y), (x + 95, y + 80)], outline=CYAN, width=1, fill=(18, 24, 36))
    
    # Emoji
    draw.text((x + 35, y + 8), emoji, fill=WHITE, font=font_subtitle)
    
    # Nombre (pequeño)
    draw.text((x + 8, y + 35), name, fill=GRAY_LIGHT, font=font_tiny)
    
    # Precio
    draw.text((x + 12, y + 50), price, fill=ORANGE, font=font_small)

# Resumen del flujo en la parte inferior
summary_y = browser_y2 - 60
draw.rectangle([(browser_x1 + 10, summary_y), (browser_x2 - 10, summary_y + 50)], outline=(100, 180, 200), width=1, fill=(14, 20, 32))

draw.text((browser_x1 + 15, summary_y + 8), "Menú → Carrito → Resumen", fill=CYAN, font=font_tiny)
draw.text((browser_x1 + 15, summary_y + 24), "Envía tu pedido por WhatsApp", fill=ORANGE, font=font_tiny)

# Línea vertical decorativa a los lados
draw.line([(20, 20), (20, 700)], fill=(0, 217, 255), width=2)
draw.line([(940, 20), (940, 700)], fill=(0, 217, 255), width=2)

# Etiqueta en esquina superior izquierda
draw.text((35, 30), "📱 + 🌐 + 💬", fill=CYAN, font=font_small)

# Guardar imagen en WebP
output_path = "/home/garcia/Escritorio/enriquevargas/public/img/menu-whatsapp.webp"
img.save(output_path, 'WebP', quality=90)

print(f"✅ Imagen generada exitosamente")
print(f"📁 Ruta: {output_path}")
print(f"📐 Dimensiones: {WIDTH}x{HEIGHT}px")
print(f"📦 Formato: WebP")

# Obtener tamaño del archivo
file_size = os.path.getsize(output_path)
print(f"💾 Peso: {file_size / 1024:.1f} KB")
