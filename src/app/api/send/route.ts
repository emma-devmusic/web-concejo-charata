
import { EmailTemplate, EmailTemplateProps } from '@/app/components/emailTemplate/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    

    
    try {
        const res: EmailTemplateProps = await request.json()
        const { data, error } = await resend.emails.send({
            from: 'Página Web del Concejo <onboarding@resend.dev>',
            // from: `${res.email}`,
            to: ['concejoch@gmail.com'],
            // to: ['ema.araujo.ea@gmail.com'],
            subject: res.issue,
            react: EmailTemplate({...res}),
            text: 'Todo el texto aquí'
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }
        return Response.json({error: false, message: '¡Email enviado con éxito!'});
    } catch (error) {
        return Response.json({ error: true, err: error }, { status: 500 });
    }
}