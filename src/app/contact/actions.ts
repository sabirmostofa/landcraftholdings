'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.errors.map((e) => e.message).join(', ');
    return {
      message: `Invalid form data: ${errorMessage}`,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log it to the console.
  console.log('New contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  return {
    message: `Thank you, ${name}! Your message has been sent successfully. We will get back to you shortly.`,
    success: true,
  };
}
