import { useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CONTACT_SOLUTIONS, normalizePhone, submitContact, validateContact } from "../utils/contact";
import { WHATSAPP_NUMBER } from "../utils/constants";
import Swal from "sweetalert2";

// ✅ Material UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

export default function Contacto() {
  const formRef = useRef(null);
  const submittingRef = useRef(false);
  const attemptRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedSolution = searchParams.get("solucion");
  const solucion = Object.hasOwn(CONTACT_SOLUTIONS, requestedSolution) ? requestedSolution : "general";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Enrique. Quiero consultar sobre: ${CONTACT_SOLUTIONS[solucion]}.`)}`;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current) return;
    const formEl = formRef.current;
    const values = new FormData(formEl);
    const data = Object.fromEntries(["nombre", "negocio", "telefono", "correo", "necesidad", "cupon"].map((key) => [key, String(values.get(key) || "").trim()]));
    data.telefono = normalizePhone(data.telefono);
    data.solucion = solucion;
    const error = validateContact(data);
    if (error) {
      Swal.fire({ icon: "error", title: "Revisa tu consulta", text: error, background: "#1f2937", color: "#f9fafb" });
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);
    setStatus(null);
    try {
      const fingerprint = JSON.stringify(data);
      // Un reintento sin cambios conserva el identificador para no crear otra fila.
      if (attemptRef.current?.fingerprint !== fingerprint) {
        attemptRef.current = { fingerprint, id: crypto.randomUUID() };
      }
      const result = await submitContact(data, attemptRef.current.id);
      setStatus({ severity: "success", text: `Tu consulta quedó registrada. Referencia: ${result.requestId}. Enrique revisará lo que necesitas para responder por teléfono o WhatsApp. Esto no confirma una contratación ni aplica un descuento.` });
      formEl.reset();
      attemptRef.current = null;
    } catch {
      setStatus({ severity: "warning", text: "No pudimos confirmar el registro. Tus datos siguen en el formulario. Puedes reintentar el envío o contactar por WhatsApp. Mantén esta página abierta para conservar los datos." });
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <>


      <Box sx={{ minHeight: "100vh", py: 3, }}>
        <Container maxWidth="md">
          {/* Título */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              color: "white",
              mb: 4,
            }}
          >
            <span style={{ color: "#60a5fa" }}>Cuéntame qué necesita</span>{" "}
            <span style={{ color: "#facc15" }}>tu negocio</span>
          </Typography>
          <Typography sx={{ color: "#d1d5db", mb: 3 }}>
            Envía una consulta. Revisaré tu idea y te contactaré por teléfono o WhatsApp para definir el alcance. No necesitas firmar ni pagar para preguntar.
          </Typography>

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
              onSubmit={handleSubmit}
              noValidate
            >
              <fieldset disabled={isSubmitting} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
              <TextField select disabled={isSubmitting} label="Solución que te interesa" name="solucion" value={solucion}
                onChange={(event) => setSearchParams((current) => { current.set("solucion", event.target.value); return current; }, { replace: true })}
                fullWidth margin="normal" InputProps={{ sx: inputStyles }} InputLabelProps={{ sx: { color: "white" } }}>
                {Object.entries(CONTACT_SOLUTIONS).map(([value, label]) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
              </TextField>

              <TextField
                label="Nombre Completo"
                name="nombre"
                autoComplete="name"
                inputProps={{ maxLength: 120 }}
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField
                label="Nombre del negocio (opcional)"
                name="negocio"
                autoComplete="organization"
                inputProps={{ maxLength: 160 }}
                fullWidth
                variant="outlined"
                margin="normal"
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
                autoComplete="tel"
                inputProps={{ maxLength: 24 }}
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField
                label="Correo electrónico (opcional)"
                name="correo"
                autoComplete="email"
                inputProps={{ maxLength: 254 }}
                type="email"
                fullWidth
                variant="outlined"
                margin="normal"
                InputProps={{ sx: inputStyles }}
                InputLabelProps={{ sx: { color: "white" } }}
              />

              <TextField label="¿Qué necesitas resolver?" name="necesidad" required fullWidth multiline minRows={4} margin="normal"
                inputProps={{ maxLength: 2000 }} InputProps={{ sx: inputStyles }} InputLabelProps={{ sx: { color: "white" } }} />
              <TextField label="Código promocional (opcional)" name="cupon" fullWidth margin="normal"
                inputProps={{ maxLength: 80 }} InputProps={{ sx: inputStyles }} InputLabelProps={{ sx: { color: "white" } }}
                helperText="Si tienes un código, puedes incluirlo para revisión. Enviar la consulta no aplica un descuento."
                FormHelperTextProps={{ sx: { color: "#d1d5db" } }} />
              <Typography sx={{ color: "#d1d5db", mt: 2 }}>
                Usaré estos datos para atender tu consulta. <Link to="/politica" className="text-[#00D9FF] underline">Consulta la política de privacidad</Link>.
              </Typography>

              <Button
                type="submit"
                disabled={isSubmitting}
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontWeight: 700,
                  background: "linear-gradient(45deg, #00D9FF, #FF6B35)",
                  color: "white",
                  boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #00C4E6, #E55A30)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 30px rgba(0, 217, 255, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {isSubmitting ? "Enviando consulta…" : "Enviar consulta"}
              </Button>
              </fieldset>
              <div role="status" aria-live="polite" className="mt-4">
                {isSubmitting && <Typography sx={{ color: "white" }}>Esperando confirmación del registro…</Typography>}
                {status && <Alert role="presentation" severity={status.severity}>{status.text}</Alert>}
              </div>
              <Button component="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" sx={{ mt: 2, color: "#00D9FF", textTransform: "none" }}>
                Consultar por WhatsApp (nueva pestaña)
              </Button>
            </form>
          </Paper>

        </Container>
      </Box>
    </>
  );
}
