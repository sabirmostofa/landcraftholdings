import { Metadata } from 'next';
import ProjectGallery from './project-gallery';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore the portfolio of Landcraft Holdings, featuring premier residential and commercial properties in Uttara, Aftabnagar, Banani, and Mirpur, Dhaka.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Portfolio</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Discover the landmarks we've crafted across Dhaka, each a testament to our commitment to quality and design excellence.
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </div>
  );
}
