/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sgMail.setApiKey(process.env.SENDGRID_KEY!)

type FormData = {
  name: string
  email: string
  message: string
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body: FormData = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}\r\n
    `
  const data = {
    to: 'ufba.escoladeteatro@gmail.com',
    from: 'ufba.escoladeteatro@gmail.com',
    subject: 'Mensagem do form!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  sgMail
    .send(data)
    .then(() => {
      console.log('Email sent')
      res.status(200).json({ sucess: true })
    })
    .catch((error: any) => {
      console.error(error.response.body)
      res.status(400).json({ sucess: false })
    })
}
