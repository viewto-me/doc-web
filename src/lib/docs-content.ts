
// This file contains the raw textual content for the documentation pages.

export const INTRODUCTION_MAIN = `
<p>Bem-vindo à documentação da API viewto.me!</p>

<p>Nossa API é capaz de analisar dados desestruturados, seja uma conversa de chat, documentos pequenos ou grandes. Também oferecemos extração de dados de forma estruturada, permitindo que os usuários obtenham o máximo de informações tanto de documentos quanto de conversas.</p>

<h2>Autenticação</h2>
<p>Atualmente, a autenticação da API é realizada via JWT (JSON Web Token). No entanto, esta documentação ainda está em construção e, por enquanto, não inclui detalhes sobre o processo de autenticação. Consulte esta página futuramente para atualizações e instruções completas sobre como autenticar suas requisições.</p>
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
<p><strong>Tipo:</strong> String | Número (Obrigatório)</p>
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
  <li><code>nomeCompleto</code></li>
  <li><code>nacionalidade</code></li>
  <li><code>dataNascimento</code></li>
  <li><code>estadoNascimento</code></li>
  <li><code>filiacaoMae</code></li>
  <li><code>filiacaoPai</code></li>
  <li><code>numeroCpf</code></li>
  <li><code>cidadeEmissaoRg</code></li>
  <li><code>estadoEmissaoRg</code></li>
  <li><code>dataEmissaoRg</code></li>
  <li><code>dataValidadeRg</code></li>
  <li><code>orgaoEmissorRg</code></li>
  <li><code>numeroRegistroRg</code></li>
  <li><code>numeroRg</code></li>
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
  <li><code>numeroDocumentoIdentidade</code></li>
  <li><code>orgaoEmissorDocumentoIdentidade</code></li>
  <li><code>estadoDocumentoIdentidadeEmitido</code></li>
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
  <li><code>nomeParte</code></li>
  <li><code>cpfParte</code></li>
  <li><code>dataNascParte</code></li>
  <li><code>estadoCivilParte</code></li>
  <li><code>nacionalidadeParte</code></li>
  <li><code>profissaoParte</code></li>
  <li><code>enderecoTipoVia</code></li>
  <li><code>enderecoNomeVia</code></li>
  <li><code>enderecoNumeroVia</code></li>
  <li><code>enderecoComplementoVia</code></li>
  <li><code>enderecoCidadeVia</code></li>
  <li><code>enderecoEstadoVia</code></li>
  <li><code>enderecoBairroVia</code></li>
  <li><code>enderecoCepVia</code></li>
  <li><code>enderecoCompleto</code></li>
  <li><code>contratoConsolidado</code></li>
  <li><code>tipoAssinaturaContrato</code></li>
  <li><code>formaRepresentacaoContrato</code></li>
  <li><code>prazoMandatoContrato</code></li>
  <li><code>vedacoesContrato</code></li>
  <li><code>atividadesEmpresa</code></li>
  <li><code>contratoRegistrado</code></li>
  <li><code>dataLimiteMandadoContrato</code></li>
</ul>
`;

export const OPTIONS_ATA_ELEICAO_DIRETORIA_CONTENT = `
<h3>Opções para 'ataEleicaoDiretoria'</h3>
<ul>
  <li><code>nomeParte</code></li>
  <li><code>cpfParte</code></li>
  <li><code>dataNascParte</code></li>
  <li><code>estadoCivilParte</code></li>
  <li><code>nacionalidadeParte</code></li>
  <li><code>profissaoParte</code></li>
  <li><code>enderecoTipoVia</code></li>
  <li><code>enderecoNomeVia</code></li>
  <li><code>enderecoNumeroVia</code></li>
  <li><code>enderecoComplementoVia</code></li>
  <li><code>enderecoCidadeVia</code></li>
  <li><code>enderecoEstadoVia</code></li>
  <li><code>enderecoBairroVia</code></li>
  <li><code>enderecoCepVia</code></li>
  <li><code>enderecoCompleto</code></li>
  <li><code>dataEmissaoAta</code></li>
  <li><code>ordemDiaAta</code></li>
  <li><code>tipoAssinaturaContrato</code></li>
  <li><code>formaRepresentacaoContrato</code></li>
  <li><code>prazoMandatoAta</code></li>
  <li><code>dataFinalMandato</code></li>
  <li><code>ataRegistrada</code></li>

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

// CONTENT FOR "Response por Documento" STARTS HERE

export const RESPONSE_CERTIDAO_CASAMENTO_MAIN = `
<h2>Certidão de Casamento</h2>
<p>Campos retornados para Certidão de Casamento:</p>
<ul>
  <li><strong>dataEmissaoCertidao</strong>: Data em formato DD/MM/YYYY da emissão do documento.</li>
  <li><strong>partes</strong>: Array de objetos contendo informações dos cônjuges. Cada objeto pode conter:
    <ul>
      <li><strong>cpfParte</strong>: String (CPF do cônjuge).</li>
      <li><strong>dataNascParte</strong>: String (Data de nascimento do cônjuge no formato DD/MM/YYYY).</li>
      <li><strong>nacionalidadeParte</strong>: String (Nacionalidade do cônjuge).</li>
      <li><strong>nomeParte</strong>: String (Nome completo do cônjuge).</li>
    </ul>
  </li>
  <li><strong>regimeBens</strong>: String indicando o regime de bens do casamento, podendo ser Comunhão Parcial, Comunhão Universal, Separação Total e Participação Final nos Aquestos.</li>
</ul>
`;
export const RESPONSE_CERTIDAO_CASAMENTO_CODE = `
<div style="margin-right: 30px;">
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "dataEmissaoCertidao": "01/01/2023",
  "partes": [
    {
      "cpfParte": "12345678900",
      "dataNascParte": "15/03/1990",
      "nacionalidadeParte": "brasileira", 
      "nomeParte": "MARIA SILVA"
    },
    {
      "cpfParte": "98765432100",
      "dataNascParte": "20/06/1988",
      "nacionalidadeParte": "brasileira",
      "nomeParte": "JOÃO SANTOS"
    }
  ],
  "regimeBens": "Comunhão Parcial de Bens"
}
</code></pre>
</div>
`;

export const RESPONSE_CNH_MAIN = `
<h2>CNH (Carteira Nacional de Habilitação)</h2>
<p>Campos retornados para CNH:</p>
<ul>
  <li><strong>informacoesCarteira</strong>: Objeto contendo dados da CNH.
    <ul>
      <li><strong>categoriaHabilitacao</strong>: String (Ex: "B", "AB").</li>
      <li><strong>cidadeEmissaoCnh</strong>: String (Cidade de emissão da CNH).</li>
      <li><strong>data1aHabilitacao</strong>: String (Data da primeira habilitação no formato DD/MM/YYYY).</li>
      <li><strong>dataEmissaoCnh</strong>: String (Data de emissão da CNH no formato DD/MM/YYYY).</li>
      <li><strong>dataValidadeCnh</strong>: String (Data de validade da CNH no formato DD/MM/YYYY).</li>
      <li><strong>estadoEmissaoCnh</strong>: String (UF de emissão da CNH).</li>
      <li><strong>numeroRegistroCnh</strong>: String (Número de registro da CNH).</li>
    </ul>
  </li>
  <li><strong>informacoesPessoais</strong>: Objeto com dados do condutor.
    <ul>
      <li><strong>dataNascimento</strong>: String (Data de nascimento no formato DD/MM/YYYY).</li>
      <li><strong>estadoDocumentoIdentidadeEmitido</strong>: String (UF de emissão do documento de identidade).</li>
      <li><strong>estadoNascimento</strong>: String (UF de nascimento).</li>
      <li><strong>filiacaoMae</strong>: String (Nome da mãe).</li>
      <li><strong>filiacaoPai</strong>: String (Nome do pai).</li>
      <li><strong>nacionalidade</strong>: String (Nacionalidade).</li>
      <li><strong>nomeCompleto</strong>: String (Nome completo).</li>
      <li><strong>numeroCpf</strong>: String (CPF).</li>
      <li><strong>numeroDocumentoIdentidade</strong>: String (Número do documento de identidade).</li>
      <li><strong>orgaoEmissorDocumentoIdentidade</strong>: String (Órgão emissor do documento de identidade).</li>
    </ul>
  </li>
</ul>
`;
export const RESPONSE_CNH_CODE = `
<div style="margin-right: 30px;">
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "informacoesCarteira": {
    "categoriaHabilitacao": "B",
    "cidadeEmissaoCnh": "SAO PAULO",
    "data1aHabilitacao": "10/01/2015",
    "dataEmissaoCnh": "10/01/2020",
    "dataValidadeCnh": "10/01/2030",
    "estadoEmissaoCnh": "SP",
    "numeroRegistroCnh": "12345678901"
  },
  "informacoesPessoais": {
    "dataNascimento": "15/05/1990",
    "estadoDocumentoIdentidadeEmitido": "SP",
    "estadoNascimento": "SP",
    "filiacaoMae": "MARIA DA SILVA",
    "filiacaoPai": "JOSE DA SILVA",
    "nacionalidade": "BRASILEIRO",
    "nomeCompleto": "PEDRO DA SILVA",
    "numeroCpf": "12345678900",
    "numeroDocumentoIdentidade": "123456789",
    "orgaoEmissorDocumentoIdentidade": "SSP"
  }
}
</code></pre>
</div>
`;

export const RESPONSE_RG_MAIN = `
<h2>RG (Registro Geral)</h2>
<p>Campos retornados para RG:</p>
<ul>
  <li><strong>informacoesPessoais</strong>: Objeto com dados pessoais.
    <ul>
      <li><strong>dataNascimento</strong>: String (Data de nascimento no formato DD/MM/YYYY).</li>
      <li><strong>estadoNascimento</strong>: String (UF de nascimento).</li>
      <li><strong>filiacaoMae</strong>: String (Nome da mãe).</li>
      <li><strong>filiacaoPai</strong>: String (Nome do pai).</li>
      <li><strong>nacionalidade</strong>: String (Nacionalidade, pode incluir cidade e UF).</li>
      <li><strong>nomeCompleto</strong>: String (Nome completo).</li>
      <li><strong>numeroCpf</strong>: String (CPF, se presente no RG).</li>
    </ul>
  </li>
  <li><strong>informacoesRg</strong>: Objeto com dados específicos do RG.
    <ul>
      <li><strong>cidadeEmissaoRg</strong>: String (Cidade de emissão do RG).</li>
      <li><strong>dataEmissaoRg</strong>: String (Data de emissão do RG no formato DD/MM/YYYY).</li>
      <li><strong>dataValidadeRg</strong>: String (Data de validade do RG no formato DD/MM/YYYY, se aplicável).</li>
      <li><strong>estadoEmissaoRg</strong>: String (UF de emissão do RG).</li>
      <li><strong>numeroRegistroRg</strong>: String (Número de registro do RG, pode ser o mesmo que numeroRg).</li>
      <li><strong>numeroRg</strong>: String (Número do RG).</li>
      <li><strong>orgaoEmissorRg</strong>: String (Órgão emissor do RG).</li>
    </ul>
  </li>
</ul>
`;
export const RESPONSE_RG_CODE = `
<div style="margin-right: 30px;">
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "informacoesPessoais": {
    "dataNascimento": "20/03/1995",
    "estadoNascimento": "RJ",
    "filiacaoMae": "ANA OLIVEIRA",
    "filiacaoPai": "CARLOS OLIVEIRA",
    "nacionalidade": "RIO DE JANEIRO - RJ",
    "nomeCompleto": "AMANDA OLIVEIRA",
    "numeroCpf": "98765432100"
  },
  "informacoesRg": {
    "cidadeEmissaoRg": "RIO DE JANEIRO",
    "dataEmissaoRg": "15/06/2015",
    "dataValidadeRg": "15/06/2025",
    "estadoEmissaoRg": "RJ",
    "numeroRegistroRg": "87654321",
    "numeroRg": "87.654.321-0",
    "orgaoEmissorRg": "DETRAN"
  }
}
</code></pre>
</div>
`;

export const RESPONSE_CONTRATO_SOCIAL_MAIN = `
<h2>Contrato Social</h2>
<p>Campos retornados para Contrato Social:</p>
<ul>
  <li><strong>partes</strong>: Array de objetos com informações dos sócios. Cada objeto pode conter:
    <ul>
      <li><strong>nomeParte</strong>: String (Nome completo do sócio).</li>
      <li><strong>cpfParte</strong>: String (CPF do sócio).</li>
      <li><strong>dataNascParte</strong>: String (Data de nascimento do sócio no formato DD/MM/YYYY).</li>
      <li><strong>nacionalidadeParte</strong>: String (Nacionalidade do sócio).</li>
      <li><strong>estadoCivilParte</strong>: String (Estado civil do sócio).</li>
      <li><strong>profissaoParte</strong>: String (Profissão do sócio).</li>
      <li><strong>enderecoTipoVia</strong>: String (Tipo da via, ex: "RUA", "AVENIDA").</li>
      <li><strong>enderecoNomeVia</strong>: String (Nome da via/rua).</li>
      <li><strong>enderecoNumeroVia</strong>: String (Número).</li>
      <li><strong>enderecoComplementoVia</strong>: String (Complemento).</li>
      <li><strong>enderecoBairroVia</strong>: String (Nome do bairro).</li>
      <li><strong>enderecoCidadeVia</strong>: String (Cidade).</li>
      <li><strong>enderecoEstadoVia</strong>: String (UF).</li>
      <li><strong>enderecoCepVia</strong>: String (CEP).</li>
      <li><strong>enderecoCompleto</strong>: String (Endereço completo).</li>
    </ul>
  </li>
  <li><strong>atividadesEmpresa</strong>: Array de strings com as atividades da empresa.</li>
  <li><strong>contratoConsolidado</strong>: Boolean (Indica se o contrato é consolidado).</li>
  <li><strong>contratoRegistrado</strong>: Boolean (Indica se o contrato está registrado).</li>
  <li><strong>tipoAssinaturaContrato</strong>: String (Tipo de assinatura, ex: "conjunta", "isolada").</li>
  <li><strong>formaRepresentacaoContrato</strong>: Array de strings descrevendo a forma de representação.</li>
  <li><strong>prazoMandatoContrato</strong>: String (Prazo do mandato, ex: "determinado", "indeterminado").</li>
  <li><strong>dataLimiteMandadoContrato</strong>: String (Data limite do mandato no formato DD/MM/YYYY).</li>
  <li><strong>vedacoesContrato</strong>: Array de strings com as vedações contratuais.</li>
</ul>
`;
export const RESPONSE_CONTRATO_SOCIAL_CODE = `
<div style="margin-right: 30px;">
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "atividadesEmpresa": [
    "DESENVOLVIMENTO DE SOFTWARE",
    "CONSULTORIA EM TECNOLOGIA"
  ],
  "contratoConsolidado": true,
  "contratoRegistrado": true,
  "dataLimiteMandadoContrato": "01/01/2030",
  "formaRepresentacaoContrato": [
    "A administração será exercida em conjunto"
  ],
  "partes": [
    {
      "cpfParte": "12345678900",
      "dataNascParte": "15/08/1980",
      "enderecoCepVia": "12345678",
      "enderecoCidadeVia": "SAO PAULO",
      "enderecoCompleto": "AV PAULISTA, 1000, SALA 123, SAO PAULO, SP",
      "enderecoEstadoVia": "SP",
      "enderecoNomeVia": "PAULISTA",
      "enderecoNumeroVia": "1000",
      "enderecoTipoVia": "AVENIDA"
      "estadoCivilParte": "CASADO",
      "nacionalidadeParte": "BRASILEIRA",
      "nomeParte": "CARLOS SILVA",
      "profissaoParte": "DIRETOR DE TECNOLOGIA"
    }
  ],
  "prazoMandatoContrato": "determinado",
  "tipoAssinaturaContrato": "conjunta",
  "vedacoesContrato": [
    "Alienação de bens imóveis sem concordância dos sócios"
  ]
}
</code></pre>
</div>
`;

export const RESPONSE_ATA_ELEICAO_DIRETORIA_MAIN = `
<h2>Ata de Eleição da Diretoria</h2>
<p>Campos retornados para Ata de Eleição da Diretoria:</p>
<ul>
  <li><strong>partes</strong>: Array de objetos com informações dos membros eleitos (formato similar ao <code>partes</code> do Contrato Social). Cada objeto pode conter:
    <ul>
      <li><strong>nomeParte</strong>: String (Nome completo do sócio).</li>
      <li><strong>cpfParte</strong>: String (CPF do sócio).</li>
      <li><strong>dataNascParte</strong>: String (Data de nascimento do sócio no formato DD/MM/YYYY).</li>
      <li><strong>nacionalidadeParte</strong>: String (Nacionalidade do sócio).</li>
      <li><strong>estadoCivilParte</strong>: String (Estado civil do sócio).</li>
      <li><strong>profissaoParte</strong>: String (Profissão do sócio).</li>
      <li><strong>enderecoTipoVia</strong>: String (Tipo da via, ex: "RUA", "AVENIDA").</li>
      <li><strong>enderecoNomeVia</strong>: String (Nome da via/rua).</li>
      <li><strong>enderecoNumeroVia</strong>: String (Número).</li>
      <li><strong>enderecoComplementoVia</strong>: String (Complemento).</li>
      <li><strong>enderecoBairroVia</strong>: String (Nome do bairro).</li>
      <li><strong>enderecoCidadeVia</strong>: String (Cidade).</li>
      <li><strong>enderecoEstadoVia</strong>: String (UF).</li>
      <li><strong>enderecoCepVia</strong>: String (CEP).</li>
      <li><strong>enderecoCompleto</strong>: String (Endereço completo).</li>
    </ul>
  </li>
  <li><strong>ataRegistrada</strong>: Boolean (Indica se a ata está registrada).</li>
  <li><strong>dataEmissaoAta</strong>: String (Data de emissão da ata no formato DD/MM/YYYY).</li>
  <li><strong>ordemDiaAta</strong>: Array de strings com as pautas da reunião/ata.</li>
  <li><strong>prazoMandatoAta</strong>: String (Prazo do mandato definido na ata).</li>
  <li><strong>dataFinalMandato</strong>: String (Data final do mandato no formato DD/MM/YYYY).</li>
  <li><strong>tipoAssinaturaContrato</strong>: String (Tipo de assinatura, ex: "isolada", "conjunta").</li>
  <li><strong>formaRepresentacaoContrato</strong>: Array de strings descrevendo a forma de representação contratual.</li>
</ul>
`;
export const RESPONSE_ATA_ELEICAO_DIRETORIA_CODE = `
<div style="margin-right: 30px;">
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "ataRegistrada": true,
  "dataEmissaoAta": "01/03/2023",
  "dataFinalMandato": "01/03/2025",
  "formaRepresentacaoContrato": [
    "Desenvolvimento de Software",
    "Consultoria em TI"
  ],
  "ordemDiaAta": [
    "Eleição da nova diretoria",
    "Definição de metas anuais"
  ],
  "partes": [
    {
      "cpfParte": "12345678900",
      "dataNascParte": "15/08/1980",
      "enderecoCepVia": "12345678",
      "enderecoCidadeVia": "SAO PAULO",
      "enderecoCompleto": "AV PAULISTA, 1000, SALA 123, SAO PAULO, SP",
      "enderecoEstadoVia": "SP",
      "enderecoNomeVia": "PAULISTA",
      "enderecoNumeroVia": "1000",
      "enderecoTipoVia": "AVENIDA"
      "estadoCivilParte": "CASADO",
      "nacionalidadeParte": "BRASILEIRA",
      "nomeParte": "CARLOS SILVA",
      "profissaoParte": "DIRETOR DE TECNOLOGIA"
    }
  ],
  "prazoMandatoAta": "determinado",
  "tipoAssinaturaContrato": "isolada"
}
</code></pre>
</div>
`;

export const RESPONSE_COMPROVANTE_RESIDENCIA_MAIN = `
<h2>Comprovante de Residência</h2>
<p>Campos retornados para Comprovante de Residência:</p>
<ul>
  <li><strong>dataEmissao</strong>: String (Data de emissão do comprovante no formato DD/MM/YYYY).</li>
  <li><strong>endereco</strong>: Objeto contendo detalhes do endereço.
    <ul>
      <li><strong>cepVia</strong>: String (CEP).</li>
      <li><strong>cidadeVia</strong>: String (Cidade).</li>
      <li><strong>complementoVia</strong>: String (Complemento do endereço).</li>
      <li><strong>enderecoCompleto</strong>: String (Endereço completo formatado).</li>
      <li><strong>estadoVia</strong>: String (UF).</li>
      <li><strong>nomeVia</strong>: String (Nome da via/rua).</li>
      <li><strong>numeroVia</strong>: String (Número).</li>
      <li><strong>tipoVia</strong>: String (Tipo da via, ex: "RUA", "AVENIDA").</li>
    </ul>
  </li>
  <li><strong>nomeCompleto</strong>: String (Nome completo da pessoa a quem o comprovante se refere).</li>
</ul>
`;
export const RESPONSE_COMPROVANTE_RESIDENCIA_CODE = `
<div style="margin-right: 30px;">
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "dataEmissao": "01/05/2023",
  "endereco": {
    "cepVia": "04578000",
    "cidadeVia": "SAO PAULO",
    "complementoVia": "APTO 123",
    "enderecoCompleto": "RUA DAS FLORES, 456, APTO 123, SAO PAULO, SP",
    "estadoVia": "SP",
    "nomeVia": "DAS FLORES",
    "numeroVia": "456",
    "tipoVia": "RUA"
  },
  "nomeCompleto": "ANA MARIA SANTOS"
}
</code></pre>
</div>
`;

// CONTENT FOR "Response por Documento" ENDS HERE


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
${RESPONSE_CERTIDAO_CASAMENTO_MAIN}
${RESPONSE_CERTIDAO_CASAMENTO_CODE}
${RESPONSE_CNH_MAIN}
${RESPONSE_CNH_CODE}
${RESPONSE_RG_MAIN}
${RESPONSE_RG_CODE}
${RESPONSE_CONTRATO_SOCIAL_MAIN}
${RESPONSE_CONTRATO_SOCIAL_CODE}
${RESPONSE_ATA_ELEICAO_DIRETORIA_MAIN}
${RESPONSE_ATA_ELEICAO_DIRETORIA_CODE}
${RESPONSE_COMPROVANTE_RESIDENCIA_MAIN}
${RESPONSE_COMPROVANTE_RESIDENCIA_CODE}
`;


