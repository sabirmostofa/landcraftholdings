import { Metadata } from 'next';
import ImageForm from './image-form';
import { Wand2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Image Enhancer',
  description: 'Use our AI-powered tool to automatically enhance and optimize your property images. Improve resolution, brightness, and contrast for stunning web display.',
};

export default function EnhanceImagePage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
          <Wand2 className="h-10 w-10 text-primary" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold">AI Image Enhancer</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Upload a property image to automatically improve its resolution, brightness, and contrast. Our GenAI tool will optimize it for a stunning visual presentation.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ImageForm />
      </div>
    </div>
  );
}
