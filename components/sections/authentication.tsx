import { Box, Typography } from "@mui/material"
import CodeBlock from "@/components/code-block"

export default function Authentication() {
  return (
    <Box id="authentication" sx={{ mb: 6, scrollMarginTop: "64px" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        Autenticação
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        A autenticação será realizada via JWT (JSON Web Token). O token deve ser incluído no header da requisição da
        seguinte forma:
      </Typography>

      <CodeBlock code="Authorization: Bearer <seu_token_jwt>" language="http" title="Header de Autenticação" />

      <Typography variant="body2" sx={{ mt: 2, color: "text.secondary", fontStyle: "italic" }}>
        Nota: A autenticação via JWT ainda não está implementada, mas será necessária em futuras versões da API.
      </Typography>
    </Box>
  )
}
