import { useNavigate } from "react-router-dom";

export default function PoliticaPrivacidad() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-10">
      <div
        className="w-full max-w-3xl rounded-3xl p-10 relative flex flex-col"
        style={{
          background: "linear-gradient(145deg, #2d2d2d, #1a1a1a)",
          boxShadow:
            "10px 10px 30px #0e0e0e, -10px -10px 30px #2e2e2e, inset 0 1px 1px rgba(255,255,255,0.05), 0 0 0 2px rgba(255,255,255,0.04)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">
          Política de Privacidad
        </h1>

        <section className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <p>
            ¡Hola! Soy <strong>Enrique Vargas</strong>, programador freelance
            apasionado por la tecnología y comprometido con la transparencia.
            Esta política de privacidad está diseñada para explicarte con
            claridad cómo trato tus datos cuando decides confiar en mis servicios
            de desarrollo web, apps o formación tecnológica.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            1. Información que recopilo
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Tu nombre completo</li>
            <li>Correo electrónico</li>
            <li>Teléfono de contacto</li>
            <li>Detalles de tu proyecto o necesidades técnicas</li>
            <li>Datos de facturación (si aplica)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            2. ¿Para qué uso tus datos?
          </h2>
          <p>
            La información que me proporcionas me ayuda a brindarte un servicio
            más eficiente y personalizado. La uso exclusivamente para:
          </p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Contactarte y coordinar el proyecto</li>
            <li>Diseñar propuestas o presupuestos a tu medida</li>
            <li>Enviar avances, entregas o actualizaciones</li>
            <li>Emitir facturación o comprobantes fiscales</li>
            <li>Ofrecer soporte técnico o sesiones de capacitación</li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            3. Protección de tu información
          </h2>
          <p>
            Cuido tus datos con responsabilidad. Utilizo medidas seguras de
            almacenamiento, transmisión y tratamiento de la información. Jamás
            vendo ni comparto tus datos con terceros sin tu autorización
            expresa.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            4. Herramientas externas que puedo usar
          </h2>
          <p>
            En algunos casos empleo servicios de terceros como formularios,
            análisis o pasarelas de pago (por ejemplo, Google Forms o PayPal).
            Pero siempre te informo si eso implica compartir datos, y solo con
            tu consentimiento.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            5. Tus derechos
          </h2>
          <p>Como usuario, puedes en cualquier momento:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>Solicitar acceso a tus datos personales</li>
            <li>Corregir o actualizar información incorrecta</li>
            <li>Pedir la eliminación total de tus datos</li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            6. Cambios a esta política
          </h2>
          <p>
            Si en algún momento actualizo esta política por motivos legales o de
            mejora en mis procesos, la fecha de última modificación será
            claramente visible al final del documento.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400 mt-8">
            7. ¿Tienes dudas o quieres contactarme?
          </h2>
          <p>
            Estoy para ayudarte. Si tienes preguntas sobre esta política o
            necesitas ejercer alguno de tus derechos, puedes escribirme
            directamente:
          </p>
          <p className="text-yellow-400 font-semibold">
            📧 enriquegv078@gmail.com <br />
            📱 WhatsApp: +52 56 1100 1627
          </p>

          <p className="text-xs text-gray-500 mt-10 text-center">
            Última actualización: 18 de julio de 2025
          </p>
        </section>

        {/* Botón cerrar al final */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
