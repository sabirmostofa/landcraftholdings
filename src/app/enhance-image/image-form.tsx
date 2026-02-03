'use client';

import { useState, useRef, ChangeEvent } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { enhanceImageAction } from './actions';
import { Upload, X, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
          Enhancing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Enhance Image
        </>
      )}
    </Button>
  );
}

export default function ImageForm() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(enhanceImageAction, {
    success: false,
    message: '',
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit for Gemini
        alert("File size exceeds 4MB limit.");
        return;
      }
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        formRef.current?.requestSubmit();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setOriginalImage(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    // Reset form state if needed, but this component doesn't need to
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form ref={formRef} action={formAction}>
          <input
            type="file"
            name="imageFile"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/webp"
            className="hidden"
          />
          <input type="hidden" name="imageUri" value={originalImage || ''} />

          {!originalImage && (
            <div
              className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-12 text-center cursor-pointer hover:bg-muted transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 font-semibold">Click to upload an image</p>
              <p className="text-sm text-muted-foreground">PNG, JPG, or WEBP (Max 4MB)</p>
            </div>
          )}
        </form>

        {originalImage && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2 text-center">Original</h3>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image src={originalImage} alt="Original" fill className="object-contain" />
                </div>
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold mb-2 text-center">Enhanced</h3>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted/30 flex items-center justify-center">
                  {useFormStatus().pending && (
                     <div className="w-full px-8 flex flex-col items-center">
                        <p className="mb-2 text-sm text-muted-foreground">AI is working its magic...</p>
                        <Progress value={50} className="w-full animate-pulse" />
                     </div>
                  )}
                  {state.success && state.enhancedImageUri && (
                    <Image src={state.enhancedImageUri} alt="Enhanced" fill className="object-contain" />
                  )}
                  {!useFormStatus().pending && !state.success && (
                    <div className="text-muted-foreground text-sm p-4 text-center">
                       {state.message ? <p className="text-destructive">{state.message}</p> : 'Enhanced image will appear here'}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
               <Button onClick={handleClear} variant="outline">
                <X className="mr-2 h-4 w-4" /> Clear
              </Button>
               <form action={formAction}>
                 <input type="hidden" name="imageUri" value={originalImage || ''} />
                 <SubmitButton/>
               </form>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
