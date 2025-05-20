
// src/components/search/search-dialog.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef, type FormEvent } from 'react';
import { Search, Loader2, CornerDownLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { apiAnswer, type ApiAnswerOutput } from '@/ai/flows/api-answer';
import { getAllDocsContentForAI } from '@/lib/documentation';
import { useToast } from "@/hooks/use-toast";

const INITIAL_TEXTAREA_HEIGHT_PX = 40; // Corresponds roughly to h-10 or a single line with py-2.5 padding

function renderAnswerWithMarkdown(answer: string): React.ReactNode[] {
  const parts = answer.split('```');
  const nodes: React.ReactNode[] = [];

  parts.forEach((part, index) => {
    if (index % 2 === 0) {
      // This segment is treated as plain text
      if (part.trim()) { // Only render if there's non-whitespace content
        nodes.push(<p key={`text-${index}`} className="whitespace-pre-wrap">{part}</p>);
      }
    } else {
      // This segment is treated as a code block
      const firstNewlineIndex = part.indexOf('\n');
      let language = '';
      let codeContent = '';

      if (firstNewlineIndex !== -1) {
        language = part.substring(0, firstNewlineIndex).trim();
        codeContent = part.substring(firstNewlineIndex + 1);
      } else {
        // If no newline, the whole part might be just the language or malformed.
        language = part.trim();
        // codeContent remains empty
      }
      
      // Render pre block even if codeContent is empty, as it might be an intentional empty block like ```json\n```
      // But avoid rendering if the whole part between ``` ``` was effectively empty or whitespace.
      if (part.trim() || language) { 
        nodes.push(
          <pre key={`code-${index}`}> {/* prose styles from parent will apply for margins */}
            <code className={language ? `language-${language}` : ''}>{codeContent}</code>
          </pre>
        );
      }
    }
  });

  return nodes;
}

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<ApiAnswerOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && e.target === document.body)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Adjust textarea height
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.style.height = 'auto'; 
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.max(scrollHeight, INITIAL_TEXTAREA_HEIGHT_PX)}px`;
    } else if (!isOpen && textareaRef.current) {
        textareaRef.current.style.height = `${INITIAL_TEXTAREA_HEIGHT_PX}px`;
    }
  }, [query, isOpen]);


  const handleSearch = useCallback(async (e?: FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setAiResponse(null);
    setError(null);

    try {
      const documentation = getAllDocsContentForAI();
      if (!documentation) {
        throw new Error("Documentation content is not available.");
      }
      const response = await apiAnswer({ query, documentation });
      setAiResponse(response);
    } catch (err) {
      console.error('AI search error:', err);
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to get AI response: ${errorMessage}`);
      toast({
        title: "Search Error",
        description: `Failed to get AI response: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [query, toast]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (!isLoading && query.trim()) {
        handleSearch(event);
      }
    }
  };
  
  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setQuery('');
      setAiResponse(null);
      setError(null);
      setIsLoading(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = `${INITIAL_TEXTAREA_HEIGHT_PX}px`; 
      }
    }
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start rounded-md px-3 text-sm text-muted-foreground sm:pr-12 md:w-48 lg:w-72 shadow-sm"
        onClick={() => setIsOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Pesquisar documentação...</span>
        <span className="inline-flex lg:hidden">Pesquisar...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-bold opacity-100 sm:flex text-muted-foreground">
          Ctrl K
        </kbd>
      </Button>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] flex flex-col p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" />
              Pergunte à IA sobre a API viewto.me
            </DialogTitle>
            <DialogDescription>
              Digite sua pergunta sobre a documentação da API. A IA irá gerar uma resposta baseada no conteúdo disponível.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSearch} className="px-6 pt-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                ref={textareaRef}
                placeholder="ex.: Como especifico o tipo de documento?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                className="pl-10 pr-12 py-2.5 text-base w-full block rounded-md border border-input bg-background 
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                           min-h-0 overflow-y-hidden resize-none transition-all duration-200 ease-in-out"
                style={{ height: `${INITIAL_TEXTAREA_HEIGHT_PX}px` }} 
                aria-label="Search query"
              />
              <Button 
                type="submit" 
                size="sm" 
                className="absolute right-2 top-1 h-8" 
                disabled={isLoading || !query.trim()}
                aria-label="Submit search"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CornerDownLeft className="h-4 w-4" />}
              </Button>
            </div>
          </form>

          <ScrollArea className="flex-grow min-h-0 px-6 py-4 border-t mt-4 overflow-y-auto">
            {isLoading && (
              <div className="flex flex-col items-center justify-center space-y-2 py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground">Procurando por respostas...</p>
              </div>
            )}
            {error && (
              <div className="text-destructive p-4 bg-destructive/10 rounded-md">
                <p className="font-semibold">Erro</p>
                <p>{error}</p>
              </div>
            )}
            {aiResponse && (
              <div className="space-y-4 prose prose-sm dark:prose-invert max-w-none">
                <h3 className="text-lg font-semibold text-primary">Resposta da IA:</h3>
                <div className="p-4 bg-muted/50 rounded-md shadow">
                  {renderAnswerWithMarkdown(aiResponse.answer)}
                </div>
              </div>
            )}
            {!isLoading && !aiResponse && !error && (
              <div className="text-center text-muted-foreground py-8">
                <p>Faça uma pergunta para começar.</p>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
