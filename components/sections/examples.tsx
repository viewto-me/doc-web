import { Box, Typography } from "@mui/material"
import CodeBlock from "@/components/code-block"

export default function Examples() {
  const example1 = `{
  "identify": "true",
  "docsURL": "https://i.imgur.com/C0U8VWS_d.webp?maxwidth=760&fidelity=grand",
  "docsMimeType": "image/jpg",
  "docsId": "1234"
}`

  const example2 = `{
  "identify": "false",
  "options": ["contrato social"],
  "docsURL": "https://i.imgur.com/C0U8VWS_d.webp?maxwidth=760&fidelity=grand",
  "docsMimeType": "image/jpg",
  "docsId": "1234"
}`

  return (
    <Box id="examples" sx={{ mb: 6, scrollMarginTop: "64px" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        Exemplos de Requisição
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: "medium" }}>
        Exemplo 1: Identificação Automática do Documento
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Quando identify é "true", a API identifica automaticamente o tipo de documento.
      </Typography>

      <CodeBlock code={example1} language="json" title="Requisição com identificação automática" />

      <Typography variant="h6" sx={{ mt: 4, mb: 1, fontWeight: "medium" }}>
        Exemplo 2: Análise de Tipo Específico
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Quando identify é "false", o cliente especifica o tipo de documento em options.
      </Typography>

      <CodeBlock code={example2} language="json" title="Requisição com tipo específico" />

      <Typography variant="h5" component="h2" sx={{ mt: 5, mb: 2, fontWeight: "bold" }}>
        Resposta da API
      </Typography>

      <Typography variant="body1" sx={{ fontStyle: "italic", color: "text.secondary" }}>
        A ser detalhado posteriormente, conforme as informações forem fornecidas.
      </Typography>
    </Box>
  )
}
