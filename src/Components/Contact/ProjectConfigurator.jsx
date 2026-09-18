import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Paper, TextField, Typography } from "@mui/material";

const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function ProjectConfigurator({ open, onClose, features, selectedIds, onToggle, onContinue, onExited }) {
  const [query, setQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [expandedDetails, setExpandedDetails] = useState([]);

  const filtered = features.filter((feature) => normalize([feature.nombre, feature.nombreTecnico, feature.descripcion, feature.categoria].join(" ")).includes(normalize(query.trim())));
  const categories = [...new Set(filtered.map((feature) => feature.categoria))];
  const selected = features.filter((feature) => selectedIds.includes(feature.id));
  const toggle = (setter, id) => setter((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);

  return (
    <Dialog TransitionProps={{ onExited }} open={open} onClose={onClose} aria-labelledby="features-title" aria-describedby="features-description" fullWidth maxWidth="md" PaperProps={{ sx: { bgcolor: "#0A0A0A", color: "white", border: "1px solid #00D9FF55", borderRadius: 3, m: { xs: 1, sm: 4 }, width: { xs: "calc(100% - 16px)", sm: "calc(100% - 64px)" }, maxHeight: "90dvh" } }}>
      <DialogTitle id="features-title" sx={{ fontWeight: 700, fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>Funciones que te interesan</DialogTitle>
      <DialogContent dividers sx={{ borderColor: "#374151", px: { xs: 2, sm: 3 } }}>
        <Typography id="features-description" sx={{ color: "#d1d5db", fontSize: "0.9rem", mb: 2 }}>Explora funciones adicionales o avanzadas para tu servicio. Es opcional: puedes cerrar sin elegir y explicarme lo que necesitas con tus palabras.</Typography>
        <Alert severity="info" sx={{ bgcolor: "#10222c", color: "#d1d5db", mb: 2 }}>Las funciones seleccionadas serán revisadas para definir viabilidad, alcance y cotización. Puede requerir servicios externos, cuentas de terceros o costos adicionales.</Alert>
        <TextField fullWidth value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar función..." inputProps={{ "aria-label": "Buscar función" }} sx={{ mb: 2, "& .MuiInputBase-root": { bgcolor: "#1f2937", color: "white" } }} />
        <Typography aria-live="polite" sx={{ color: "#9ca3af", fontSize: "0.85rem", mb: 2 }}>{filtered.length} funciones disponibles{query.trim() ? " para esta búsqueda" : " para este servicio"}</Typography>
        {selected.length > 0 && <Box sx={{ mb: 2, fontSize: "0.85rem", overflowWrap: "anywhere" }}><Typography sx={{ fontSize: "inherit", fontWeight: 600 }}>{selected.length} {selected.length === 1 ? "función seleccionada" : "funciones seleccionadas"}</Typography>{selected.slice(0, 4).map((feature) => <Typography key={feature.id} sx={{ fontSize: "inherit", color: "#d1d5db" }}>✓ {feature.nombre}</Typography>)}{selected.length > 4 && <Typography sx={{ fontSize: "inherit" }}>+ {selected.length - 4} más</Typography>}</Box>}
        {!filtered.length && <Typography sx={{ color: "#d1d5db" }}>No encontramos funciones con esa búsqueda.</Typography>}
        {categories.map((category) => {
          const items = filtered.filter((feature) => feature.categoria === category);
          return <Accordion key={category} expanded={Boolean(query.trim()) || expandedCategories.includes(category)} onChange={() => toggle(setExpandedCategories, category)} disableGutters sx={{ bgcolor: "#111827", color: "white", border: "1px solid #374151", mb: 1, "&:before": { display: "none" } }}>
            <AccordionSummary id={`category-${items[0].id}`} aria-controls={`category-content-${items[0].id}`} expandIcon={<span aria-hidden="true" style={{ color: "#00D9FF" }}>⌄</span>} sx={{ minWidth: 0, "& .MuiAccordionSummary-content": { minWidth: 0 } }}>
              <Box sx={{ minWidth: 0, overflowWrap: "anywhere" }}><Typography component="h3" sx={{ fontSize: "0.95rem", fontWeight: 600, color: "#00D9FF" }}>{category}</Typography><Typography sx={{ fontSize: "0.8rem", color: "#9ca3af" }}>{items.length} {items.length === 1 ? "función" : "funciones"} · {items.filter((feature) => selectedIds.includes(feature.id)).length} seleccionadas</Typography></Box>
            </AccordionSummary>
            <AccordionDetails id={`category-content-${items[0].id}`} sx={{ p: { xs: 1, sm: 2 } }}>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "repeat(2, minmax(0, 1fr))" }, gap: 1.5 }}>
                {items.map((feature) => <Paper key={feature.id} variant="outlined" sx={{ p: 1.5, minWidth: 0, bgcolor: "#0A0A0A", color: "white", borderColor: selectedIds.includes(feature.id) ? "#00D9FF" : "#374151", borderRadius: 2 }}>
                  <FormControlLabel sx={{ m: 0, alignItems: "flex-start", "& .MuiFormControlLabel-label": { pt: 1, fontSize: "0.9rem", overflowWrap: "anywhere" } }} control={<Checkbox checked={selectedIds.includes(feature.id)} onChange={() => onToggle(feature.id)} sx={{ color: "#9ca3af", "&.Mui-checked": { color: "#00D9FF" } }} />} label={feature.nombre} />
                  <Button type="button" size="small" aria-expanded={expandedDetails.includes(feature.id)} aria-controls={`feature-${feature.id}`} onClick={() => toggle(setExpandedDetails, feature.id)} sx={{ display: "block", color: "#60a5fa", textTransform: "none" }}>{expandedDetails.includes(feature.id) ? "Ver menos" : "Ver más"}<span className="sr-only">: {feature.nombre}</span></Button>
                  <Box id={`feature-${feature.id}`} hidden={!expandedDetails.includes(feature.id)} sx={{ mt: 1, color: "#9ca3af", overflowWrap: "anywhere" }}>
                    <Typography sx={{ fontSize: "0.8rem", mb: 1 }}>Nombre técnico: {feature.nombreTecnico}</Typography>
                    <Typography sx={{ fontSize: "0.85rem" }}>{feature.descripcion}</Typography>
                    {feature.notaComercial && <Typography sx={{ fontSize: "0.8rem", mt: 1, color: "#d1d5db" }}>{feature.notaComercial}</Typography>}
                  </Box>
                </Paper>)}
              </Box>
            </AccordionDetails>
          </Accordion>;
        })}
      </DialogContent>
      <DialogActions sx={{ p: 2, justifyContent: "space-between", gap: 1, flexWrap: "wrap" }}>
        <Typography aria-live="polite" sx={{ fontSize: "0.8rem", color: "#9ca3af" }}>{selected.length} {selected.length === 1 ? "función seleccionada" : "funciones seleccionadas"}</Typography>
        <Box sx={{ display: "flex", gap: 1, flexDirection: { xs: "column", sm: "row" }, width: { xs: "100%", sm: "auto" }, "& button": { minHeight: 48 } }}>
          <Button type="button" onClick={onClose} sx={{ color: "#d1d5db", textTransform: "none", flexShrink: 0, "&:hover": { bgcolor: "#1f2937" } }}>Cerrar</Button>
          <Button type="button" onClick={onContinue} sx={{ color: "black", bgcolor: "#00D9FF", textTransform: "none", flexShrink: 0, "&:hover": { bgcolor: "#67e8f9" } }}>Continuar al formulario</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
