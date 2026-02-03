"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
    message: string;
    success: boolean;
};

export async function submitContactForm(
    prevState: ContactFormState,
    formData: FormData,
): Promise<ContactFormState> {
    //HoneyPot Check
    const honeypot = formData.get("company") as string;
    // Check if it exists and is a string
    if (typeof honeypot === "string" && honeypot.length > 0) {
        return { message: "Message sent successfully.", success: true };
    }

    const validatedFields = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        const errorMessage = validatedFields.error.errors
            .map((e) => e.message)
            .join(", ");
        return {
            message: `Invalid form data: ${errorMessage}`,
            success: false,
        };
    }

    const { name, email, message } = validatedFields.data;

    try {
        // Collect the two emails from your Vercel env variables
        const recipientEmails = [
            process.env.OWNER_EMAIL_1,
            process.env.OWNER_EMAIL_2,
        ].filter(Boolean) as string[];

        if (recipientEmails.length === 0) {
            throw new Error(
                "No recipient emails defined in environment variables.",
            );
        }

        await resend.emails.send({
            from: "LandCraftHoldings Form <contact@landcraftholdings.com>", // Update this after verifying your domain
            to: recipientEmails,

            subject: `New Event Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return {
            message: `Thank you, ${name}! Your message has been sent successfully.`,
            success: true,
        };
    } catch (error) {
        console.error("Email error:", error);
        return {
            message:
                "Sorry, there was an error sending your message. Please try again later.",
            success: false,
        };
    }
}
