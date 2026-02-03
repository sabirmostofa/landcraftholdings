// src/ai/flows/image-enhancement.ts
'use server';

/**
 * @fileOverview Implements an AI-powered image enhancement flow.
 *
 * This flow enhances and optimizes property images using GenAI to improve visual quality.
 * - enhanceImage - Function to enhance and optimize an image.
 * - EnhanceImageInput - Input type for the enhanceImage function (data URI of the image).
 * - EnhanceImageOutput - Output type for the enhanceImage function (data URI of the enhanced image).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceImageInputSchema = z.object({
  imageUri: z
    .string()
    .describe(
      'The image to enhance, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type EnhanceImageInput = z.infer<typeof EnhanceImageInputSchema>;

const EnhanceImageOutputSchema = z.object({
  enhancedImageUri: z.string().describe('The enhanced image as a data URI.'),
});
export type EnhanceImageOutput = z.infer<typeof EnhanceImageOutputSchema>;

export async function enhanceImage(input: EnhanceImageInput): Promise<EnhanceImageOutput> {
  return enhanceImageFlow(input);
}

const enhanceImagePrompt = ai.definePrompt({
  name: 'enhanceImagePrompt',
  input: {schema: EnhanceImageInputSchema},
  output: {schema: EnhanceImageOutputSchema},
  prompt: [
    {media: {url: '{{{imageUri}}}'}},
    {text: 'Enhance this image, improving resolution, brightness, and contrast. Optimize it for web display.'},
  ],
  model: 'googleai/gemini-2.5-flash-image-preview',
  config: {
    responseModalities: ['TEXT', 'IMAGE'],
  },
});

const enhanceImageFlow = ai.defineFlow(
  {
    name: 'enhanceImageFlow',
    inputSchema: EnhanceImageInputSchema,
    outputSchema: EnhanceImageOutputSchema,
  },
  async input => {
    const {media} = await enhanceImagePrompt(input);
    return {enhancedImageUri: media!.url!};
  }
);
