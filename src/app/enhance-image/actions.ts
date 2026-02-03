'use server';

import { enhanceImage } from '@/ai/flows/image-enhancement';

type FormState = {
  success: boolean;
  message: string;
  enhancedImageUri?: string;
};

export async function enhanceImageAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const imageUri = formData.get('imageUri') as string;

  if (!imageUri) {
    return {
      success: false,
      message: 'No image provided. Please upload an image.',
    };
  }

  try {
    const result = await enhanceImage({ imageUri });
    return {
      success: true,
      message: 'Image enhanced successfully!',
      enhancedImageUri: result.enhancedImageUri,
    };
  } catch (error) {
    console.error('Image enhancement failed:', error);
    return {
      success: false,
      message: 'An error occurred during image enhancement. Please try again.',
    };
  }
}
