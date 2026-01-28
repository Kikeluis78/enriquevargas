import { jsPDF } from "jspdf";

// ✅ Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Contrato({ datosCliente }) {
  const generarPDF = () => {
    if (!datosCliente) return;

    const doc = new jsPDF("p", "mm", "a4");
<<<<<<< HEAD
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 15;

    // ========== ENCABEZADO ==========
    doc.setFontSize(22);
    doc.setFont(undefined, "bold");
    doc.setTextColor(0, 0, 0);
    doc.text("CONTRATO DE PRESTACIÓN DE SERVICIOS", pageWidth / 2, yPosition, { align: "center" });
    
    yPosition += 10;
    doc.setFontSize(11);
    doc.setFont(undefined, "normal");
    doc.setTextColor(60, 60, 60);
    doc.text("Desarrollo Web y Aplicaciones Android", pageWidth / 2, yPosition, { align: "center" });

    yPosition += 15;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.8);
    doc.line(15, yPosition, pageWidth - 15, yPosition);

    // ========== DATOS DEL CLIENTE ==========
    yPosition += 12;
    doc.setFontSize(13);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, "bold");
    doc.text("DATOS DEL CLIENTE", 15, yPosition);

    yPosition += 10;
    doc.setFont(undefined, "normal");
    doc.setFontSize(10);
    doc.text(`Nombre: ${datosCliente.nombre || "___________________________"}`, 15, yPosition);
    yPosition += 7;
    doc.text(`Negocio: ${datosCliente.negocio || "___________________________"}`, 15, yPosition);
    yPosition += 7;
    doc.text(`Giro: ${datosCliente.giro || "___________________________"}`, 15, yPosition);
    yPosition += 7;
    doc.text(`Teléfono: ${datosCliente.telefono || "___________________________"}`, 15, yPosition);
    yPosition += 7;
    doc.text(`Correo: ${datosCliente.correo || "___________________________"}`, 15, yPosition);
    yPosition += 7;
    doc.text(`Fecha: ${new Date().toLocaleDateString("es-MX")}`, 15, yPosition);

    // ========== TÉRMINOS Y CONDICIONES ==========
    yPosition += 15;
    doc.setFont(undefined, "bold");
    doc.setFontSize(13);
    doc.text("TÉRMINOS Y CONDICIONES", 15, yPosition);

    yPosition += 10;
    doc.setFont(undefined, "normal");
    doc.setFontSize(9);

    const terminos = [
      {
        titulo: "1. ALCANCE DEL SERVICIO",
        contenido: "El Proveedor (Enrique Vargas) se compromete a diseñar y desarrollar una solución digital (PWA, Página Web o Aplicación Android) conforme a las necesidades acordadas con el Cliente."
      },
      {
        titulo: "2. PAQUETES Y PRECIOS",
        contenido: "PAQUETE WEB (PWA/Página Web):\n• Incluye: Diseño responsivo, desarrollo, hosting 1 año\n• Pago 1: 50% al iniciar (no reembolsable)\n• Pago 2: 50% al finalizar\n\nPAQUETE APP ANDROID:\n• Incluye: Desarrollo nativo, publicación Play Store\n• Pago 1: 50% al iniciar (no reembolsable)\n• Pago 2: 50% al finalizar\n\nPAQUETE COMPLETO (Web + App):\n• Incluye: Ambos servicios + hosting 1 año\n• Pago 1: 50% al iniciar (no reembolsable)\n• Pago 2: 50% al finalizar"
      },
      {
        titulo: "3. POLÍTICA DE PAGOS",
        contenido: "• Pago inicial (50%): Requerido para iniciar el proyecto\n• Pago final (50%): Contra entrega del proyecto terminado\n• El proyecto se entrega una vez confirmado el pago completo\n• Métodos aceptados: Transferencia bancaria, PayPal, Stripe"
      },
      {
        titulo: "4. POLÍTICA DE CANCELACIÓN",
        contenido: "• Si el Cliente cancela ANTES de iniciar: Reembolso del 100%\n• Si el Cliente cancela DURANTE el desarrollo: El pago inicial (50%) NO es reembolsable\n• El Proveedor conserva todos los derechos sobre el código desarrollado\n• El Cliente puede solicitar el código incompleto sin costo adicional"
      },
      {
        titulo: "5. PROPIEDAD INTELECTUAL",
        contenido: "• El código fuente es propiedad del Proveedor hasta pago completo\n• Una vez pagado el 100%, el Cliente obtiene licencia de uso perpetuo\n• El Cliente NO puede revender, redistribuir o usar el código para otros proyectos\n• El Proveedor retiene derechos de autor y puede usar el proyecto como referencia"
      },
      {
        titulo: "6. RESPONSABILIDADES DEL PROVEEDOR",
        contenido: "• Entregar el proyecto en los tiempos acordados\n• Mantener comunicación clara sobre avances\n• Realizar ajustes menores dentro del alcance acordado\n• Garantizar funcionamiento técnico correcto\n• Proporcionar capacitación básica de uso (1 sesión)"
      },
      {
        titulo: "7. RESPONSABILIDADES DEL CLIENTE",
        contenido: "• Proporcionar información, contenido y materiales a tiempo\n• Realizar pagos en las fechas acordadas\n• Revisar y aprobar avances del proyecto\n• Cumplir requisitos legales (derechos de imágenes, textos, marcas)\n• Realizar backups regulares del contenido"
      },
      {
        titulo: "8. CAMBIOS Y ADICIONALES",
        contenido: "• Cambios menores dentro del alcance: Incluidos\n• Cambios fuera del alcance acordado: Costo adicional\n• Nuevas funcionalidades: Se cotizarán por separado\n• Cambios después de entrega: Servicio de mantenimiento (costo mensual)"
      },
      {
        titulo: "9. HOSTING Y MANTENIMIENTO",
        contenido: "• Hosting 1 año: Incluido en paquetes web\n• Después del primer año: Costo anual de renovación\n• Mantenimiento: Servicio opcional con costo mensual\n• Actualizaciones de seguridad: Incluidas en mantenimiento"
      },
      {
        titulo: "10. GARANTÍA Y LIMITACIONES",
        contenido: "• Garantía de funcionamiento: 30 días después de entrega\n• El Proveedor no es responsable por:\n  - Pérdida de datos (responsabilidad del Cliente)\n  - Uso indebido de la plataforma\n  - Cambios en políticas de terceros (Google, Apple, etc.)\n  - Problemas de conectividad del Cliente"
      },
      {
        titulo: "11. CONFIDENCIALIDAD",
        contenido: "• Ambas partes se comprometen a mantener confidencialidad\n• El Proveedor puede usar el proyecto como referencia en portafolio\n• El Cliente no puede divulgar detalles técnicos sin autorización"
      },
      {
        titulo: "12. VIGENCIA DEL CONTRATO",
        contenido: "• Este contrato entra en vigor desde la firma de ambas partes\n• Permanece válido hasta la conclusión del proyecto\n• Cláusulas de confidencialidad y propiedad intelectual permanecen indefinidamente"
      }
    ];

    terminos.forEach((termino) => {
      // Verificar si necesitamos nueva página
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 15;
      }

      // Título del término
      doc.setFont(undefined, "bold");
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.text(termino.titulo, 15, yPosition);
      yPosition += 6;

      // Contenido del término
      doc.setFont(undefined, "normal");
      doc.setFontSize(9);
      doc.setTextColor(40, 40, 40);
      const lineas = doc.splitTextToSize(termino.contenido, pageWidth - 30);
      doc.text(lineas, 15, yPosition);
      yPosition += lineas.length * 4.5 + 5;
    });

    // ========== FIRMAS ==========
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 15;
    }

    yPosition += 15;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.8);
    doc.line(15, yPosition, pageWidth - 15, yPosition);

    yPosition += 12;
    doc.setFont(undefined, "bold");
    doc.setFontSize(13);
    doc.setTextColor(0, 0, 0);
    doc.text("ACEPTACIÓN Y FIRMAS", 15, yPosition);

    yPosition += 12;
    doc.setFont(undefined, "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(40, 40, 40);
    doc.text("Ambas partes declaran haber leído y aceptado los términos establecidos en este contrato.", 15, yPosition);

    yPosition += 18;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Firma del Cliente: _____________________________", 15, yPosition);
    doc.text("Firma del Proveedor: _____________________________", pageWidth / 2 + 5, yPosition);

    yPosition += 12;
    doc.text("Nombre: _____________________________", 15, yPosition);
    doc.text("Nombre: Enrique Vargas", pageWidth / 2 + 5, yPosition);

    yPosition += 12;
    doc.text("Fecha: _____________________________", 15, yPosition);
    doc.text(`Fecha: ${new Date().toLocaleDateString("es-MX")}`, pageWidth / 2 + 5, yPosition);

    // ========== GUARDAR PDF ==========
    doc.save(`Contrato_${datosCliente.nombre || "Cliente"}_${new Date().getTime()}.pdf`);
=======

    // Título
    doc.setFontSize(18);
    doc.setTextColor(20, 20, 20);
    doc.text(
      "Contrato de Prestación de Servicios de Desarrollo Web",
      20,
      20
    );

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Datos del cliente
    doc.text(`Nombre del Cliente: ${datosCliente.nombre}`, 20, 40);
    doc.text(`Negocio: ${datosCliente.negocio}`, 20, 50);
    doc.text(`Giro: ${datosCliente.giro}`, 20, 60);
    doc.text(`Teléfono: ${datosCliente.telefono}`, 20, 70);
    doc.text(`Correo: ${datosCliente.correo}`, 20, 80);

    // Contenido del contrato
    const contenido = `
Este Acuerdo de Servicios establece los términos y condiciones entre el Diseñador/Desarrollador (Proveedor) 
y el Cliente (Establecimiento), con respecto al servicio de diseño y desarrollo web.

Cláusulas:

1. Alcance del servicio:
   El Proveedor se compromete a diseñar y desarrollar una página web conforme a las necesidades 
   previamente acordadas con el Cliente.

2. Responsabilidades del Proveedor:
   - Entregar el proyecto en los tiempos establecidos.
   - Mantener comunicación clara y constante sobre los avances.
   - Realizar ajustes menores acordados durante el desarrollo.
   - Garantizar el correcto funcionamiento técnico al momento de la entrega.

3. Responsabilidades del Cliente:
   - Proporcionar información, materiales, logotipos y contenido necesarios en tiempo y forma.
   - Realizar los pagos acordados en las fechas establecidas.
   - Revisar y aprobar los avances del proyecto.
   - Cumplir con los requisitos legales relacionados con el uso de imágenes, textos o marcas.

4. Pagos:
   - El Cliente abonará un anticipo del 50% para iniciar el proyecto.
   - El 50% restante se pagará contra entrega del sitio web terminado.

5. Entrega:
   El proyecto será publicado en internet una vez aprobado y liquidado por el Cliente.

6. Vigencia:
   Este contrato entra en vigor a partir de la fecha de firma por ambas partes y permanecerá válido
   hasta la conclusión del proyecto.

7. Aceptación:
   Ambas partes declaran haber leído y aceptado los términos aquí establecidos.
`;

    doc.text(contenido, 20, 100, { maxWidth: 170, lineHeightFactor: 1.3 });

    // Firmas
    doc.text("Firma del Cliente: __________________________", 20, 250);
    doc.text("Firma del Proveedor: ________________________", 20, 270);

    // Guardar PDF
    doc.save(`Contrato_${datosCliente.nombre}.pdf`);
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
  };

  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        onClick={generarPDF}
        sx={{
<<<<<<< HEAD
          background: "#1a1a1a",
          color: "white",
          fontWeight: 800,
          px: 7,
          py: 2.5,
          borderRadius: 2,
          fontSize: "1.15rem",
          textTransform: "none",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "#000000",
            transform: "translateY(-2px)",
            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        📄 Descargar Contrato
=======
          backgroundColor: "#facc15", // amarillo
          color: "black",
          fontWeight: 600,
          px: 4,
          py: 1.5,
          borderRadius: 2,
          "&:hover": {
            backgroundColor: "#eab308", // amarillo oscuro
          },
        }}
      >
        Descargar Contrato
>>>>>>> 667f29b77d5f478d3953a3784b3b9355338575ad
      </Button>
    </Box>
  );
}
