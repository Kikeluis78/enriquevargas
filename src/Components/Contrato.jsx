// src/components/Contrato.jsx
import { jsPDF } from "jspdf";

export default function Contrato({ datosCliente }) {
  const generarPDF = () => {
    if (!datosCliente) return;

    const doc = new jsPDF("p", "mm", "a4");

    // Título
    doc.setFontSize(18);
    doc.setTextColor(20, 20, 20);
    doc.text("Contrato de Prestación de Servicios de Desarrollo Web", 20, 20);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Datos del cliente
    doc.text(`Nombre del Cliente: ${datosCliente.nombre}`, 20, 40);
    doc.text(`Negocio: ${datosCliente.negocio}`, 20, 50);
    doc.text(`Giro: ${datosCliente.giro}`, 20, 60);
    doc.text(`Teléfono: ${datosCliente.telefono}`, 20, 70);
    doc.text(`Correo: ${datosCliente.correo}`, 20, 80);

    // Contenido del contrato (borrador simple)
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
