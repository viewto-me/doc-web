import type { Metadata } from "next"
import DocLayout from "@/components/doc-layout"
import Introduction from "@/components/sections/introduction"
import Authentication from "@/components/sections/authentication"
import Endpoint from "@/components/sections/endpoint"
import Parameters from "@/components/sections/parameters"
import Examples from "@/components/sections/examples"

export const metadata: Metadata = {
  title: "API de Análise de Documentos | Documentação",
  description: "Documentação oficial da API de Análise de Documentos",
}

export default function Home() {
  return (
    <DocLayout>
      <Introduction />
      <Authentication />
      <Endpoint />
      <Parameters />
      <Examples />
    </DocLayout>
  )
}
