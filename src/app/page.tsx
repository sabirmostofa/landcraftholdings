import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Building, Award, Users } from 'lucide-react';
import { projects } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images.json';

const featuredProjects = projects.slice(0, 3);
const heroImage = placeholderImages.find(img => img.id === 'hero-1');

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-6 p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-md">
            Crafting Landmarks, Building Futures
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90 drop-shadow">
            Landcraft Holdings is a premier real estate developer in Bangladesh, dedicated to creating exceptional living and commercial spaces.
          </p>
          <Button asChild size="xl" className="mt-4">
            <Link href="/projects">Explore Our Projects</Link>
          </Button>
        </div>
      </section>

      <section id="featured-projects" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              A glimpse into our portfolio of architectural excellence and modern living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Landcraft?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our commitment to quality, innovation, and customer satisfaction sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                 <Building className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Innovative Design</h3>
              <p className="text-muted-foreground">We blend modern architecture with functional design to create timeless properties.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                 <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Uncompromising Quality</h3>
              <p className="text-muted-foreground">Using only the finest materials and construction practices for lasting value.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                 <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold mb-2">Customer-Centric</h3>
              <p className="text-muted-foreground">Your satisfaction is our priority. We're with you at every step of your journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="flex flex-col justify-center">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-foreground/80">
                  "Landcraft Holdings delivered our dream home on time and with exceptional quality. Their attention to detail is remarkable. We couldn't be happier!"
                </blockquote>
                <div className="flex items-center mt-4">
                  <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/client1/40/40" data-ai-hint="person face" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Jahanara Doe</p>
                    <p className="text-sm text-muted-foreground">Homeowner, Banani</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-center">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-foreground/80">
                  "The professionalism and transparency of the Landcraft team were impressive. They made the entire process of buying our apartment seamless and stress-free."
                </blockquote>
                <div className="flex items-center mt-4">
                  <Avatar>
                    <AvatarImage src="https://picsum.photos/seed/client2/40/40" data-ai-hint="person face" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Rahim Smith</p>
                    <p className="text-sm text-muted-foreground">Investor, Uttara</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
