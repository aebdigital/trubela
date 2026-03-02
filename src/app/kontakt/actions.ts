'use server';

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const surname = formData.get('surname') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const apiKey = process.env.SMTP2GO_API_KEY;
    const fromEmail = process.env.SMTP2GO_FROM || 'trubela-web@aebdig.com';
    const toEmail = process.env.SMTP2GO_TO || 'trubela@trubela.sk';

    if (!apiKey) {
        console.error('SMTP2GO_API_KEY is not defined');
        return { success: false, error: 'Chyba konfigurácie servera.' };
    }

    try {
        const response = await fetch('https://api.smtp2go.com/v3/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: apiKey,
                to: [toEmail],
                sender: fromEmail,
                subject: `Nový dopyt z webu: ${name} ${surname}`,
                text_body: `
Meno: ${name} ${surname}
Email: ${email}
Telefón: ${phone || 'Neuvedené'}
Služba: ${service || 'Neuvedené'}

Správa:
${message}
        `,
                html_body: `
          <h3>Nový dopyt z kontaktného formulára</h3>
          <p><strong>Meno:</strong> ${name} ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefón:</strong> ${phone || 'Neuvedené'}</p>
          <p><strong>Služba:</strong> ${service || 'Neuvedené'}</p>
          <p><strong>Správa:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            }),
        });

        const data = await response.json();

        if (response.ok && data.data?.succeeded > 0) {
            return { success: true };
        } else {
            console.error('SMTP2GO Error:', data);
            return { success: false, error: 'Nepodarilo sa odoslať email.' };
        }
    } catch (error) {
        console.error('Fetch error:', error);
        return { success: false, error: 'Vyskytla sa neočakávaná chyba.' };
    }
}
