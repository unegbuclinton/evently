import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_RESEND_API_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, budget, invitees, phone } = req.body

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [
        'zemus241@gmail.com',
        'luciusunegbu@gmail.com',
        'lovesangel95@gmail.com',
      ],
      subject: 'User event estimate notification',
      text: `A new user with email ID: ${email} just made a request for event estimate, with a budget of ${budget} and No. of invitees totalling to ${invitees}. And their contact is ${phone}`,
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
