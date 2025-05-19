
import type { ReactNode } from 'react';
import * as Content from './docs-content';

export interface DocPage {
  id: string;
  title: string; // Used for sidebar and metadata
  path: string;
  categoryTitle?: string; // e.g., "Get Started", "API Structure" - for display above main title
  mainContent: string | (() => ReactNode); // For left column (prose)
  codeContent?: string | (() => ReactNode); // For right column (code examples, tables)
  children?: DocPage[];
  keywords?: string[];
}

const createContentComponent = (htmlString: string): (() => ReactNode) => {
  // eslint-disable-next-line react/no-danger
  const HtmlContentRenderer = () => <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  HtmlContentRenderer.displayName = 'HtmlContentRenderer'; // Added display name
  return HtmlContentRenderer;
};

// Helper to ensure content is a renderable function
const ensureRenderable = (content?: string | (() => ReactNode)): (() => ReactNode) | undefined => {
  if (typeof content === 'string') {
    return createContentComponent(content);
  }
  return content; // It's already a function or undefined
};


export const documentationTree: DocPage[] = [
  {
    id: 'introduction',
    title: 'Introdução',
    path: '/docs/introduction',
    categoryTitle: 'Primeiros Passos',
    mainContent: Content.INTRODUCTION_MAIN,
    codeContent: Content.INTRODUCTION_CODE,
    keywords: ['introducao', 'boas-vindas', 'url base', 'autenticacao', 'api'],
  },
  {
    id: 'api-structure',
    title: 'Estrutura da API',
    path: '/docs/api-structure',
    categoryTitle: 'Guia da API',
    mainContent: Content.API_STRUCTURE_OVERVIEW_MAIN,
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
        mainContent: Content.DOCUMENTS_OBJECT_MAIN,
        codeContent: Content.DOCUMENTS_OBJECT_CODE, // Placeholder if needed for a general example
        keywords: ['documents', 'documentos', 'objeto', 'name', 'options', 'opcoes', 'rg', 'cnh', 'comprovanteresidencia', 'contratosocial', 'ataeleicaodiretoria'],
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
        id: 'request-with-id',
        title: 'Requisição com Identificação',
        path: '/docs/examples/request-with-id',
        categoryTitle: 'Exemplos de Requisição',
        mainContent: Content.EXAMPLE_REQUEST_WITH_ID_MAIN,
        codeContent: Content.EXAMPLE_REQUEST_WITH_ID_CODE,
        keywords: ['exemplo', 'requisicao identificada', 'docstype especificado'],
      },
      {
        id: 'request-without-id',
        title: 'Requisição sem Identificação',
        path: '/docs/examples/request-without-id',
        categoryTitle: 'Exemplos de Requisição',
        mainContent: Content.EXAMPLE_REQUEST_WITHOUT_ID_MAIN,
        codeContent: Content.EXAMPLE_REQUEST_WITHOUT_ID_CODE,
        keywords: ['exemplo', 'requisicao nao identificada', 'multiplos tipos de documentos'],
      },
    ],
  },
  {
    id: 'quickstart',
    title: 'Guia de Início Rápido',
    path: '/docs/quickstart',
    categoryTitle: 'Primeiros Passos',
    mainContent: Content.QUICKSTART_MAIN,
    codeContent: Content.QUICKSTART_CODE,
    keywords: ['quickstart', 'inicio rapido', 'primeiros passos', 'primeira chamada', 'tutorial'],
  },
  {
    id: 'error-codes',
    title: 'Códigos de Erro',
    path: '/docs/error-codes',
    categoryTitle: 'Solução de Problemas',
    mainContent: Content.ERROR_CODES_CONTENT,
    keywords: ['erros', 'codigos de status', 'status codes', 'resolucao de problemas', 'troubleshooting', '400', '500'],
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
        mainContent: ensureRenderable(page.mainContent) as () => ReactNode, // Ensure it's a function
        codeContent: ensureRenderable(page.codeContent)
      };
    }
    if (page.children) {
      const foundInChildren = findPageByPath(path, page.children);
      if (foundInChildren) {
        return {
          ...foundInChildren, // children pages are already processed by recursive call
          mainContent: ensureRenderable(foundInChildren.mainContent) as () => ReactNode,
          codeContent: ensureRenderable(foundInChildren.codeContent)
        };
      }
    }
  }
  return undefined;
}


let _allDocsText: string | null = null;

// This function now uses the pre-concatenated DOCUMENTATION_SECTIONS from docs-content.ts
export function getAllDocsContentForAI(): string {
  if (_allDocsText === null) {
    // For AI, we concatenate all main content and code content
    let combinedText = "";
    function traverseAndCollect(pages: DocPage[]) {
      for (const page of pages) {
        if (typeof page.mainContent === 'string') {
          combinedText += `${page.mainContent}

`;
        }
        if (typeof page.codeContent === 'string') {
          combinedText += `${page.codeContent}

`;
        }
        if (page.children) {
          traverseAndCollect(page.children);
        }
      }
    }
    traverseAndCollect(documentationTree);
    
    _allDocsText = combinedText
      .replace(/<[^>]+>/g, ' ') // Strip HTML tags
      .replace(/\s+/g, ' ')    // Replace all occurrences of one or more whitespace characters with a single space
      .trim();                 // Remove leading/trailing whitespace
    
    if (!_allDocsText) { 
      console.warn("Documentation content for AI resulted in an empty string after cleaning.");
      _allDocsText = ""; 
    }
  }
  return _allDocsText;
}
