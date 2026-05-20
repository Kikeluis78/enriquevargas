// src/components/Contrato.jsx
import { jsPDF } from "jspdf";

export default function Contrato({ datosCliente }) {
  const generarPDF = () => {
    if (!datosCliente) return;

    const doc = new jsPDF("p", "mm", "a4");
    const marginX = 20;
    const maxWidth = 170;
    const lineHeight = 6;
    let y = 20;

    const writeLine = (text, opts = {}) => {
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.text(line, marginX, y, opts);
        y += lineHeight;
      });
    };

    const skip = (n = 1) => { y += lineHeight * n; };

    // Título
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    writeLine("Contrato de Prestación de Servicios de Desarrollo Web");
    skip();

    // Datos del cliente
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    writeLine(`Nombre del Cliente: ${datosCliente.nombre}`);
    writeLine(`Negocio: ${datosCliente.negocio}`);
    writeLine(`Giro: ${datosCliente.giro}`);
    writeLine(`Teléfono: ${datosCliente.telefono}`);
    writeLine(`Correo: ${datosCliente.correo}`);
    if (datosCliente.cupon && datosCliente.cupon !== "Sin cupón") {
      writeLine(`Cupón aplicado: ${datosCliente.cupon}`);
    }
    skip();

    // Introducción
    writeLine("Este Acuerdo de Servicios establece los términos y condiciones entre el Diseñador/Desarrollador (Proveedor) y el Cliente (Establecimiento), con respecto al servicio de diseño y desarrollo web.");
    skip();

    doc.setFont("helvetica", "bold");
    writeLine("Cláusulas:");
    doc.setFont("helvetica", "normal");
    skip(0.5);

    const clausulas = [
      {
        titulo: "1. Alcance del servicio:",
        items: ["El Proveedor se compromete a diseñar y desarrollar una página web conforme a las necesidades previamente acordadas con el Cliente."],
      },
      {
        titulo: "2. Responsabilidades del Proveedor:",
        items: [
          "- Entregar el proyecto en los tiempos establecidos.",
          "- Mantener comunicación clara y constante sobre los avances.",
          "- Realizar ajustes menores acordados durante el desarrollo.",
          "- Garantizar el correcto funcionamiento técnico al momento de la entrega.",
        ],
      },
      {
        titulo: "3. Responsabilidades del Cliente:",
        items: [
          "- Proporcionar información, materiales, logotipos y contenido necesarios en tiempo y forma.",
          "- Realizar los pagos acordados en las fechas establecidas.",
          "- Revisar y aprobar los avances del proyecto.",
          "- Cumplir con los requisitos legales relacionados con el uso de imágenes, textos o marcas.",
        ],
      },
      {
        titulo: "4. Pagos:",
        items: [
          "- El Cliente abonará un anticipo del 50% para iniciar el proyecto.",
          "- El 50% restante se pagará contra entrega del sitio web terminado.",
        ],
      },
      {
        titulo: "5. Entrega:",
        items: ["El proyecto será publicado en internet una vez aprobado y liquidado por el Cliente."],
      },
      {
        titulo: "6. Vigencia:",
        items: ["Este contrato entra en vigor a partir de la fecha de firma por ambas partes y permanecerá válido hasta la conclusión del proyecto."],
      },
      {
        titulo: "7. Aceptación:",
        items: ["Ambas partes declaran haber leído y aceptado los términos aquí establecidos."],
      },
    ];

    clausulas.forEach(({ titulo, items }) => {
      doc.setFont("helvetica", "bold");
      writeLine(titulo);
      doc.setFont("helvetica", "normal");
      items.forEach((item) => writeLine(`   ${item}`));
      skip(0.5);
    });

    // Firmas con espacio garantizado
    skip();
    if (y > 250) { doc.addPage(); y = 20; }
    writeLine("Firma del Cliente: __________________________");
    skip();
    writeLine("Firma del Proveedor: ________________________");

    doc.save(`Contrato_${datosCliente.nombre}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <button
        onClick={generarPDF}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition"
      >
        Descargar Contrato
      </button>
    </div>
  );
}
