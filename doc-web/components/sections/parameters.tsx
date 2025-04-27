import { Box, Typography } from "@mui/material"
import ParameterTable from "@/components/parameter-table"

export default function Parameters() {
  const requestParameters = [
    {
      name: "identify",
      type: "string",
      required: true,
      description: 'Define se a API deve identificar automaticamente o tipo de documento. Pode ser "true" ou "false".',
    },
    {
      name: "options",
      type: "array",
      required: false,
      description: 'Lista de tipos de documentos a serem analisados. Obrigatório se identify for "false".',
    },
    {
      name: "docsURL",
      type: "string",
      required: true,
      description: "URL do documento a ser analisado.",
    },
    {
      name: "docsMimeType",
      type: "string",
      required: true,
      description: 'Tipo MIME do documento (ex: "image/jpg", "application/pdf").',
    },
    {
      name: "docsId",
      type: "string",
      required: true,
      description: "Identificador único do documento, pode ser o nome do arquivo ou um ID definido pelo cliente.",
    },
  ]

  return (
    <Box id="parameters" sx={{ mb: 6, scrollMarginTop: "64px" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        Parâmetros da Requisição
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        O body da requisição deve ser um objeto JSON com os seguintes campos:
      </Typography>

      <ParameterTable parameters={requestParameters} />

      <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
        Detalhes dos Parâmetros
      </Typography>

      <Typography variant="subtitle1" sx={{ fontWeight: "medium", mt: 3 }}>
        identify:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Se "true", a API identifica automaticamente o tipo de documento e realiza a análise correspondente. Neste
            caso, o campo options não é necessário.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Se "false", o cliente deve especificar o tipo de documento no campo options.
          </Typography>
        </li>
      </ul>

      <Typography variant="subtitle1" sx={{ fontWeight: "medium", mt: 3 }}>
        options:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Um array contendo strings que representam os tipos de documentos a serem analisados. Exemplo: ["contrato
            social"].
          </Typography>
        </li>
        <li>
          <Typography variant="body1">Este campo é obrigatório quando identify é "false".</Typography>
        </li>
      </ul>

      <Typography variant="subtitle1" sx={{ fontWeight: "medium", mt: 3 }}>
        docsURL:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            A URL onde o documento está hospedado. A API baixa o documento desta URL para análise.
          </Typography>
        </li>
      </ul>

      <Typography variant="subtitle1" sx={{ fontWeight: "medium", mt: 3 }}>
        docsMimeType:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            O tipo MIME do documento, que ajuda a API a processar o arquivo corretamente.
          </Typography>
        </li>
      </ul>

      <Typography variant="subtitle1" sx={{ fontWeight: "medium", mt: 3 }}>
        docsId:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Um identificador único para o documento, usado pelo cliente para rastrear qual documento está sendo
            analisado.
          </Typography>
        </li>
      </ul>
    </Box>
  )
}
