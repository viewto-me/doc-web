// This file contains the raw textual content for the documentation pages.

export const INTRODUCTION_MAIN = `
<p>Bem-vindo à documentação da API viewto.me. Esta API permite extrair informações de vários tipos de documentos.</p>
<h2>Autenticação</h2>
<p>Atualmente, a API não requer autenticação para os endpoints documentados. Isso pode mudar no futuro, portanto, consulte esta documentação para atualizações.</p>
`;
export const INTRODUCTION_CODE = `
<div style="margin-right: 30px;">
<h2>URL Base da API</h2>
<p>Todos os endpoints da API são relativos à seguinte URL base:</p>
<pre><code>https://api.viewto.me</code></pre>
</div>
`;

export const API_STRUCTURE_OVERVIEW_MAIN = `
<p>Esta seção descreve a estrutura geral das requisições para a API viewto.me e os campos comuns que você encontrará.</p>
<div class="custom-callout border-l-4 border-accent p-4 my-6 bg-muted/30 rounded-r-md shadow-md">
  <div class="flex items-start">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3 h-5 w-5 text-accent flex-shrink-0"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <p class="text-sm text-foreground/90">Para exemplos completos de requisição e resposta, consulte a seção <a href="/docs/examples">Exemplos</a>.</p>
  </div>
</div>
`;

export const DOCS_TYPE_CONTENT = `
<h2>docsType</h2>
<p><strong>Tipo:</strong> String (Opcional)</p>
<p>Este campo ajuda a identificar o tipo de documento que está sendo enviado. Não é obrigatório; se <code>docsType</code> não for fornecido, nosso sistema tentará identificar o tipo de documento automaticamente.</p>
<p><strong>Finalidade:</strong> Principalmente para o solicitante especificar o tipo de documento, o que pode ser útil se ele já o souber.</p>
`;

export const DOCS_MIME_TYPE_CONTENT = `
<h2>docsMimeType</h2>
<p><strong>Tipo:</strong> String (Obrigatório)</p>
<p>Especifica o tipo MIME do arquivo que está sendo enviado. Os tipos suportados incluem:</p>
<ul>
  <li><code>image/jpeg</code> - Para arquivos JPEG (.jpeg, .jpg)</li>
  <li><code>image/png</code> - Para arquivos PNG (.png)</li>
  <li><code>image/gif</code> - Para arquivos GIF (.gif)</li>
  <li><code>application/pdf</code> - Para arquivos PDF (.pdf)</li>
</ul>
`;

export const DOCS_ID_CONTENT = `
<h2>docsId</h2>
<p><strong>Tipo:</strong> String | Número (Opcional)</p>
<p>Um identificador para o documento que está sendo enviado. Este campo é de formato livre, permitindo que os clientes usem seu ID preferido para correlacionar as respostas da API com seus registros internos.</p>
`;

export const DOCS_URL_CONTENT = `
<h2>docsURL</h2>
<p><strong>Tipo:</strong> String (Obrigatório)</p>
<p>A URL da qual nossa API acessará e consumirá a imagem ou documento para realizar a extração de informações.</p>
`;

export const DOCUMENTS_OBJECT_MAIN = `
<p><strong>Tipo:</strong> Array de Objetos (Obrigatório)</p>
<p>O campo <code>documents</code> é um array de objetos, onde cada objeto especifica um tipo de documento a ser analisado e as informações a serem extraídas dele. Essa estrutura permite flexibilidade, especialmente quando o tipo exato do documento é desconhecido (ou seja, <code>docsType</code> não é declarado).</p>
<p>Cada objeto no array possui duas chaves:</p>
<ul>
  <li><code>name</code>: (String) O tipo de documento do qual você deseja extrair informações.</li>
  <li><code>options</code>: (Array de Strings) Os campos específicos que você deseja extrair deste tipo de documento.</li>
</ul>
<p>Este design permite que você solicite a extração para múltiplos tipos de documentos potenciais em uma única chamada de API. Se o documento enviado corresponder a um dos <code>name</code>s especificados, as <code>options</code> correspondentes serão usadas para a extração.</p>
`;

export const DOCUMENTS_OBJECT_CODE = `
<h3>Valores 'name' disponíveis:</h3>
<ul>
  <li><code>rg</code> (Registro Geral - Identidade Brasileira)</li>
  <li><code>cnh</code> (Carteira Nacional de Habilitação - CNH Brasileira)</li>
  <li><code>comprovanteResidencia</code> (Comprovante de Residência)</li>
  <li><code>contratoSocial</code> (Contrato Social / Estatuto Social)</li>
  <li><code>ataEleicaoDiretoria</code> (Ata de Eleição da Diretoria)</li>
</ul>
`;


export const OPTIONS_RG_CONTENT = `
<h3>Opções para 'rg'</h3>
<ul>
  <li><code>dataNascimento</code></li>
  <li><code>estadoDocumentoIdentidadeEmitido</code></li>
  <li><code>estadoNascimento</code></li>
  <li><code>filiacaoMae</code></li>
  <li><code>filiacaoPai</code></li>
  <li><code>nacionalidade</code></li>
  <li><code>nomeCompleto</code></li>
  <li><code>numeroCpf</code></li>
  <li><code>numeroDocumentoIdentidade</code></li>
  <li><code>orgaoEmissorDocumentoIdentidade</code></li>
  <li><code>categoriaHabilitacao</code> (Nota: Este parece ser um campo da CNH, listado sob RG no prompt. Incluído para precisão em relação ao prompt.)</li>
  <li><code>cidadeEmissaoCnh</code> (Nota: campo da CNH)</li>
  <li><code>data1aHabilitacao</code> (Nota: campo da CNH)</li>
  <li><code>dataEmissaoCnh</code> (Nota: campo da CNH)</li>
  <li><code>dataValidadeCnh</code> (Nota: campo da CNH)</li>
  <li><code>estadoEmissaoCnh</code> (Nota: campo da CNH)</li>
  <li><code>numeroRegistroCnh</code> (Nota: campo da CNH)</li>
</ul>
`;

export const OPTIONS_CNH_CONTENT = `
<h3>Opções para 'cnh'</h3>
<ul>
  <li><code>nomeCompleto</code></li>
  <li><code>nacionalidade</code></li>
  <li><code>dataNascimento</code></li>
  <li><code>estadoNascimento</code></li>
  <li><code>filiacaoMae</code></li>
  <li><code>filiacaoPai</code></li>
  <li><code>numeroCpf</code></li>
  <li><code>numeroRegistroCnh</code></li>
  <li><code>categoriaHabilitacao</code></li>
  <li><code>cidadeEmissaoCnh</code></li>
  <li><code>estadoEmissaoCnh</code></li>
  <li><code>data1aHabilitacao</code></li>
  <li><code>dataEmissaoCnh</code></li>
  <li><code>dataValidadeCnh</code></li>
</ul>
`;

export const OPTIONS_COMPROVANTE_RESIDENCIA_CONTENT = `
<h3>Opções para 'comprovanteResidencia'</h3>
<ul>
  <li><code>dataEmissao</code></li>
  <li><code>nomeCompleto</code></li>
  <li><code>cepVia</code></li>
  <li><code>cidadeVia</code></li>
  <li><code>complementoVia</code></li>
  <li><code>enderecoCompleto</code></li>
  <li><code>estadoVia</code></li>
  <li><code>nomeVia</code></li>
  <li><code>numeroVia</code></li>
  <li><code>tipoVia</code></li>
</ul>
`;

export const OPTIONS_CONTRATO_SOCIAL_CONTENT = `
<h3>Opções para 'contratoSocial'</h3>
<ul>
  <li><code>atividadesEmpresa</code></li>
  <li><code>contratoConsolidado</code></li>
  <li><li><code>contratoRegistrado</code></li>
  <li><code>dataLimiteMandadoContrato</code></li>
  <li><code>formaRepresentacaoContrato</code></li>
  <li><code>cpfParte</code></li>
  <li><code>dataNascParte</code></li>
  <li><code>cepVia</code></li>
  <li><code>cidadeVia</code></li>
  <li><code>complementoVia</code></li>
  <li><code>enderecoCompleto</code></li>
  <li><code>estadoVia</code></li>
  <li><code>nomeVia</code></li>
  <li><code>numeroVia</code></li>
  <li><code>tipoVia</code></li>
  <li><code>estadoCivilParte</code></li>
  <li><code>nacionalidadeParte</code></li>
  <li><code>nomeParte</code></li>
  <li><code>profissaoParte</code></li>
  <li><code>prazoMandatoContrato</code></li>
  <li><code>tipoAssinaturaContrato</code></li>
  <li><code>vedacoesContrato</code></li>
</ul>
`;

export const OPTIONS_ATA_ELEICAO_DIRETORIA_CONTENT = `
<h3>Opções para 'ataEleicaoDiretoria'</h3>
<ul>
  <li><code>ataRegistrada</code></li>
  <li><code>dataEmissaoAta</code></li>
  <li><code>dataFinalMandato</code></li>
  <li><code>formaRepresentacaoContrato</code></li>
  <li><code>ordemDiaAta</code></li>
  <li><code>cpfParte</code></li>
  <li><code>dataNascParte</code></li>
  <li><code>bairroVia</code></li>
  <li><code>cepVia</code></li>
  <li><code>cidadeVia</code></li>
  <li><code>complementoVia</code></li>
  <li><code>enderecoCompleto</code></li>
  <li><code>estadoVia</code></li>
  <li><code>nomeVia</code></li>
  <li><code>numeroVia</code></li>
  <li><code>tipoVia</code></li>
  <li><code>estadoCivilParte</code></li>
  <li><code>nacionalidadeParte</code></li>
  <li><code>nomeParte</code></li>
  <li><code>profissaoParte</code></li>
  <li><code>prazoMandatoAta</code></li>
  <li><code>tipoAssinaturaContrato</code></li>
</ul>
`;

export const EXAMPLE_REQUEST_WITH_ID_MAIN = `
<p>Exemplo de uma requisição onde o tipo de documento (<code>cnh</code>) é especificado via <code>docsType</code>.</p>
<p>Nota: O exemplo original usava <code>nomeVia</code> e <code>tipoVia</code> para CNH, que são campos típicos de comprovante de residência. Ajustado para campos mais comuns da CNH para este exemplo.</p>
`;
export const EXAMPLE_REQUEST_WITH_ID_CODE = `
<div style="margin-right: 30px;">
<pre><code class="language-json">
{
  "docsType": "cnh",
  "docsMimeType": "image/jpeg",
  "docsId": "12345",
  "documents": [
    {
      "name": "cnh",
      "options": ["nomeCompleto", "numeroRegistroCnh"]
    }
  ],
  "docsURL": "https://placehold.co/450x600.png"
}
</code></pre>
</div>
`;

export const EXAMPLE_REQUEST_WITHOUT_ID_MAIN = `
<p>Exemplo de uma requisição onde <code>docsType</code> não é especificado. A API tentará corresponder o documento com os tipos listados no array <code>documents</code> (<code>cnh</code> ou <code>contratoSocial</code> neste caso).</p>
<p>Nota: O exemplo original usava <code>nomeVia</code> e <code>tipoVia</code> para CNH. Ajustado para campos mais comuns da CNH.</p>
`;
export const EXAMPLE_REQUEST_WITHOUT_ID_CODE = `
<div style="margin-right: 30px;">
<pre><code class="language-json">
{
  "docsMimeType": "image/jpeg",
  "docsId": "12345",
  "documents": [
    {
      "name": "cnh",
      "options": ["nomeCompleto", "numeroCpf"]
    },
    {
      "name": "contratoSocial",
      "options": ["atividadesEmpresa", "contratoRegistrado", "nomeParte"]
    }
  ],
  "docsURL": "https://placehold.co/600x800.png"
}
</code></pre>
</div>
`;

export const QUICKSTART_MAIN = `
<p>Siga estes passos para fazer sua primeira chamada à API:</p>
<ol>
  <li>Escolha uma imagem ou documento PDF que você deseja analisar.</li>
  <li>Envie este documento para uma URL publicamente acessível.</li>
  <li>Construa um corpo de requisição JSON:
    <ul>
      <li>Defina <code>docsURL</code> para a URL do seu documento.</li>
      <li>Defina <code>docsMimeType</code> para o tipo MIME correto (por exemplo, <code>image/jpeg</code> ou <code>application/pdf</code>).</li>
      <li>Decida se você conhece o tipo do documento.
        <ul>
          <li>Si sim, defina <code>docsType</code> (por exemplo, "cnh") e no array <code>documents</code>, adicione um objeto com <code>name</code> correspondendo a <code>docsType</code> e as <code>options</code> desejadas.</li>
          <li>Se não, omita <code>docsType</code>. No array <code>documents</code>, adicione objetos para cada tipo de documento potencial (por exemplo, um para "cnh", um para "rg") com suas respectivas <code>options</code> desejadas.</li>
        </ul>
      </li>
      <li>Opcionalmente, adicione um <code>docsId</code> para sua referência.</li>
    </ul>
  </li>
  <li>Envie uma requisição POST para <code>https://api.viewto.me/extract</code> (assumindo este endpoint, precisa de esclarecimento) com seu corpo JSON e o cabeçalho <code>Content-Type: application/json</code>.</li>
  <li>Inspecione a resposta para dados extraídos.</li>
</ol>
`;

export const QUICKSTART_CODE = `
<div style="margin-right: 30px;">
<p><strong>Exemplo (Requisição POST Genérica):</strong></p>
<pre><code class="language-bash">
curl -X POST https://api.viewto.me/extract \
-H "Content-Type: application/json" \
-d '{
  "docsMimeType": "image/jpeg",
  "docsId": "quickstart-test",
  "documents": [
    {
      "name": "cnh",
      "options": ["nomeCompleto", "numeroCpf", "dataNascimento"]
    }
  ],
  "docsURL": "SUA_URL_DE_DOCUMENTO_PUBLICA_AQUI"
}'
</code></pre>
<p>Substitua <code>SUA_URL_DE_DOCUMENTO_PUBLICA_AQUI</code> pela URL real do seu documento de teste.</p>
</div>
`;

export const ERROR_CODES_CONTENT = `
<h1>Códigos de Erro</h1>
<p>Esta seção detalhará os códigos de status HTTP comuns e as respostas de erro retornadas pela API.</p>
<ul>
  <li><strong>400 Bad Request (Requisição Inválida):</strong> A requisição estava malformada (por exemplo, campos obrigatórios ausentes, JSON inválido). O corpo da resposta pode conter mais detalhes.</li>
  <li><strong>403 Forbidden (Proibido):</strong> A autenticação falhou ou o acesso foi negado (se a autenticação estiver implementada).</li>
  <li><strong>404 Not Found (Não Encontrado):</strong> A <code>docsURL</code> especificada não pôde ser acessada ou o recurso não foi encontrado.</li>
  <li><strong>422 Unprocessable Entity (Entidade Não Processável):</strong> O documento estava acessível, mas não pôde ser processado (por exemplo, arquivo corrompido, variação de formato não suportada).</li>
  <li><strong>500 Internal Server Error (Erro Interno do Servidor):</strong> Ocorreu um erro inesperado em nosso servidor. Por favor, tente novamente mais tarde.</li>
</ul>
<p>Mensagens e códigos de erro específicos no corpo da resposta JSON fornecerão informações mais granulares.</p>
`;

export const BEST_PRACTICES_CONTENT = `
<h1>Melhores Práticas</h1>
<ul>
  <li><strong>Use Especificidade Sempre que Possível:</strong> Se você souber o tipo do documento, fornecer <code>docsType</code> pode levar a um processamento mais rápido e preciso.</li>
  <li><strong>Otimize Imagens:</strong> Para documentos de imagem, garanta que estejam nítidos, bem iluminados e com resolução suficiente. Evite tamanhos de arquivo excessivamente grandes, se possível, sem sacrificar a legibilidade.</li>
  <li><strong>Lide com Tentativas (Retries):</strong> Implemente um mecanismo de nova tentativa com recuo exponencial (exponential backoff) para problemas de rede transitórios ou erros de servidor 5xx.</li>
  <li><strong>URLs de Documentos Seguras:</strong> Se os documentos contiverem informações sensíveis, garanta que <code>docsURL</code> aponte para um local seguro (HTTPS). Considere usar URLs assinadas ou outros mecanismos de acesso temporário se o seu provedor de armazenamento os suportar.</li>
  <li><strong>Valide as Entradas:</strong> Valide os dados do seu lado antes de enviá-los para a API para capturar erros antecipadamente.</li>
  <li><strong>Monitore o Uso da API:</strong> Fique de olho no volume de chamadas da API e nos tempos de resposta.</li>
</ul>
`;

// This used to combine all content for AI, but now getAllDocsContentForAI in documentation.tsx handles it dynamically.
// We keep this structure in case individual pieces are still needed elsewhere, though likely they aren't.
export const DOCUMENTATION_SECTIONS = `
${INTRODUCTION_MAIN}
${INTRODUCTION_CODE}
${API_STRUCTURE_OVERVIEW_MAIN}
${DOCS_TYPE_CONTENT}
${DOCS_MIME_TYPE_CONTENT}
${DOCS_ID_CONTENT}
${DOCS_URL_CONTENT}
${DOCUMENTS_OBJECT_MAIN}
${DOCUMENTS_OBJECT_CODE}
${OPTIONS_RG_CONTENT}
${OPTIONS_CNH_CONTENT}
${OPTIONS_COMPROVANTE_RESIDENCIA_CONTENT}
${OPTIONS_CONTRATO_SOCIAL_CONTENT}
${OPTIONS_ATA_ELEICAO_DIRETORIA_CONTENT}
${EXAMPLE_REQUEST_WITH_ID_MAIN}
${EXAMPLE_REQUEST_WITH_ID_CODE}
${EXAMPLE_REQUEST_WITHOUT_ID_MAIN}
${EXAMPLE_REQUEST_WITHOUT_ID_CODE}
${QUICKSTART_MAIN}
${QUICKSTART_CODE}
${ERROR_CODES_CONTENT}
${BEST_PRACTICES_CONTENT}
`;
