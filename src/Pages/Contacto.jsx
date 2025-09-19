import { useRef, useState } from "react";
import Swal from "sweetalert2";
import Contrato from "../Components/Contrato";
import InfoContrato from "../Components/ImfoContrato";
import Logo from "../Components/Logo";

export default function Contacto() {
  const formRef = useRef(null);
  const [datosCliente, setDatosCliente] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = formRef.current;

    const nombre = formEl["nombre"].value.trim();
    const negocio = formEl["negocio"].value.trim();
    const giro = formEl["giro"].value.trim();
    const telefono = formEl["telefono"].value.trim();
    const correo = formEl["correo"].value.trim();

    // Validar campos vacíos
    if (!nombre || !negocio || !giro || !telefono || !correo) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos antes de enviar.",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    // Validar correo
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!isValidEmail(correo)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Introduce un correo electrónico válido (ej. usuario@dominio.com).",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    // Validar teléfono
    const isValidPhone = (tel) => /^\d{10}$/.test(tel);
    if (!isValidPhone(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Teléfono inválido",
        text: "El número debe tener exactamente 10 dígitos (solo números).",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    // Spinner y envío
    Swal.fire({
      title: "Enviando...",
      allowOutsideClick: false,
      showConfirmButton: false,
      background: "#1f2937",
      color: "#f9fafb",
      didOpen: () => {
        Swal.showLoading();
        setTimeout(() => {
          formEl.submit();
          Swal.fire({
            icon: "success",
            title: "Datos enviados",
            text: "Tus datos fueron enviados exitosamente.",
            confirmButtonColor: "#2563EB",
            background: "#1f2937",
            color: "#f9fafb",
          });

          formEl.reset();

          // Guardar datos para generar el contrato
          setDatosCliente({ nombre, negocio, giro, telefono, correo });
        }, 800);
      },
    });
  };

  const steps = [
    "Registra tus datos",
    "Firma tu contrato",
    "50% de anticipo",
    "Revisa y apruebas",
    "Lo ves en internet",
    "Liquidas",
  ];

  return (
    <div>
      <Logo />

      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="text-blue-400">Últimos pasos para</span>{" "}
          <span className="text-yellow-400">Contratación</span>
        </h1>

        {/* Pasos */}
        <div className="w-full max-w-4xl mb-10">
          {/* Desktop: horizontal */}
          <div className="hidden md:flex justify-between items-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center mb-2">
                  {index + 1}
                </div>
                <span className="text-gray-200 font-semibold">{step}</span>
                {index !== steps.length - 1 && (
                  <div className="flex-1 h-1 bg-gray-600 mt-4 mx-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical cards */}
          <div className="md:hidden flex flex-col gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white rounded-xl p-4 flex items-center gap-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <InfoContrato />

        {/* Formulario */}
        <form
          ref={formRef}
          target="dummyFrame"
          action="https://script.google.com/macros/s/AKfycbxRLOBv59HTTmL_zhVDuH-8cCNzZEoNLbDCJIMoS9by8VNLdJREX79DdR3OnerkVFKdPw/exec"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-black border-2 border-blue-500 rounded-xl shadow-lg shadow-blue-500/50 w-full max-w-md p-6 space-y-4"
          noValidate
        >
          <iframe name="dummyFrame" style={{ display: "none" }}></iframe>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-full px-4 py-3 bg-black border border-blue-500 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />

          <input
            type="text"
            name="negocio"
            placeholder="Nombre del Negocio"
            className="w-full px-4 py-3 bg-black border border-blue-500 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />

          <input
            type="text"
            name="giro"
            placeholder="Giro del Negocio"
            className="w-full px-4 py-3 bg-black border border-blue-500 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />

          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            className="w-full px-4 py-3 bg-black border border-blue-500 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />

          <input
            type="text"
            name="correo"
            placeholder="Correo Electrónico"
            className="w-full px-4 py-3 bg-black border border-blue-500 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Enviar
          </button>
        </form>

        {/* Contrato dinámico */}
        {datosCliente && <Contrato datosCliente={datosCliente} />}
      </div>
    </div>
  );
}
