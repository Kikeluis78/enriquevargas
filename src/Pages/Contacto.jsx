import { useRef, useState } from "react";
import Swal from "sweetalert2";

// ✅ Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

// ✅ Componentes propios
import Contrato from "../Components/Contrato";
import InfoContrato from "../Components/ImfoContrato";
import Logo from "../Components/Logo";

export default function Contacto() {
  const formRef = useRef(null);
  const [datosCliente, setDatosCliente] = useState(null);

  // 🎨 Estilos de inputs
  const inputStyles = {
    borderRadius: 2,
    bgcolor: "rgba(92,125,190,0.3)", 
    color: "white",
    borderColor: "#3b82f6",
    transition: "all 0.3s ease",
    "&:hover": { borderColor: "#60a5fa" },
    "&.Mui-focused": {
      bgcolor: "rgba(96,165,250,0.15)",
      borderColor: "#60a5fa",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = formRef.current;

    const nombre = formEl["nombre"].value.trim();
    const negocio = formEl["negocio"].value.trim();
    const giro = formEl["giro"].value.trim();
    const telefono = formEl["telefono"].value.trim();
    const correo = formEl["correo"].value.trim();

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

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!isValidEmail(correo)) {
      Swal.fire({
        icon: "error",
        title: "Correo inválido",
        text: "Introduce un correo electrónico válido.",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

    const isValidPhone = (tel) => /^\d{10}$/.test(tel);
    if (!isValidPhone(telefono)) {
      Swal.fire({
        icon: "error",
        title: "Teléfono inválido",
        text: "El número debe tener exactamente 10 dígitos.",
        confirmButtonColor: "#2563EB",
        background: "#1f2937",
        color: "#f9fafb",
      });
      return;
    }

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
          setDatosCliente({ nombre, negocio, giro, telefono, correo });
        }, 900);
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
    <>


      <Box sx={{ minHeight: "100vh", py: 3, }}>
        <Container maxWidth="md">
          {/* Título */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              color: "white",
              mb: 4,
            }}
          >
            <span style={{ color: "#60a5fa" }}>Últimos pasos para</span>{" "}
            <span style={{ color: "#facc15" }}>Contratación</span>
          </Typography>

          {/* Pasos Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mb: 6 }}>
            <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
              {steps.map((step, index) => (
                <Grid key={index} item xs="auto" sx={{ textAlign: "center", position: "relative" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      mx: "auto",
                      borderRadius: "50%",
                      bgcolor: "#3b82f6",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography sx={{ color: "#e5e7eb", fontWeight: 600 }}>
                    {step}
                  </Typography>

                  {index !== steps.length - 1 && (
                    <Divider
                      sx={{
                        width: "100%",
                        bgcolor: "#4b5563",
                        height: 2,
                        position: "absolute",
                        top: 22,
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Pasos Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", gap: 2 }}>
            {steps.map((step, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  bgcolor: "#1f2937",
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "#facc15",
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </Box>
                <Typography sx={{ color: "white", fontWeight: 600 }}>
                  {step}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* InfoContrato */}
          <Box sx={{ mt: 4, mb: 4 }}>
            <InfoContrato />
          </Box>

          {/* Formulario */}
          <Paper
            sx={{
              p: 4,
              backgroundColor: "black",
              border: "2px solid #3b82f6",
              boxShadow: "0px 0px 20px rgba(59,130,246,0.4)",
              borderRadius: 3,
            }}
          >
            <form
              ref={formRef}
              target="dummyFrame"
              action="https://script.google.com/macros/s/AKfycbxRLOBv59HTTmL_zhVDuH-8cCNzZEoNLbDCJIMoS9by8VNLdJREX79DdR3OnerkVFKdPw/exec"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
            >
              <iframe name="dummyFrame" style={{ display: "none" }}></iframe>

              <TextField
                label="Nombre Completo"
                name="nombre"
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField
                label="Nombre del Negocio"
                name="negocio"
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField
                label="Giro del Negocio"
                name="giro"
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField
                label="Teléfono (10 dígitos)"
                name="telefono"
                type="tel"
                fullWidth
                variant="outlined"
                margin="normal"
                required
                inputProps={{ maxLength: 10 }}
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField
                label="Correo Electrónico"
                name="correo"
                type="email"
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              {["nombre", "negocio", "giro", "telefono", "correo"].map((name) => (
                <TextField
                  key={name}
                  label={name === "correo" ? "Correo Electrónico" :
                         name === "negocio" ? "Nombre del Negocio" :
                         name === "giro" ? "Giro del Negocio" : "Nombre"}
                  name={name}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  InputProps={{ sx: inputStyles }}
                  InputLabelProps={{ sx: { color: "white" } }}
                />
              ))}


              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  bgcolor: "#2563eb",
                  color: "white",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#1d4ed8" },
                }}
              >
                Enviar
              </Button>
            </form>
          </Paper>

          {/* Contrato dinámico */}
          {datosCliente && (
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Contrato datosCliente={datosCliente} />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
