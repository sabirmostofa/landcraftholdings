import type { Project } from '@/lib/definitions';
import { placeholderImages } from '@/lib/placeholder-images.json';

const getImage = (id: string) => placeholderImages.find(img => img.id === id) || { imageUrl: '', imageHint: 'placeholder' };

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Landcraft Heights',
    location: 'Uttara',
    description: 'A pinnacle of modern living in the heart of Uttara, offering spacious apartments with breathtaking city views and state-of-the-art amenities.',
    imageUrl: getImage('uttara-1').imageUrl,
    imageHint: getImage('uttara-1').imageHint,
  },
  {
    id: 'p2',
    title: 'Aftabnagar Oasis',
    location: 'Aftabnagar',
    description: 'An exclusive gated community that combines tranquility with urban convenience. Features lush green landscapes and premium facilities.',
    imageUrl: getImage('aftabnagar-1').imageUrl,
    imageHint: getImage('aftabnagar-1').imageHint,
  },
  {
    id: 'p3',
    title: 'The Banani Crest',
    location: 'Banani',
    description: 'The epitome of luxury and sophistication. These residences in Banani offer unparalleled elegance and access to the city\'s finest dining and shopping.',
    imageUrl: getImage('banani-1').imageUrl,
    imageHint: getImage('banani-1').imageHint,
  },
  {
    id: 'p4',
    title: 'Mirpur Manor',
    location: 'Mirpur',
    description: 'Designed for families, Mirpur Manor provides a safe, comfortable, and vibrant community with all the conveniences of modern life.',
    imageUrl: getImage('mirpur-1').imageUrl,
    imageHint: getImage('mirpur-1').imageHint,
  },
  {
    id: 'p5',
    title: 'Uttara Serenity',
    location: 'Uttara',
    description: 'Find your peace in the bustling city. Uttara Serenity offers contemporary apartments designed for comfort and calm.',
    imageUrl: getImage('uttara-2').imageUrl,
    imageHint: getImage('uttara-2').imageHint,
  },
  {
    id: 'p6',
    title: 'Glass Tower',
    location: 'Aftabnagar',
    description: 'A futuristic commercial hub in Aftabnagar, perfect for businesses aiming for growth and prestige.',
    imageUrl: getImage('aftabnagar-2').imageUrl,
    imageHint: getImage('aftabnagar-2').imageHint,
  },
  {
    id: 'p7',
    title: 'Banani Skypool Apartments',
    location: 'Banani',
    description: 'Live the high life with stunning rooftop amenities and panoramic views of Dhaka.',
    imageUrl: getImage('banani-2').imageUrl,
    imageHint: getImage('banani-2').imageHint,
  },
  {
    id: 'p8',
    title: 'Mirpur Legacy',
    location: 'Mirpur',
    description: 'A blend of traditional aesthetics and modern construction, offering a unique living experience.',
    imageUrl: getImage('mirpur-2').imageUrl,
    imageHint: getImage('mirpur-2').imageHint,
  }
];

export const locations = ['Uttara', 'Aftabnagar', 'Banani', 'Mirpur'] as const;
