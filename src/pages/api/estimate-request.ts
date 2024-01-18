import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend('re_8NuP6awj_QHAZqEYutJqre7TjPakkRWvi')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['zemus241@gmail.com', 'luciusunegbu@gmail.com'],
      subject: 'Event estimate alert',
      text: `A new user with email ID: ${email} just made a request for event estimate`,
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
