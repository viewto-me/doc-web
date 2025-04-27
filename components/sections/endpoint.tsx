import { Box, Typography, Paper } from "@mui/material"

export default function Endpoint() {
  return (
    <Box id="endpoint" sx={{ mb: 6, scrollMarginTop: "64px" }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        Endpoint
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        A URL base para a API é:
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          bgcolor: "grey.50",
          border: "1px solid",
          borderColor: "grey.200",
          borderRadius: "8px",
          fontFamily: "monospace",
          fontSize: "1rem",
        }}
      >
        https://api.viewto.me/docs
      </Paper>

      <Typography variant="body1">
        Todas as requisições devem ser feitas para este endpoint usando o método HTTP POST.
      </Typography>
    </Box>
  )
}
