"use client";

// 1. Change import to 'useActionState' from 'react'
import { useActionState, useEffect } from "react";
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
});

export default function ContactForm() {
    const { toast } = useToast();

    // 2. Update to useActionState.
    // It returns [state, action, isPending]
    const [state, formAction, isPending] = useActionState(submitContactForm, {
        message: "",
        success: false,
    });

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.success ? "Success!" : "Error",
                description: state.message,
                variant: state.success ? "default" : "destructive",
            });
            if (state.success) {
                form.reset();
            }
        }
    }, [state, toast, form]);

    return (
        <Form {...form}>
            {/* 3. The formAction remains the same */}
            <form action={formAction} className="space-y-6">
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
                                    placeholder="your.email@example.com"
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
                                <ReviewArea
                                    placeholder="How can we help you?"
                                    {...field}
                                    className="min-h-[120px]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* 4. Use the isPending state directly in the button */}
                <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Form>
    );
}

// Helper component for clean JSX
function ReviewArea(props: any) {
    return <Textarea {...props} />;
}
