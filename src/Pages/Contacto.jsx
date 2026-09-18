import { useRef, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Box, Button, Container, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { CONTACT_HOURS, CONTACT_SOLUTIONS, buildContactPayload, contactWhatsAppMessage, submitContact, validateContact } from "../utils/contact";
import { BASIC_SOLUTION_ORDER, SOLUTION_DETAILS, WHATSAPP_NUMBER } from "../utils/constants";
import { getAdditionalFeatures } from "../data/projectFeatures";
import { useSolutionConfig } from "../Hooks/useSolutionConfig";
import { useSEOMetadata } from "../Hooks/useSEOMetadata";

const inputStyles = {
  "& .MuiInputBase-root": { color: "white", bgcolor: "#111827" },
  "& .MuiInputLabel-root": { color: "#d1d5db" },
  "& .MuiFormHelperText-root": { color: "#d1d5db" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#64748b" },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#00D9FF" },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": { borderColor: "#fbbf24" },
  "& .MuiFormHelperText-root.Mui-error, & .MuiInputLabel-root.Mui-error": { color: "#fde68a" },
  "& .MuiSvgIcon-root": { color: "#d1d5db" },
  "& .MuiSelect-select": { whiteSpace: "normal", overflowWrap: "anywhere" },
};
const primaryButton = { minHeight: 48, py: 1.5, bgcolor: "#00D9FF", color: "#071019", fontWeight: 700, textTransform: "none", whiteSpace: "normal", "&.Mui-focusVisible": { outline: "2px solid white", outlineOffset: 4 }, "&:hover": { bgcolor: "#67e8f9" } };

function fieldErrorsFor(data) {
  const errors = {};
  if (!data.nombre) errors.nombre = "Escribe tu nombre.";
  else if (data.nombre.length > 120) errors.nombre = "Usa un máximo de 120 caracteres.";
  if (!/^\d{10}$/.test(data.telefono)) errors.telefono = "Ingresa un número de teléfono válido de 10 dígitos.";
  if (data.correo && (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.correo) || data.correo.length > 254)) errors.correo = "Ingresa un correo electrónico válido.";
  for (const [key, limit] of Object.entries({ negocio: 160, cupon: 80, comentario: 1500, horarioOtro: 120 })) {
    if (data[key].length > limit) errors[key] = `Usa un máximo de ${limit} caracteres.`;
  }
  if (data.tipoSolicitud === "orientacion") {
    if (!Object.prototype.hasOwnProperty.call(CONTACT_HOURS, data.horarioPreferido)) errors.horarioPreferido = "Selecciona tu horario preferido.";
    if (data.horarioPreferido === "otro" && !data.horarioOtro.trim()) errors.horarioOtro = "Indica una referencia para el horario.";
  }
  return errors;
}

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const requested = searchParams.get("solucion");
  const selectedSolution = Object.prototype.hasOwnProperty.call(CONTACT_SOLUTIONS, requested) ? requested : "general";
  const isGeneral = selectedSolution === "general";
  const isBasic = BASIC_SOLUTION_ORDER.includes(selectedSolution);
  const detail = SOLUTION_DETAILS[selectedSolution];

  useSEOMetadata({
    title: "Contacto | Solicita tu Solución Digital | Enrique Vargas",
    description: "Cuéntanos sobre tu negocio. Revisamos juntos el alcance, precio final y condiciones antes de comenzar. Atención directa con Enrique.",
    canonical: "https://enriquevargas.com.mx/contacto",
    ogTitle: "Contacto | Enrique Vargas",
    ogDescription: "Cuéntanos sobre tu negocio. Revisamos juntos el alcance, precio final y condiciones antes de comenzar.",
  });

  const { fields, setField, getDraft, setComment, attemptRef } = useSolutionConfig();
  const draft = getDraft(selectedSolution);
  const applicableFeatures = getAdditionalFeatures(selectedSolution);
  const selectedFeatures = applicableFeatures.filter((feature) => draft.ids.includes(feature.id));

  // Construir `answer` compatible con buildContactPayload a partir del contexto
  // La entrada directa conserva la decisión vacía; personalizar también permite comentario sin selección.
  const configurationForPayload = {
    features: selectedFeatures,
    comment: draft.comment || "",
    answer: draft.decidedPackage === "inicial" ? "no" : draft.decidedPackage === "personalizado" ? "si" : "",
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [showValidation, setShowValidation] = useState(false);
  const formRef = useRef(null);
  const fieldErrors = showValidation ? fieldErrorsFor(buildContactPayload(fields, selectedSolution, configurationForPayload)) : {};
  const submittingRef = useRef(false);
  const statusRef = useRef(null);
  const commentRef = useRef(null);

  const handleFieldChange = (event) => {
    setField(event.target.name, event.target.value);
    setStatus(null);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(contactWhatsAppMessage(selectedSolution, selectedFeatures.map((feature) => feature.nombre)))}`;

  const showStatus = (value, focusInvalid = false) => {
    setStatus(value);
    requestAnimationFrame(() => {
      const invalid = focusInvalid ? formRef.current?.querySelector('[aria-invalid="true"]') : null;
      const target = invalid || statusRef.current;
      const details = target?.closest("details");
      if (details) details.open = true;
      target?.focus({ preventScroll: true });
      target?.scrollIntoView({ block: "center", behavior: "instant" });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submittingRef.current) return;
    const data = buildContactPayload(fields, selectedSolution, configurationForPayload);
    const error = validateContact(data);
    if (error) {
      setShowValidation(true);
      const invalidFields = fieldErrorsFor(data);
      showStatus({ severity: "warning", title: "Revisa la información", text: Object.keys(invalidFields).length ? "Revisa los campos marcados antes de enviar." : error }, true);
      return;
    }
    setShowValidation(false);
    submittingRef.current = true;
    setIsSubmitting(true);
    setStatus(null);
    try {
      const fingerprint = JSON.stringify(data);
      if (attemptRef.current?.fingerprint !== fingerprint) attemptRef.current = { fingerprint, id: crypto.randomUUID() };
      const result = await submitContact(data, attemptRef.current.id);
      showStatus({
        severity: "success",
        title: "¡Solicitud enviada!",
        text: "Tu información fue enviada para procesamiento. Te recomiendo conservar la referencia de tu solicitud.",
        reference: result.requestId,
      });
    } catch {
      showStatus({ severity: "error", title: "No pudimos enviar tu solicitud", text: "Tu información sigue en el formulario. Revisa tu conexión e inténtalo nuevamente.", reference: attemptRef.current?.id });
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const textField = (name, label, options = {}) => (
    <TextField key={name} id={`contacto-${name}`} name={name} label={label} value={fields[name]} onChange={handleFieldChange} fullWidth margin="normal" sx={inputStyles} {...options} error={Boolean(fieldErrors[name])} helperText={fieldErrors[name] || options.helperText} />
  );

  const submitLabel = isGeneral ? "Solicitar llamada" : isBasic ? "Enviar solicitud" : "Hablar sobre este proyecto";

  return (
    <Container maxWidth="md" sx={{ px: { xs: 0, sm: 2 }, py: 2, color: "white" }}>
      <Typography component="h1" sx={{ fontSize: { xs: "1.9rem", sm: "2.7rem" }, fontWeight: 700, color: "#00D9FF", mb: 2 }}>
        {isGeneral ? "¿No sabes cuál elegir?" : `Te interesa: ${CONTACT_SOLUTIONS[selectedSolution]}`}
      </Typography>
      <Typography sx={{ color: "#d1d5db", mb: 3 }}>
        {isGeneral ? "Te ayudo a encontrar una opción para tu negocio. Déjame tus datos y coordinamos una llamada para conocer lo que necesitas y orientarte." : "Hablemos de lo que necesitas. Primero revisamos juntos el alcance y el precio final; enviar tu solicitud no genera un cobro."}
      </Typography>

      {detail && <Paper component="section" aria-label="Resumen de la solución" sx={{ p: 2, mb: 3, bgcolor: "#111827", color: "white", border: "1px solid #00D9FF55" }}>
        <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, color: "#00D9FF" }}>{detail.price}{selectedSolution !== "android" && " MXN"}</Typography>
        <Typography sx={{ my: 1 }}>{detail.summary}</Typography>
        <Typography sx={{ fontSize: "0.85rem", color: "#d1d5db" }}>{detail.limit}</Typography>
        {detail.demo && <Button component="a" href={detail.demo} target="_blank" rel="noopener noreferrer" sx={{ color: "#67e8f9", textTransform: "none", minHeight: 44 }}>Probar demo (nueva pestaña)</Button>}
      </Paper>}

      <Box component="ol" aria-label="Cómo avanzamos" sx={{ display: "flex", flexWrap: "wrap", gap: 2, pl: 3, mb: 3, color: "#d1d5db", fontSize: "0.85rem" }}>
        {(isGeneral ? ["Solicita orientación", "Acordamos la llamada", "Revisamos tu necesidad"] : ["Envía tu solicitud", "Definimos el proyecto", "Revisas la propuesta"]).map((step, index) => <li key={step} aria-current={index === 0 ? "step" : undefined}>{step}</li>)}
      </Box>

      <Paper sx={{ p: { xs: 2, sm: 4 }, bgcolor: "#0a0a0a", color: "white", border: "1px solid #3b82f6", borderRadius: 3 }}>
        <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
          <fieldset disabled={isSubmitting} style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }}>
            <TextField select label="Solución de interés" value={selectedSolution} fullWidth margin="normal" sx={inputStyles} onChange={(event) => {
              navigate(`/contacto?solucion=${event.target.value}`, { replace: true });
              setStatus(null);
              setShowValidation(false);
            }}>
              {Object.entries(CONTACT_SOLUTIONS).map(([value, label]) => <MenuItem key={value} value={value} sx={{ whiteSpace: "normal", overflowWrap: "anywhere" }}>{label}</MenuItem>)}
            </TextField>
            {textField("nombre", "Nombre", { required: true, autoComplete: "name", inputProps: { maxLength: 120 } })}
            {textField("telefono", "Teléfono / WhatsApp", { required: true, type: "tel", autoComplete: "tel", inputProps: { maxLength: 24 }, helperText: "Número de México de 10 dígitos; también puedes pegarlo con +52." })}

            {isGeneral ? <>
              {textField("correo", "Correo (opcional)", { type: "email", autoComplete: "email", inputProps: { maxLength: 254 }, helperText: "Si lo proporcionas, intentaremos enviarte una confirmación por correo." })}
              <TextField select required id="contacto-horarioPreferido" error={Boolean(fieldErrors.horarioPreferido)} name="horarioPreferido" label="Horario preferido" value={fields.horarioPreferido} onChange={handleFieldChange} fullWidth margin="normal" sx={inputStyles} helperText={fieldErrors.horarioPreferido || "Es una preferencia de contacto. Acordaremos contigo el horario de la llamada."}>
                {Object.entries(CONTACT_HOURS).map(([value, label]) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
              </TextField>
              {fields.horarioPreferido === "otro" && textField("horarioOtro", "Referencia del horario", { required: true, inputProps: { maxLength: 120 }, placeholder: "Por ejemplo: después de las 6, hora de Ciudad de México" })}
            </> : <>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "repeat(2, minmax(0, 1fr))" }, gap: { xs: 0, sm: 2 } }}>
                {textField("negocio", "Negocio (opcional)", { autoComplete: "organization", inputProps: { maxLength: 160 } })}
                {textField("correo", "Correo (opcional)", { type: "email", autoComplete: "email", inputProps: { maxLength: 254 } })}
              </Box>

              {selectedFeatures.length > 0 && (
                <Box sx={{ my: 3, p: 2, bgcolor: "#111827", border: "1px solid #00D9FF55", borderRadius: 2 }}>
                  <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "#00D9FF", mb: 2 }}>Personalización seleccionada</Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                    {selectedFeatures.slice(0, 4).map((feature) => (
                      <li key={feature.id} style={{ color: "#d1d5db", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                        ✓ {feature.nombre}
                      </li>
                    ))}
                  </Box>
                  {selectedFeatures.length > 4 && (
                    <Typography sx={{ fontSize: "0.85rem", color: "#9ca3af", mb: 2 }}>+ {selectedFeatures.length - 4} funciones más</Typography>
                  )}
                  <Button
                    type="button"
                    onClick={() => navigate(`/precios?solucion=${selectedSolution}&configurar=1`)}
                    sx={{ color: "#67e8f9", textTransform: "none" }}
                  >
                    Editar selección
                  </Button>
                </Box>
              )}

              <TextField id="contacto-comentario" error={Boolean(fieldErrors.comentario)} inputRef={commentRef} label="¿Hay algo más que quieras contarme? (opcional)" value={draft.comment || ""} placeholder="Describe aquí una necesidad, idea o función especial." fullWidth multiline minRows={2} margin="normal" inputProps={{ maxLength: 1500 }} helperText={fieldErrors.comentario || `${(draft.comment || "").length}/1500 caracteres`} sx={inputStyles} onChange={(event) => {
                setComment(selectedSolution, event.target.value);
              }} />

              <Box component="details" sx={{ my: 1, color: "#d1d5db" }}>
                <Box component="summary" sx={{ cursor: "pointer", py: 1.5 }}>Tengo un código promocional</Box>
                {textField("cupon", "Código (opcional)", { inputProps: { maxLength: 80 }, helperText: "Se revisará contigo; enviar la solicitud no aplica un descuento." })}
              </Box>
            </>}

            <Typography sx={{ fontSize: "0.85rem", my: 2, color: "#d1d5db" }}>Usaré estos datos para atender tu consulta. <Link to="/politica" className="text-cyan-300 underline">Consulta la política de privacidad</Link>.</Typography>
            <Button fullWidth type="submit" disabled={isSubmitting} sx={primaryButton}>{isSubmitting ? "Enviando…" : submitLabel}</Button>

            <Button component="a" href={whatsappUrl} target="_blank" rel="noopener noreferrer" sx={{ color: "#67e8f9", textTransform: "none", minHeight: 48, mt: 1, whiteSpace: "normal", width: "100%" }}>Hablar con Enrique por WhatsApp (nueva pestaña)</Button>
          </fieldset>

          <Box ref={statusRef} tabIndex={-1} sx={{ mt: 3, minWidth: 0, overflowWrap: "anywhere", borderRadius: 3, "&:focus-visible": { outline: "2px solid #67e8f9", outlineOffset: 4 } }}>
            {isSubmitting && <Typography role="status" sx={{ color: "#d1d5db" }}>Enviando…</Typography>}
            {status && <Alert severity={status.severity} role={status.severity === "success" ? "status" : "alert"} aria-atomic="true" sx={{
              p: { xs: 2, sm: 3 }, borderRadius: 3, alignItems: "flex-start", border: "1px solid",
              bgcolor: status.severity === "success" ? "#0b2521" : status.severity === "warning" ? "#292313" : "#2c1b23",
              borderColor: status.severity === "success" ? "#34d399" : status.severity === "warning" ? "#d4a745" : "#e99aa8",
              color: "#f3f4f6", "& .MuiAlert-icon": { color: status.severity === "success" ? "#6ee7b7" : status.severity === "warning" ? "#fde68a" : "#fda4af" },
              "& .MuiAlert-message": { minWidth: 0, width: "100%", p: 0 },
            }}>
              <AlertTitle sx={{ fontWeight: 700, fontSize: { xs: "1.05rem", sm: "1.2rem" }, mb: 1 }}>{status.title}</AlertTitle>
              <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{status.text}</Typography>
              {status.reference && <Box sx={{ mt: 2, p: 1.5, bgcolor: "#00000030", border: "1px solid #ffffff26", borderRadius: 2 }}>
                <Typography sx={{ fontSize: "0.75rem", color: "#d1d5db", mb: 0.5 }}>Referencia</Typography>
                <Typography sx={{ fontFamily: "monospace", fontSize: "0.85rem", overflowWrap: "anywhere", userSelect: "all" }}>{status.reference}</Typography>
              </Box>}
              {status.severity === "success" && <Typography sx={{ mt: 2, fontSize: "0.8rem", color: "#cbd5e1", lineHeight: 1.5 }}>El envío de esta solicitud no genera una contratación ni un cobro.</Typography>}
            </Alert>}
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
