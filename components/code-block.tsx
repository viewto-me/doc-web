"use client"

import { useState } from "react"
import { Box, IconButton, Paper, Typography } from "@mui/material"
import { Copy, Check } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = "json", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        my: 3,
        border: "1px solid",
        borderColor: "grey.200",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {title && (
        <Box
          sx={{
            px: 2,
            py: 1,
            borderBottom: "1px solid",
            borderColor: "grey.200",
            bgcolor: "grey.50",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      )}
      <Box sx={{ position: "relative" }}>
        <IconButton
          size="small"
          onClick={handleCopy}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "background.paper",
            "&:hover": { bgcolor: "grey.100" },
            zIndex: 1,
          }}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </IconButton>
        <SyntaxHighlighter
          language={language}
          style={materialLight}
          customStyle={{
            margin: 0,
            padding: "16px",
            borderRadius: 0,
            fontSize: "14px",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Paper>
  )
}
