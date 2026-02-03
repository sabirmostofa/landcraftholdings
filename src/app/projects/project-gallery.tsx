'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type Project } from '@/lib/definitions';
import { locations } from '@/lib/data';

type ProjectGalleryProps = {
  projects: Project[];
};

const allLocations = ['All', ...locations];

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.location === filter);

  return (
    <Tabs defaultValue="All" onValueChange={setFilter} className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-8">
        {allLocations.map((location) => (
          <TabsTrigger key={location} value={location}>
            {location}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value={filter}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <p className="text-sm font-bold text-primary mb-2">{project.location}</p>
                <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {filteredProjects.length === 0 && (
           <div className="text-center py-16 text-muted-foreground">
              <p>No projects found for this location.</p>
           </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
