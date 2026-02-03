import { Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-center md:text-left text-sm text-muted-foreground">
              Crafting landmarks and building futures in Dhaka, Bangladesh since 2024.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Landcraft Holdings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
