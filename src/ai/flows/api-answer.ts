'use server';

/**
 * @fileOverview A Genkit flow for answering user questions about the viewto.me API documentation.
 *
 * - apiAnswer - A function that handles the question answering process.
 * - ApiAnswerInput - The input type for the apiAnswer function.
 * - ApiAnswerOutput - The return type for the apiAnswer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ApiAnswerInputSchema = z.object({
  query: z.string().describe('The user query about the viewto.me API documentation.'),
  documentation: z.string().describe('The viewto.me API documentation content.'),
});
export type ApiAnswerInput = z.infer<typeof ApiAnswerInputSchema>;

const ApiAnswerOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query based on the documentation.'),
});
export type ApiAnswerOutput = z.infer<typeof ApiAnswerOutputSchema>;

export async function apiAnswer(input: ApiAnswerInput): Promise<ApiAnswerOutput> {
  return apiAnswerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'apiAnswerPrompt',
  input: {schema: ApiAnswerInputSchema},
  output: {schema: ApiAnswerOutputSchema},
  prompt: `Você é um assistente de IA útil que responde a perguntas sobre a documentação da API do viewto.me.
Use a documentação a seguir para responder à pergunta do usuário. Se não puder responder com base na documentação, diga que não sabe.

  Documentação:
  {{documentation}}

  Query: {{query}}
  `,
});

const apiAnswerFlow = ai.defineFlow(
  {
    name: 'apiAnswerFlow',
    inputSchema: ApiAnswerInputSchema,
    outputSchema: ApiAnswerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
