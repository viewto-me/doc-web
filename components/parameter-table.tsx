import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

interface Parameter {
  name: string
  type: string
  required: boolean
  description: string
}

interface ParameterTableProps {
  parameters: Parameter[]
  title?: string
}

export default function ParameterTable({ parameters, title }: ParameterTableProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        my: 3,
        border: "1px solid",
        borderColor: "grey.200",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {title && (
        <Typography
          variant="subtitle1"
          sx={{
            px: 2,
            py: 1.5,
            borderBottom: "1px solid",
            borderColor: "grey.200",
            fontWeight: "medium",
          }}
        >
          {title}
        </Typography>
      )}
      <Table sx={{ minWidth: 650 }} aria-label="parameter table">
        <TableHead sx={{ bgcolor: "grey.50" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Campo</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Tipo</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Obrigatório</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parameters.map((param) => (
            <TableRow key={param.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row" sx={{ fontFamily: "monospace", fontWeight: "medium" }}>
                {param.name}
              </TableCell>
              <TableCell sx={{ color: "text.secondary" }}>{param.type}</TableCell>
              <TableCell>{param.required ? "Sim" : "Não"}</TableCell>
              <TableCell>{param.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
