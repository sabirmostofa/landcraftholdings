import Image from "next/image";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { placeholderImages } from "@/lib/placeholder-images.json";
import Anisv from "@/assets/Anis.png";
import Salahuddin from "@/assets/salahuddin-v1.png";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about the mission, vision, and expert team behind Landcraft Holdings, a leading real estate developer in Dhaka, Bangladesh.",
};

const bannerImage = placeholderImages.find(
    (img) => img.id === "about-us-banner",
);
const teamMembers = [
    {
        name: "Anisur Rahman",
        role: "Founder & CEO",
        localImage: Anisv,
        fallback: "AR",
    },
    {
        name: "Salah Uddin Ahammed",
        role: "Managing Director",
        localImage: Salahuddin,
        fallback: "SA",
    },
];

export default function AboutPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[40vh] w-full flex items-center justify-center text-center text-white">
                {bannerImage && (
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={bannerImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold">
                        About Landcraft Holdings
                    </h1>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                                Our Story
                            </h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Founded with a vision to redefine the urban
                                landscape of Bangladesh, Landcraft Holdings
                                began its journey to create spaces that are not
                                just buildings, but homes and thriving business
                                hubs. We are driven by a passion for quality,
                                innovation, and a commitment to our clients.
                            </p>
                            <p className="text-muted-foreground">
                                From our first project to our latest landmark,
                                our philosophy has remained unchanged: to build
                                with integrity, to design with purpose, and to
                                deliver beyond expectations. We believe in
                                creating long-term value for our customers and
                                contributing positively to the communities we
                                serve.
                            </p>
                        </div>
                        <div>
                            <Card className="shadow-lg">
                                <CardContent className="p-8">
                                    <div className="mb-6">
                                        <h3 className="font-headline text-2xl font-semibold">
                                            Our Mission
                                        </h3>
                                        <p className="mt-2 text-muted-foreground italic">
                                            To craft exceptional real estate
                                            projects that offer superior value,
                                            innovative design, and an
                                            unparalleled living experience,
                                            setting new benchmarks for quality
                                            in Bangladesh.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl font-semibold">
                                            Our Vision
                                        </h3>
                                        <p className="mt-2 text-muted-foreground italic">
                                            To be the most trusted and respected
                                            real estate developer in Bangladesh,
                                            known for our architectural
                                            excellence, unwavering commitment to
                                            quality, and lasting customer
                                            relationships.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-card">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">
                            Meet Our Team
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                            The driving force behind our success is our team of
                            dedicated and experienced professionals.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member) => {
                            const memberImage = placeholderImages.find(
                                (img) => img.id === member.imageId,
                            );

                            // Determine which source to use: local import or placeholder link
                            const imageSource =
                                member.localImage || memberImage?.imageUrl;

                            return (
                                <Card
                                    key={member.name}
                                    className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <Avatar className="w-24 h-24 mb-4">
                                            {imageSource && (
                                                <AvatarImage
                                                    src={
                                                        typeof imageSource ===
                                                        "string"
                                                            ? imageSource
                                                            : imageSource.src
                                                    }
                                                    alt={member.name}
                                                />
                                            )}
                                            <AvatarFallback className="text-3xl">
                                                {member.fallback}
                                            </AvatarFallback>
                                        </Avatar>
                                        <h3 className="font-headline text-xl font-semibold">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary font-medium">
                                            {member.role}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
