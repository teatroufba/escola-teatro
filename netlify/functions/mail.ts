import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import { z } from 'zod'
import sgMail from '@sendgrid/mail'

const bodySchema = z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
})

sgMail.setApiKey(process.env.SENDGRID_KEY!)

const handler: Handler = async (
    event: HandlerEvent,
    context: HandlerContext
) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' }
    }

    const body = bodySchema.safeParse(event.body)

    if (!body.success) {
        console.log(body.error)

        return {
            statusCode: 400,
            body: JSON.stringify({
                error: 'Bad request',
                details: body.error.issues,
            }),
        }
    }

    const message = `
    Name: ${body.data.name}\r\n
    Email: ${body.data.email}\r\n
    Message: ${body.data.message}\r\n
    `
    const data = {
        to: 'ufba.escoladeteatro@gmail.com',
        from: 'ufba.escoladeteatro@gmail.com',
        subject: 'Mensagem do form!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'),
    }

    return sgMail
        .send(data)
        .then(() => {
            return {
                statusCode: 200,
                body: JSON.stringify({ sucess: true }),
            }
        })
        .catch((error: any) => {
            return {
                statusCode: 500,
                body: JSON.stringify({ sucess: false, error }),
            }
        })
}

export { handler }
