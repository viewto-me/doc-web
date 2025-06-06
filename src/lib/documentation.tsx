
import type { ReactNode } from 'react';
import * as Content from './docs-content';

export interface DocPage {
  id: string;
  title: string; 
  path: string;
  categoryTitle?: string; 
  mainContent: string | (() => ReactNode); 
  children?: DocPage[];
  keywords?: string[];
}

const createContentComponent = (htmlString: string): (() => ReactNode) => {
  // eslint-disable-next-line react/no-danger
  const HtmlContentRenderer = () => <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  HtmlContentRenderer.displayName = 'HtmlContentRenderer'; 
  return HtmlContentRenderer;
};

const ensureRenderable = (content?: string | (() => ReactNode)): (() => ReactNode) | undefined => {
  if (typeof content === 'string') {
    return createContentComponent(content);
  }
  return content; 
};

export const documentationTree: DocPage[] = [
  {
    id: 'introduction',
    title: 'Introdução',
    path: '/docs/introduction',
    categoryTitle: 'Primeiros Passos',
    mainContent: Content.INTRODUCTION_CONTENT,
    keywords: ['introducao', 'boas-vindas', 'url base', 'autenticacao', 'api'],
  },
  {
    id: 'quickstart',
    title: 'Guia de Início Rápido',
    path: '/docs/quickstart',
    categoryTitle: 'Primeiros Passos',
    mainContent: Content.QUICKSTART_CONTENT,
    keywords: ['quickstart', 'inicio rapido', 'primeiros passos', 'primeira chamada', 'tutorial'],
  },
  {
    id: 'authentication',
    title: 'Autenticação',
    path: '/docs/authentication',
    categoryTitle: 'Primeiros Passos',
    mainContent: Content.AUTHENTICATION_CONTENT,
    keywords: ['autenticacao', 'jwt', 'token', 'auth', 'client id', 'client secret', 'api key', 'seguranca'],
  },
  {
    id: 'api-structure',
    title: 'Estrutura da API',
    path: '/docs/api-structure',
    categoryTitle: 'Guia da API',
    mainContent: Content.API_STRUCTURE_OVERVIEW_MAIN_CONTENT,
    keywords: ['api', 'estrutura', 'requisicao', 'campos'],
    children: [
      {
        id: 'docs-type',
        title: 'docsType',
        path: '/docs/api-structure/docs-type',
        categoryTitle: 'Campos da Requisição',
        mainContent: Content.DOCS_TYPE_CONTENT,
        keywords: ['docstype', 'tipo de documento', 'opcional'],
      },
      {
        id: 'docs-mime-type',
        title: 'docsMimeType',
        path: '/docs/api-structure/docs-mime-type',
        categoryTitle: 'Campos da Requisição',
        mainContent: Content.DOCS_MIME_TYPE_CONTENT,
        keywords: ['docsmimetype', 'mime type', 'jpeg', 'png', 'pdf', 'gif'],
      },
      {
        id: 'docs-id',
        title: 'docsId',
        path: '/docs/api-structure/docs-id',
        categoryTitle: 'Campos da Requisição',
        mainContent: Content.DOCS_ID_CONTENT,
        keywords: ['docsid', 'identificador', 'opcional'],
      },
      {
        id: 'docs-url',
        title: 'docsURL',
        path: '/docs/api-structure/docs-url',
        categoryTitle: 'Campos da Requisição',
        mainContent: Content.DOCS_URL_CONTENT,
        keywords: ['docsurl', 'url', 'link', 'fonte', 'origem'],
      },
      {
        id: 'documents-object',
        title: 'Opções dos Documentos',
        path: '/docs/api-structure/documents-object',
        categoryTitle: 'Campos da Requisição',
        mainContent: Content.DOCUMENTS_OBJECT_CONTENT,
        keywords: ['documents', 'documentos', 'objeto', 'name', 'options', 'opcoes', 'rg', 'cnh', 'comprovanteresidencia', 'contratosocial', 'ataeleicaodiretoria', 'certidaocasamento', 'comprovantepagamento'],
        children: [
            {
                id: 'options-rg',
                title: 'RG',
                path: '/docs/api-structure/documents-object/options-rg',
                categoryTitle: 'Opções de Documentos',
                mainContent: Content.OPTIONS_RG_CONTENT,
                keywords: ['rg', 'registro geral', 'identidade', 'opcoes', 'options', 'campos', 'fields', 'datanascimento', 'nomecompleto'],
            },
            {
                id: 'options-cnh',
                title: 'CNH',
                path: '/docs/api-structure/documents-object/options-cnh',
                categoryTitle: 'Opções de Documentos',
                mainContent: Content.OPTIONS_CNH_CONTENT,
                keywords: ['cnh', 'carteira de habilitacao', 'opcoes', 'options', 'campos', 'fields', 'categoriacnh', 'numeroregistrocnh'],
            },
            {
                id: 'options-comprovante-residencia',
                title: 'Comprovante de Residência',
                path: '/docs/api-structure/documents-object/options-comprovante-residencia',
                categoryTitle: 'Opções de Documentos',
                mainContent: Content.OPTIONS_COMPROVANTE_RESIDENCIA_CONTENT,
                keywords: ['comprovanteresidencia', 'comprovante de residencia', 'opcoes', 'options', 'endereco', 'cep'],
            },
            {
                id: 'options-contrato-social',
                title: 'Contrato Social',
                path: '/docs/api-structure/documents-object/options-contrato-social',
                categoryTitle: 'Opções de Documentos',
                mainContent: Content.OPTIONS_CONTRATO_SOCIAL_CONTENT,
                keywords: ['contratosocial', 'contrato social', 'opcoes', 'options', 'empresa', 'parte'],
            },
            {
                id: 'options-ata-eleicao',
                title: 'Ata de Eleição',
                path: '/docs/api-structure/documents-object/options-ata-eleicao',
                categoryTitle: 'Opções de Documentos',
                mainContent: Content.OPTIONS_ATA_ELEICAO_DIRETORIA_CONTENT,
                keywords: ['ataeleicaodiretoria', 'ata de eleicao', 'opcoes', 'options', 'diretoria', 'mandato'],
            },
            {
              id: 'options-certidao-casamento',
              title: 'Certidão de Casamento',
              path: '/docs/api-structure/documents-object/options-certidao-casamento',
              categoryTitle: 'Opções de Documentos',
              mainContent: Content.OPTIONS_CERTIDAO_CASAMENTO_CONTENT,
              keywords: ['certidaocasamento', 'certidao de casamento', 'opcoes', 'options', 'campos', 'fields', 'regimeBens', 'partes'],
            },
            {
              id: 'options-comprovante-pagamento',
              title: 'Comprovante de Pagamento',
              path: '/docs/api-structure/documents-object/options-comprovante-pagamento',
              categoryTitle: 'Opções de Documentos',
              mainContent: Content.OPTIONS_COMPROVANTE_PAGAMENTO_CONTENT,
              keywords: ['comprovantepagamento', 'comprovante de pagamento', 'opcoes', 'options', 'campos', 'fields', 'boleto', 'transacao'],
            },
        ],
      },
    ],
  },
  {
    id: 'examples',
    title: 'Exemplos',
    path: '/docs/examples',
    categoryTitle: 'Referência da API',
    mainContent: '<h1>Exemplos de Uso da API</h1><p>Explore vários cenários de requisições à API.</p>',
    keywords: ['exemplos', 'requests', 'requisicoes', 'json', 'uso'],
    children: [
      {
        id: 'request-with-type',
        title: 'Requisição com Identificação',
        path: '/docs/examples/request-with-type',
        categoryTitle: 'Exemplos de Requisição',
        mainContent: Content.EXAMPLE_REQUEST_WITH_ID_CONTENT,
        keywords: ['exemplo', 'requisicao identificada', 'docstype especificado'],
      },
      {
        id: 'request-without-type',
        title: 'Requisição sem Identificação',
        path: '/docs/examples/request-without-type',
        categoryTitle: 'Exemplos de Requisição',
        mainContent: Content.EXAMPLE_REQUEST_WITHOUT_ID_CONTENT,
        keywords: ['exemplo', 'requisicao nao identificada', 'multiplos tipos de documentos'],
      },
    ],
  },
  {
    id: 'access-buckets',
    title: 'Acesso a Buckets',
    path: '/docs/access-buckets',
    categoryTitle: 'Integrações',
    mainContent: Content.ACCESS_BUCKET_INTRO_MAIN_CONTENT,
    keywords: ['bucket', 's3', 'aws', 'armazenamento', 'storage', 'permissões', 'integração'],
    children: [
      {
        id: 'access-buckets-aws-s3',
        title: 'AWS S3',
        path: '/docs/access-buckets/aws-s3',
        categoryTitle: 'Provedores de Nuvem',
        mainContent: Content.ACCESS_BUCKET_AWS_S3_CONTENT,
        keywords: ['aws s3', 'amazon s3', 'bucket', 'iam', 'access key', 'secret key', 'configuração', 'permissionamento', 'cloudshell'],
      },
    ],
  },
  {
    id: 'response-por-documento',
    title: 'Response por Documento',
    path: '/docs/response-por-documento',
    categoryTitle: 'Referência da API',
    mainContent: '<h1>Respostas por Tipo de Documento</h1><p>Esta seção detalha os campos retornados pela API para cada tipo de documento suportado, incluindo exemplos de JSON para cada um.</p>',
    keywords: ['response', 'resposta', 'documentos', 'json', 'formato', 'campos', 'retorno', 'dados'],
    children: [
      {
        id: 'response-certidao-casamento',
        title: 'Certidão de Casamento',
        path: '/docs/response-por-documento/certidao-casamento',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_CERTIDAO_CASAMENTO_CONTENT,
        keywords: ['certidao casamento', 'casamento', 'response', 'resposta', 'json', 'campos', 'partes', 'regimeBens'],
      },
      {
        id: 'response-cnh',
        title: 'CNH',
        path: '/docs/response-por-documento/cnh',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_CNH_CONTENT,
        keywords: ['cnh', 'carteira de habilitacao', 'response', 'resposta', 'json', 'campos', 'informacoesCarteira', 'informacoesPessoais'],
      },
      {
        id: 'response-rg',
        title: 'RG',
        path: '/docs/response-por-documento/rg',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_RG_CONTENT,
        keywords: ['rg', 'registro geral', 'identidade', 'response', 'resposta', 'json', 'campos', 'informacoesPessoais', 'informacoesRg'],
      },
      {
        id: 'response-contrato-social',
        title: 'Contrato Social',
        path: '/docs/response-por-documento/contrato-social',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_CONTRATO_SOCIAL_CONTENT,
        keywords: ['contrato social', 'empresa', 'response', 'resposta', 'json', 'campos', 'partes', 'atividadesEmpresa'],
      },
      {
        id: 'response-ata-eleicao',
        title: 'Ata de Eleição da Diretoria',
        path: '/docs/response-por-documento/ata-eleicao',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_ATA_ELEICAO_DIRETORIA_CONTENT,
        keywords: ['ata de eleicao', 'diretoria', 'response', 'resposta', 'json', 'campos', 'partes', 'ordemDiaAta'],
      },
      {
        id: 'response-comprovante-residencia',
        title: 'Comprovante de Residência',
        path: '/docs/response-por-documento/comprovante-residencia',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_COMPROVANTE_RESIDENCIA_CONTENT,
        keywords: ['comprovante de residencia', 'endereco', 'response', 'resposta', 'json', 'campos', 'nomeCompleto'],
      },
      {
        id: 'response-comprovante-pagamento',
        title: 'Comprovante de Pagamento',
        path: '/docs/response-por-documento/comprovante-pagamento',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_COMPROVANTE_PAGAMENTO_CONTENT,
        keywords: ['comprovante de pagamento', 'pagamento', 'response', 'resposta', 'json', 'campos', 'boleto', 'transacao'],
      },
    ],
  },
  {
    id: 'error-codes',
    title: 'Códigos de Erro',
    path: '/docs/error-codes',
    categoryTitle: 'Solução de Problemas',
    mainContent: Content.ERROR_CODES_CONTENT,
    keywords: ['erros', 'codigos de status', 'status codes', 'resolucao de problemas', 'troubleshooting', '400', '401', '403', '500'],
  },
  {
    id: 'best-practices',
    title: 'Melhores Práticas',
    path: '/docs/best-practices',
    categoryTitle: 'Desenvolvimento',
    mainContent: Content.BEST_PRACTICES_CONTENT,
    keywords: ['melhores praticas', 'recomendacoes', 'dicas', 'otimizacao'],
  },
];

export function findPageByPath(path: string, tree: DocPage[] = documentationTree): DocPage | undefined {
  for (const page of tree) {
    if (page.path === path) {
      return {
        ...page,
        mainContent: ensureRenderable(page.mainContent) as () => ReactNode, 
      };
    }
    if (page.children) {
      const foundInChildren = findPageByPath(path, page.children);
      if (foundInChildren) {
        return {
          ...foundInChildren, 
          mainContent: ensureRenderable(foundInChildren.mainContent) as () => ReactNode,
        };
      }
    }
  }
  return undefined;
}

let _allDocsText: string | null = null;

function extractTextFromHtml(html: string): string {
  if (typeof html !== 'string') return '';
  
  // Attempt to preserve structure of code blocks before stripping general HTML
  // This regex tries to capture language (optional) and content of code blocks
  let text = html.replace(/<pre><code(?: class="language-(.*?)")?>([\s\S]*?)<\/code><\/pre>/g, (match, lang, code) => {
    // Basic unescaping for common HTML entities in code
    const unescapedCode = code
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    return `\n\`\`\`${lang || ''}\n${unescapedCode.trim()}\n\`\`\`\n`;
  });

  // Handle inline <code>
  text = text.replace(/<code>(.*?)<\/code>/g, '`$1`');
  // Handle links
  text = text.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');
  // Handle headings
  text = text.replace(/<h[1-6].*?>(.*?)<\/h[1-6]>/g, (match, content) => `\n## ${content}\n`);
  // Handle bold and italic (simple cases)
  text = text.replace(/<\/?strong>/g, '**');
  text = text.replace(/<\/?em>/g, '*');
  // Handle list items (very basic, doesn't distinguish ol/ul well after stripping parents)
  text = text.replace(/<li>(.*?)<\/li>/g, '\n- $1');
  // Remove div tags
  text = text.replace(/<div.*?>|<\/div>/g, '\n');
  // Strip all other HTML tags
  text = text.replace(/<[^>]+>/g, ' ');
  // Normalize whitespace: multiple spaces to one, multiple newlines to two
  text = text.replace(/\s+/g, ' ').replace(/\n\s*\n/g, '\n\n').trim();
  return text;
}


export function getAllDocsContentForAI(): string {
  if (_allDocsText === null) {
    let combinedText = "";
    function traverseAndCollect(pages: DocPage[], currentCategory?: string) {
      for (const page of pages) {
        let pageContent = "";
        const categoryToUse = page.categoryTitle || currentCategory;
        
        if (categoryToUse) {
          pageContent += `Categoria: ${categoryToUse}\n`;
        }
        pageContent += `Título da Página: ${page.title}\n\n`;

        if (typeof page.mainContent === 'string') {
          pageContent += extractTextFromHtml(page.mainContent);
        } else {
          // This case is tricky. If mainContent is a function, we can't directly extract its HTML string value here.
          // We'd need to find the original string in docs-content.ts that produced this function.
          // For simplicity in this function, we'll log a warning or skip if it's not a string.
          // The ensureRenderable function turns strings into functions, so direct string content might be less common here.
          // However, we define mainContent as string in docs-content.ts.
          // Let's find the corresponding string from Content.* based on page.id or a heuristic.
          const contentKey = Object.keys(Content).find(key => {
            // Heuristic: if a Content export matches the mainContent function,
            // OR if key naming convention matches page id. This is imperfect.
            // A better approach is to always ensure raw strings are available for this function if functions are used in tree.
            // Given current setup: mainContent in tree IS the string from Content.*
            return false; // This part is complex and likely not needed if mainContent in tree is direct string
          });
          // If mainContent in the tree is the direct string from `docs-content.ts`, it should be handled by the string case.
          // If it was processed into a function by `ensureRenderable` for `findPageByPath`, 
          // we should ideally refer back to the original string source for AI content.
          // For now, this function assumes `page.mainContent` can be a string directly from the tree.
           console.warn(`mainContent for page '${page.title}' is a function and cannot be directly processed for AI text. Ensure raw string content is used for AI indexing if this is unintended.`);
        }
        
        combinedText += pageContent + "\n\n--------------------------------\n\n";
        
        if (page.children) {
          traverseAndCollect(page.children, categoryToUse); // Pass down the current category
        }
      }
    }
    
    // Reset and use the comprehensive Content.DOCUMENTATION_SECTIONS if it's sufficiently populated.
    // Otherwise, fall back to traversing the tree (though this is less ideal if content is functional).
    if (Content.DOCUMENTATION_SECTIONS && Content.DOCUMENTATION_SECTIONS.length > 200) {
        _allDocsText = extractTextFromHtml(Content.DOCUMENTATION_SECTIONS);
    } else {
        traverseAndCollect(documentationTree);
        _allDocsText = combinedText; // combinedText would already be processed by extractTextFromHtml if it were called inside loop
    }
    
    if (!_allDocsText) { 
      console.warn("Documentation content for AI resulted in an empty string after cleaning.");
      _allDocsText = ""; 
    }
  }
  return _allDocsText;
}

    
