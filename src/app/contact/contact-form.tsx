"use client";

import { useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." }),
    company: z.string().optional(), // Honeypot field
});

export default function ContactForm() {
    const { toast } = useToast();

    // State for the countdown timer (in seconds)
    const [countdown, setCountdown] = useState(0);

    const [state, formAction, isPending] = useActionState(submitContactForm, {
        message: "",
        success: false,
    });

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: { name: "", email: "", message: "", company: "" },
    });

    // EFFECT 1: Handles the ticking of the countdown
    useEffect(() => {
        if (countdown <= 0) return;

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // Cleanup: Clear interval if component unmounts
        return () => clearInterval(timer);
    }, [countdown]);

    // EFFECT 2: Handles the response from the Server Action
    useEffect(() => {
        if (state.message) {
            toast({
                title: state.success ? "Success!" : "Error",
                description: state.message,
                variant: state.success ? "default" : "destructive",
            });

            if (state.success) {
                form.reset();
                setCountdown(60); // Start 60-second cooldown on success
            }
        }
    }, [state, toast, form]);

    return (
        <Form {...form}>
            <form action={formAction} className="space-y-6">
                {/* HONEYPOT: Hidden from humans via CSS and Accessibility attributes */}
                <div className="hidden" aria-hidden="true">
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <Input
                                {...field}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="email@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="How can we help?"
                                    {...field}
                                    className="min-h-[120px]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isPending || countdown > 0}
                    className="w-full"
                >
                    {isPending
                        ? "Sending..."
                        : countdown > 0
                          ? `Wait ${countdown}s...`
                          : "Send Message"}
                </Button>
            </form>
        </Form>
    );
}
