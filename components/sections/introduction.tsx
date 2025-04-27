import { Box, Typography } from "@mui/material"

export default function Introduction() {
  return (
    <Box id="introduction" sx={{ mb: 6, scrollMarginTop: "64px" }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: "bold" }}>
        Documentação da API de Análise de Documentos
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Esta API permite que os clientes enviem documentos para análise. Dependendo dos parâmetros fornecidos, a API
        pode identificar automaticamente o tipo de documento ou analisar um tipo específico informado pelo cliente.
      </Typography>
    </Box>
  )
}
