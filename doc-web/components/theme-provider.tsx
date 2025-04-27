"use client"

import type React from "react"

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"

const theme = createTheme({
  palette: {
    mode: "light",
  },
})

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
