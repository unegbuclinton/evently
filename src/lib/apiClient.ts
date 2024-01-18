export const notifySignup = async (data: {
  budget: string
  email: string
  invitees: string
  phone: number
}) => {
  try {
    await fetch('/api/estimate-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    return
  }
}
