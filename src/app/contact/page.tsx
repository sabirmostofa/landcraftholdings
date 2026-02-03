import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Landcraft Holdings. Contact us for inquiries about our properties, partnerships, or any other questions. We are located in Dhaka, Bangladesh.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 lg:py-24">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">
                    Get in Touch
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    We'd love to hear from you. Whether you have a question
                    about our projects, partnerships, or anything else, our team
                    is ready to answer all your questions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-card p-8 rounded-lg shadow-lg">
                    <h2 className="font-headline text-3xl font-bold mb-6">
                        Contact Information
                    </h2>
                    <div className="space-y-6 text-foreground">
                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Our Office
                                </h3>
                                <p className="text-muted-foreground">
                                    Kalshi Gentle Park,H#01, R#01, Block# New-D,
                                    Bauniabad Road, Pallabi, Mirpur-1216.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Email Us
                                </h3>
                                <p className="text-muted-foreground">
                                    info@landcraftholdings.com
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Call Us
                                </h3>
                                <p className="text-muted-foreground">
                                    +8801711996545
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-lg">
                    <h2 className="font-headline text-3xl font-bold mb-6">
                        Send Us a Message
                    </h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
