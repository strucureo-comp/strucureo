'use server';

interface SendEmailState {
    success: boolean;
    message: string;
}

export async function sendEmailAction(prevState: SendEmailState, formData: FormData): Promise<SendEmailState> {
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!email || !subject || !message) {
        return { success: false, message: 'All fields are required.' };
    }

    try {
        const response = await fetch('https://api.driftspike.space/api/send-email', {
            method: 'POST',
            headers: {
                'x-api-key': 'c90f1760-4b7e-4aed-a6ff-aa218d908cb0',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'strucureo@gmail.com', // Fixed recipient as requested
                subject: `[Contact Form] ${subject}`,
                html: `
          <h1>New Message from Strucureo Contact Form</h1>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Email API Error:', response.status, errorText);
            return { success: false, message: 'Failed to send email. Please try again later.' };
        }

        return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
        console.error('Email Server Action Error:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
