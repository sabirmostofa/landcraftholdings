import type { Metadata, Viewport } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: {
    template: '%s | Landcraft Holdings',
    default: 'Landcraft Holdings - Premier Real Estate in Bangladesh',
  },
  description: 'Discover premier properties and real estate opportunities in Dhaka, Bangladesh with Landcraft Holdings. Specializing in luxury apartments and commercial spaces in Uttara, Aftabnagar, Banani, and Mirpur.',
  keywords: ['real estate Bangladesh', 'property in Dhaka', 'Landcraft Holdings', 'apartments in Uttara', 'apartments in Aftabnagar', 'apartments in Banani', 'apartments in Mirpur', 'luxury real estate Dhaka'],
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4A00D' },
    { media: '(prefers-color-scheme: dark)', color: '#D4A00D' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400..900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
