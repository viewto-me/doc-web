
// This file contains the raw textual content for the documentation pages.

export const INTRODUCTION_CONTENT = `
<p>Bem-vindo à documentação da API viewto.me!</p>
<p>Nossa API é capaz de analisar dados desestruturados, seja uma conversa de chat, documentos pequenos ou grandes. Também oferecemos extração de dados de forma estruturada, permitindo que os usuários obtenham o máximo de informações tanto de documentos quanto de conversas.</p>
<h2>Autenticação</h2>
<p>Para detalhes sobre como autenticar suas requisições à API, por favor, consulte a página <a href="/docs/authentication">Autenticação</a>.</p>
<h2>URL Base da API</h2>
<p>Todos os endpoints da API são relativos à seguinte URL base:</p>
<pre><code>https://api.viewto.me</code></pre>
`;

export const AUTHENTICATION_CONTENT = `
<h1>Como se Autenticar?</h1>
<p>Nós utilizamos JWT (JSON Web Token) como principal método de autenticação para proteger nossas APIs.</p>
<p>O processo de autenticação é dividido em duas etapas principais:</p>
<ol>
  <li><strong>Obtenção do Token de Acesso:</strong> Você precisará fazer uma requisição POST para o endpoint <code>https://api.viewto.me/auth</code>.</li>
  <li><strong>Utilização do Token nas Requisições da API:</strong> Uma vez obtido o token, você o incluirá no cabeçalho <code>Authorization</code> de suas requisições para os demais endpoints da API, como <code>https://api.viewto.me/docs</code>.</li>
</ol>
<h2>1. Obtendo o Token de Acesso</h2>
<p>Para obter o token de acesso, envie uma requisição POST para <code>https://api.viewto.me/auth</code>.</p>
<p>Esta requisição requer os seguintes campos obrigatórios no corpo (body) JSON:</p>
<ul>
  <li><code>clientId</code>: Seu ID de cliente fornecido pela viewto.me.</li>
  <li><code>clientSecret</code>: Seu segredo de cliente fornecido pela viewto.me.</li>
</ul>
<p>A viewto.me fornecerá os valores de <code>clientId</code> e <code>clientSecret</code> necessários para esta etapa.</p>
<h2>2. Utilizando o Token nas Requisições da API</h2>
<p>Após receber uma resposta bem-sucedida da chamada ao endpoint <code>/auth</code>, você encontrará o token de acesso (JWT) no payload da resposta.</p>
<p>Para fazer chamadas autenticadas para outros endpoints da API (por exemplo, <code>https://api.viewto.me/docs</code>), você precisará incluir os seguintes cabeçalhos (headers) em suas requisições:</p>
<ul>
  <li><code>Authorization</code>: O valor deve ser <code>Bearer SEU_TOKEN_DE_ACESSO</code>, onde <code>SEU_TOKEN_DE_ACESSO</code> é o payload JWT obtido na etapa anterior.</li>
  <li><code>x-api-key</code>: Sua chave de API, também fornecida pela viewto.me.</li>
</ul>
<p>O valor da <code>x-api-key</code> também será fornecido pela viewto.me.</p>
<h2>Exemplo de Requisição para /auth</h2>
<p>A seguir, um exemplo de como fazer a requisição para obter o token de acesso usando cURL:</p>
<pre><code class="language-bash">
curl --request POST \\
  --url https://api.viewto.me/auth \\
  --header 'Content-Type: application/json' \\
  --data '{
    "clientId": "SEU_CLIENT_ID",
    "clientSecret": "SEU_CLIENT_SECRET"
  }'
</code></pre>
<p>Lembre-se de substituir <code>SEU_CLIENT_ID</code> e <code>SEU_CLIENT_SECRET</code> pelos seus respectivos valores.</p>
<h2 class="mt-8">Exemplo de Requisição Autenticada para /docs</h2>
<p>Este é um exemplo de como utilizar o token obtido e sua API key para fazer uma requisição POST para o endpoint <code>https://api.viewto.me/docs</code>:</p>
<pre><code class="language-bash">
curl --request POST \\
  --url https://api.viewto.me/docs \\
  --header 'Authorization: Bearer SEU_TOKEN_DE_ACESSO' \\
  --header 'Content-Type: application/json' \\
  --header 'x-api-key: SUA_API_KEY' \\
  --data '{
    "documents": [
        {
            "name": "rg",
            "options": [
                "dataValidadeRg",
                "dataEmissaoRg",
                "dataNascimento",
                "numeroRg",
                "estadoEmissaoRg",
                "filiacaoMae",
                "filiacaoPai",
                "nacionalidade",
                "nomeCompleto",
                "numeroCpf",
                "numeroRegistroRg",
                "orgaoEmissorRg"
            ]
        }
    ],
    "docsType": "rg",
    "docsURL": "https://storage.googleapis.com/publics-svg/contratoImg2.pdf",
    "docsMimeType": "application/pdf",
    "docsId": "1234"
  }'
</code></pre>
<p>Substitua <code>SEU_TOKEN_DE_ACESSO</code> pelo token JWT retornado pela chamada ao <code>/auth</code> e <code>SUA_API_KEY</code> pela sua chave de API.</p>
`;

export const API_STRUCTURE_OVERVIEW_MAIN_CONTENT = `
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
<p><code>image/jpeg</code> - Para arquivos JPEG (.jpeg, .jpg)</p>
<p><code>image/png</code> - Para arquivos PNG (.png)</p>
<p><code>image/gif</code> - Para arquivos GIF (.gif)</p>
<p><code>application/pdf</code> - Para arquivos PDF (.pdf)</p>
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

export const DOCUMENTS_OBJECT_CONTENT = `
<p><strong>Tipo:</strong> Array de Objetos (Obrigatório)</p>
<p>O campo <code>documents</code> é um array de objetos, onde cada objeto especifica um tipo de documento a ser analisado e as informações a serem extraídas dele. Essa estrutura permite flexibilidade, especialmente quando o tipo exato do documento é desconhecido (ou seja, <code>docsType</code> não é declarado).</p>
<p>Cada objeto no array possui duas chaves:</p>
<ul>
  <li><code>name</code>: (String) O tipo de documento do qual você deseja extrair informações.</li>
  <li><code>options</code>: (Array de Strings) Os campos específicos que você deseja extrair deste tipo de documento.</li>
</ul>
<p>Este design permite que você solicite a extração para múltiplos tipos de documentos potenciais em uma única chamada de API. Se o documento enviado corresponder a um dos <code>name</code>s especificados, as <code>options</code> correspondentes serão usadas para a extração.</p>
<h3>Valores 'name' disponíveis:</h3>
<ul>
  <li><code>rg</code> (Registro Geral - Identidade Brasileira)</li>
  <li><code>cnh</code> (Carteira Nacional de Habilitação - CNH Brasileira)</li>
  <li><code>comprovanteResidencia</code> (Comprovante de Residência)</li>
  <li><code>contratoSocial</code> (Contrato Social / Estatuto Social)</li>
  <li><code>ataEleicaoDiretoria</code> (Ata de Eleição da Diretoria)</li>
  <li><code>certidaoCasamento</code> (Certidão de Casamento)</li>
  <li><code>comprovantePagamento</code> (Comprovante de Pagamento)</li>
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

export const OPTIONS_CERTIDAO_CASAMENTO_CONTENT = `
<h3>Opções para 'certidaoCasamento'</h3>
<ul>
  <li><code>dataEmissaoCertidao</code></li>
  <li><code>cpfParte</code></li>
  <li><code>dataNascParte</code></li>
  <li><code>nacionalidadeParte</code></li>
  <li><code>nomeParte</code></li>
  <li><code>regimeBens</code></li>
</ul>
`;

export const OPTIONS_COMPROVANTE_PAGAMENTO_CONTENT = `
<h3>Opções para 'comprovantePagamento'</h3>
<p>As seguintes saídas estão disponíveis para extração de um comprovante de pagamento:</p>
<ul>
  <li><code>nomeTitularPagador</code></li>
  <li><code>cpfTitularPagador</code></li>
  <li><code>numeroBoleto</code></li>
  <li><code>idPagamento</code></li>
  <li><code>dataPagamento</code></li>
  <li><code>dataAgendamentoPagamento</code></li>
  <li><code>valorPagamento</code></li>
  <li><code>pagamentoAgendado</code> (retorna true ou false)</li>
  <li><code>cnpjRecebedor</code></li>
</ul>
`;

export const EXAMPLE_REQUEST_WITH_ID_CONTENT = `
<p>Exemplo de uma requisição onde o tipo de documento (<code>cnh</code>) é especificado via <code>docsType</code>.</p>
<p>Nota: O exemplo original usava <code>nomeVia</code> e <code>tipoVia</code> para CNH, que são campos típicos de comprovante de residência. Ajustado para campos mais comuns da CNH para este exemplo.</p>
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
`;

export const EXAMPLE_REQUEST_WITHOUT_ID_CONTENT = `
<p>Exemplo de uma requisição onde <code>docsType</code> não é especificado. A API tentará corresponder o documento com os tipos listados no array <code>documents</code> (<code>cnh</code> ou <code>contratoSocial</code> neste caso).</p>
<p>Nota: O exemplo original usava <code>nomeVia</code> e <code>tipoVia</code> para CNH. Ajustado para campos mais comuns da CNH.</p>
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
`;

export const QUICKSTART_CONTENT = `
<p>Siga estes passos para fazer sua primeira chamada à API:</p>
<ol>
  <li>Obtenha suas credenciais de API (<code>clientId</code>, <code>clientSecret</code>, <code>x-api-key</code>) e um token de acesso conforme descrito na seção <a href="/docs/authentication">Autenticação</a>.</li>
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
  <li>Envie uma requisição POST para o endpoint desejado (ex: <code>https://api.viewto.me/docs</code>) com seu corpo JSON e os cabeçalhos de autenticação (<code>Authorization: Bearer SEU_TOKEN</code> e <code>x-api-key: SUA_API_KEY</code>) e o cabeçalho <code>Content-Type: application/json</code>.</li>
  <li>Inspecione a resposta para dados extraídos.</li>
</ol>
<p><strong>Exemplo (Requisição POST Genérica para /docs):</strong></p>
<pre><code class="language-bash">
# Primeiro, obtenha o token (veja a seção Autenticação)
# Assumindo que você tem SEU_TOKEN_DE_ACESSO e SUA_API_KEY

curl --request POST \\
  --url https://api.viewto.me/docs \\
  --header 'Authorization: Bearer SEU_TOKEN_DE_ACESSO' \\
  --header 'x-api-key: SUA_API_KEY' \\
  --header 'Content-Type: application/json' \\
  --data '{
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
<p>Substitua <code>SUA_URL_DE_DOCUMENTO_PUBLICA_AQUI</code>, <code>SEU_TOKEN_DE_ACESSO</code> e <code>SUA_API_KEY</code> pelos valores reais.</p>
`;

export const ERROR_CODES_CONTENT = `
<h1>Códigos de Erro</h1>
<p>Esta seção detalhará os códigos de status HTTP comuns e as respostas de erro retornadas pela API.</p>
<ul>
  <li><strong>400 Bad Request (Requisição Inválida):</strong> A requisição estava malformada (por exemplo, campos obrigatórios ausentes, JSON inválido). O corpo da resposta pode conter mais detalhes.</li>
  <li><strong>401 Unauthorized (Não Autorizado):</strong> O token de acesso está ausente, é inválido ou expirou, ou a <code>x-api-key</code> está ausente ou é inválida. Verifique a página de <a href="/docs/authentication">Autenticação</a>.</li>
  <li><strong>403 Forbidden (Proibido):</strong> Embora autenticado, o cliente não tem permissão para acessar o recurso solicitado.</li>
  <li><strong>404 Not Found (Não Encontrado):</strong> A <code>docsURL</code> especificada não pôde ser acessada ou o recurso/endpoint da API não foi encontrado.</li>
  <li><strong>422 Unprocessable Entity (Entidade Não Processável):</strong> O documento estava acessível, mas não pôde ser processado (por exemplo, arquivo corrompido, variação de formato não suportada).</li>
  <li><strong>500 Internal Server Error (Erro Interno do Servidor):</strong> Ocorreu um erro inesperado em nosso servidor. Por favor, tente novamente mais tarde.</li>
</ul>
<p>Mensagens e códigos de erro específicos no corpo da resposta JSON fornecerão informações mais granulares.</p>
`;

export const BEST_PRACTICES_CONTENT = `
<h1>Melhores Práticas</h1>
<ul>
  <li><strong>Gerenciamento Seguro de Credenciais:</strong> Armazene seu <code>clientSecret</code> e <code>x-api-key</code> de forma segura. Nunca os exponha no código do lado do cliente. Tokens de acesso (JWTs) também devem ser tratados com cuidado.</li>
  <li><strong>Use Especificidade Sempre que Possível:</strong> Se você souber o tipo do documento, fornecer <code>docsType</code> pode levar a um processamento mais rápido e preciso.</li>
  <li><strong>Otimize Imagens:</strong> Para documentos de imagem, garanta que estejam nítidos, bem iluminados e com resolução suficiente. Evite tamanhos de arquivo excessivamente grandes, se possível, sem sacrificar a legibilidade.</li>
  <li><strong>Lide com Tentativas (Retries):</strong> Implemente um mecanismo de nova tentativa com recuo exponencial (exponential backoff) para problemas de rede transitórios ou erros de servidor 5xx.</li>
  <li><strong>URLs de Documentos Seguras:</strong> Se os documentos contiverem informações sensíveis, garanta que <code>docsURL</code> aponte para um local seguro (HTTPS). Considere usar URLs assinadas ou outros mecanismos de acesso temporário se o seu provedor de armazenamento os suportar.</li>
  <li><strong>Valide as Entradas:</strong> Valide os dados do seu lado antes de enviá-los para a API para capturar erros antecipadamente.</li>
  <li><strong>Monitore o Uso da API:</strong> Fique de olho no volume de chamadas da API e nos tempos de resposta.</li>
</ul>
`;

export const RESPONSE_CERTIDAO_CASAMENTO_CONTENT = `
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
`;

export const RESPONSE_CNH_CONTENT = `
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
`;

export const RESPONSE_RG_CONTENT = `
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
`;

export const RESPONSE_CONTRATO_SOCIAL_CONTENT = `
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
      "enderecoBairroVia": "CENTRO",
      "enderecoCepVia": "12345678",
      "enderecoCidadeVia": "SAO PAULO",
      "enderecoCompleto": "AV PAULISTA, 1000, SALA 123, CENTRO, SAO PAULO, SP, 12345678",
      "enderecoComplementoVia": "SALA 123",
      "enderecoEstadoVia": "SP",
      "enderecoNomeVia": "PAULISTA",
      "enderecoNumeroVia": "1000",
      "enderecoTipoVia": "AVENIDA",
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
`;

export const RESPONSE_ATA_ELEICAO_DIRETORIA_CONTENT = `
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
      "enderecoBairroVia": "CENTRO",
      "enderecoCepVia": "12345678",
      "enderecoCidadeVia": "SAO PAULO",
      "enderecoCompleto": "AV PAULISTA, 1000, SALA 123, CENTRO, SAO PAULO, SP, 12345678",
      "enderecoComplementoVia": "SALA 123",
      "enderecoEstadoVia": "SP",
      "enderecoNomeVia": "PAULISTA",
      "enderecoNumeroVia": "1000",
      "enderecoTipoVia": "AVENIDA",
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
`;

export const RESPONSE_COMPROVANTE_RESIDENCIA_CONTENT = `
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
`;

export const RESPONSE_COMPROVANTE_PAGAMENTO_CONTENT = `
<h2>Comprovante de Pagamento</h2>
<p>Campos retornados para Comprovante de Pagamento:</p>
<ul>
  <li><strong>nomeTitularPagador</strong>: String (Nome completo do titular pagador).</li>
  <li><strong>cpfTitularPagador</strong>: String (CPF do titular pagador).</li>
  <li><strong>numeroBoleto</strong>: String (Número da linha digitável do boleto, se aplicável).</li>
  <li><strong>idPagamento</strong>: String (Identificador único da transação de pagamento).</li>
  <li><strong>dataPagamento</strong>: String (Data em que o pagamento foi efetuado ou será efetuado, no formato DD/MM/YYYY).</li>
  <li><strong>dataAgendamentoPagamento</strong>: String (Data em que o pagamento foi agendado, no formato DD/MM/YYYY. Pode ser igual à dataPagamento se não for agendado).</li>
  <li><strong>valorPagamento</strong>: String (Valor do pagamento, formatado com vírgula como separador decimal).</li>
  <li><strong>pagamentoAgendado</strong>: Boolean (Indica se o pagamento foi agendado para uma data futura).</li>
  <li><strong>cnpjRecebedor</strong>: String (CNPJ da entidade recebedora do pagamento).</li>
</ul>
<p>Exemplo de resposta:</p>
<pre><code class="language-json">
{
  "nomeTitularPagador": "JOÃO SANTOS",
  "cpfTitularPagador": "01234567890",
  "numeroBoleto": "84630000001046003690000000000009362762129",
  "idPagamento": "40BEC287709EBF18",
  "dataPagamento": "05/06/2025",
  "dataAgendamentoPagamento": "05/06/2025",
  "valorPagamento": "85,45",
  "pagamentoAgendado": true,
  "cnpjRecebedor": "76535764000143"
}
</code></pre>
`;

export const ACCESS_BUCKET_INTRO_MAIN_CONTENT = `
<h1>Acesso ao Bucket</h1>
<p>Esta seção descreve como configurar o acesso aos seus buckets de armazenamento em nuvem para que a API viewto.me possa ler os documentos que você deseja processar.</p>
<p>No momento, o único provedor de armazenamento em nuvem suportado é o AWS S3.</p>
`;

export const ACCESS_BUCKET_AWS_S3_CONTENT = `
<h2>Permitindo Acesso ao AWS S3</h2>
<p>Siga os passos abaixo para configurar as permissões necessárias para que a API viewto.me possa ler documentos de dentro do seu bucket S3.</p>
<h3>1. Abra o AWS CloudShell</h3>
<p>Acesse o CloudShell no console da AWS clicando em: <a href="https://console.aws.amazon.com/cloudshell" target="_blank" rel="noopener noreferrer">https://console.aws.amazon.com/cloudshell</a>.</p>
<h3>2. Crie um Usuário IAM para a API viewto.me</h3>
<p>Execute o seguinte comando no CloudShell para criar um usuário dedicado para a viewto.me:</p>
<pre><code class="language-bash">aws iam create-user --user-name viewto-me</code></pre>
<h3>3. Conceda Permissões de Leitura ao Usuário</h3>
<p>Atribua a política <code>AmazonS3ReadOnlyAccess</code> ao usuário recém-criado. Isso permitirá que a viewto.me apenas leia objetos do seu bucket S3, sem permissões de escrita ou exclusão.</p>
<pre><code class="language-bash">aws iam attach-user-policy --user-name viewto-me --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess</code></pre>
<h3>4. Crie Chaves de Acesso para o Usuário</h3>
<p>Gere um par de chaves de acesso (Access Key ID e Secret Access Key) para o usuário <code>viewto-me</code>:</p>
<pre><code class="language-bash">aws iam create-access-key --user-name viewto-me</code></pre>
<p>O console exibirá uma resposta JSON contendo as chaves. Guarde essas informações com segurança, pois a <code>SecretAccessKey</code> não poderá ser visualizada novamente.</p>
<p>O payload da resposta será semelhante a este:</p>
<pre><code class="language-json">
{
    "AccessKey": {
        "UserName": "viewto-me",
        "AccessKeyId": "ACCESS_KEY_ID_GERADA",
        "Status": "Active",
        "SecretAccessKey": "SECRET_ACCESS_KEY_GERADA",
        "CreateDate": "AAAA-MM-DDTHH:MM:SS+00:00"
    }
}
</code></pre>
<p><strong>Importante:</strong> Copie todo este payload JSON.</p>
<h3>5. Compartilhe as Chaves de Acesso com a viewto.me</h3>
<p>Para compartilhar as credenciais de forma segura conosco, siga estes passos:</p>
<ol>
  <li>Copie todo o payload JSON gerado no passo anterior.</li>
  <li>Acesse nosso portal One Time Secret: <a href="https://ots.viewto.me/" target="_blank" rel="noopener noreferrer">https://ots.viewto.me/</a>.</li>
  <li>Cole o payload JSON completo no campo “Informação secreta”.</li>
  <li>No campo “Expire in”, mude o tempo de expiração para <strong>3 dias</strong>.</li>
  <li>Clique em “Criar segredo!”.</li>
  <li>Envie o link gerado pelo One Time Secret para o seu contato na viewto.me.</li>
</ol>
<p>Após recebermos e configurarmos as chaves, você poderá utilizar a funcionalidade de leitura de documentos diretamente do seu bucket S3.</p>
`;

export const DOCUMENTATION_SECTIONS = `
${INTRODUCTION_CONTENT}
${AUTHENTICATION_CONTENT}
${API_STRUCTURE_OVERVIEW_MAIN_CONTENT}
${DOCS_TYPE_CONTENT}
${DOCS_MIME_TYPE_CONTENT}
${DOCS_ID_CONTENT}
${DOCS_URL_CONTENT}
${DOCUMENTS_OBJECT_CONTENT}
${OPTIONS_RG_CONTENT}
${OPTIONS_CNH_CONTENT}
${OPTIONS_COMPROVANTE_RESIDENCIA_CONTENT}
${OPTIONS_CONTRATO_SOCIAL_CONTENT}
${OPTIONS_ATA_ELEICAO_DIRETORIA_CONTENT}
${OPTIONS_CERTIDAO_CASAMENTO_CONTENT}
${OPTIONS_COMPROVANTE_PAGAMENTO_CONTENT}
${EXAMPLE_REQUEST_WITH_ID_CONTENT}
${EXAMPLE_REQUEST_WITHOUT_ID_CONTENT}
${QUICKSTART_CONTENT}
${ERROR_CODES_CONTENT}
${BEST_PRACTICES_CONTENT}
${RESPONSE_CERTIDAO_CASAMENTO_CONTENT}
${RESPONSE_CNH_CONTENT}
${RESPONSE_RG_CONTENT}
${RESPONSE_CONTRATO_SOCIAL_CONTENT}
${RESPONSE_ATA_ELEICAO_DIRETORIA_CONTENT}
${RESPONSE_COMPROVANTE_RESIDENCIA_CONTENT}
${RESPONSE_COMPROVANTE_PAGAMENTO_CONTENT}
${ACCESS_BUCKET_INTRO_MAIN_CONTENT}
${ACCESS_BUCKET_AWS_S3_CONTENT}
`;

    
