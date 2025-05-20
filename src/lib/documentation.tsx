

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
        codeContent: Content.DOCUMENTS_OBJECT_CODE, 
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
        mainContent: Content.RESPONSE_CERTIDAO_CASAMENTO_MAIN,
        codeContent: Content.RESPONSE_CERTIDAO_CASAMENTO_CODE,
        keywords: ['certidao casamento', 'casamento', 'response', 'resposta', 'json', 'campos', 'partes', 'regimeBens'],
      },
      {
        id: 'response-cnh',
        title: 'CNH',
        path: '/docs/response-por-documento/cnh',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_CNH_MAIN,
        codeContent: Content.RESPONSE_CNH_CODE,
        keywords: ['cnh', 'carteira de habilitacao', 'response', 'resposta', 'json', 'campos', 'informacoesCarteira', 'informacoesPessoais'],
      },
      {
        id: 'response-rg',
        title: 'RG',
        path: '/docs/response-por-documento/rg',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_RG_MAIN,
        codeContent: Content.RESPONSE_RG_CODE,
        keywords: ['rg', 'registro geral', 'identidade', 'response', 'resposta', 'json', 'campos', 'informacoesPessoais', 'informacoesRg'],
      },
      {
        id: 'response-contrato-social',
        title: 'Contrato Social',
        path: '/docs/response-por-documento/contrato-social',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_CONTRATO_SOCIAL_MAIN,
        codeContent: Content.RESPONSE_CONTRATO_SOCIAL_CODE,
        keywords: ['contrato social', 'empresa', 'response', 'resposta', 'json', 'campos', 'partes', 'atividadesEmpresa'],
      },
      {
        id: 'response-ata-eleicao',
        title: 'Ata de Eleição da Diretoria',
        path: '/docs/response-por-documento/ata-eleicao',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_ATA_ELEICAO_DIRETORIA_MAIN,
        codeContent: Content.RESPONSE_ATA_ELEICAO_DIRETORIA_CODE,
        keywords: ['ata de eleicao', 'diretoria', 'response', 'resposta', 'json', 'campos', 'partes', 'ordemDiaAta'],
      },
      {
        id: 'response-comprovante-residencia',
        title: 'Comprovante de Residência',
        path: '/docs/response-por-documento/comprovante-residencia',
        categoryTitle: 'Formatos de Resposta',
        mainContent: Content.RESPONSE_COMPROVANTE_RESIDENCIA_MAIN,
        codeContent: Content.RESPONSE_COMPROVANTE_RESIDENCIA_CODE,
        keywords: ['comprovante de residencia', 'endereco', 'response', 'resposta', 'json', 'campos', 'nomeCompleto'],
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
        // For mainContent and codeContent, if it's a function, we can't directly get the string here easily.
        // We rely on the string versions being available in docs-content.ts and picked up by DOCUMENTATION_SECTIONS.
        // This function is now primarily a fallback or if direct string concatenation from the tree is preferred for some reason.
        // The primary source for AI context is the `DOCUMENTATION_SECTIONS` string in `docs-content.ts`.
        // However, to be robust, let's try to get content from string properties first.
        
        let mainStr = '';
        if (typeof page.mainContent === 'string') {
          mainStr = page.mainContent;
        } else {
          // Attempt to find corresponding string in Content if mainContent is a function. This is a heuristic.
          // A more robust way would be to ensure all content for AI comes from explicitly defined strings.
          const keyGuess = Object.keys(Content).find(k => Content[k as keyof typeof Content] === page.mainContent && typeof Content[k as keyof typeof Content] === 'string');
          if (keyGuess) mainStr = Content[keyGuess as keyof typeof Content] as string;
        }
        combinedText += `${mainStr}\n\n`;

        let codeStr = '';
        if (typeof page.codeContent === 'string') {
          codeStr = page.codeContent;
        } else if (page.codeContent) { // if it's a function
            const keyGuess = Object.keys(Content).find(k => Content[k as keyof typeof Content] === page.codeContent && typeof Content[k as keyof typeof Content] === 'string');
            if (keyGuess) codeStr = Content[keyGuess as keyof typeof Content] as string;
        }
        combinedText += `${codeStr}\n\n`;
        
        if (page.children) {
          traverseAndCollect(page.children);
        }
      }
    }
    
    // Prefer the explicitly concatenated string if available and comprehensive
    if (Content.DOCUMENTATION_SECTIONS && Content.DOCUMENTATION_SECTIONS.length > 200) { // Basic check for non-empty
        _allDocsText = Content.DOCUMENTATION_SECTIONS;
    } else {
        traverseAndCollect(documentationTree);
        _allDocsText = combinedText;
    }
    
    _allDocsText = _allDocsText
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


    