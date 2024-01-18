'use client'
import Button from '@/components/button/Button'
import InputField from '@/components/inputField/InputField'
import { notifySignup } from '@/lib/apiClient'
import { SubmitHandler, useForm } from 'react-hook-form'

type Inputs = {
  budget: string
  email: string
  invitees: string
  phone: number
}

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    notifySignup(data)
  }
  return (
    <main className='flex h-screen'>
      <img src='/evently.png' alt='' className='absolute top-6 left-12' />
      <div className='flex  flex-col justify-center bg-secondary w-full px-12'>
        <div className='max-w-[550px]'>
          <h3 className='text-3xl mb-6 font-semibold'>
            Skeptical on how to plan your weeding?
          </h3>
          <h4 className='text-2xl mb-6 font-semibold'>
            Don’t worry we got you covered.
          </h4>
          <p>Enjoy and remember your events while being cost effective</p>
        </div>
      </div>
      <div className='bg-primary w-full flex flex-col justify-center px-12'>
        <h3 className='text-3xl mb-6 font-semibold max-w-[440px]'>
          Get Your Event Estimated Cost value
        </h3>
        <p>Fill the form below</p>
        <form className='max-w-[540px]' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between gap-2'>
            <InputField
              name='budget'
              register={register}
              type='number'
              placeholder='What is your budget'
            />
            <InputField
              name='invitees'
              register={register}
              type='number'
              placeholder='No. of Invites'
            />
          </div>
          <div className='flex justify-between gap-2'>
            <InputField
              name='email'
              register={register}
              type='text'
              placeholder='Add your Email'
              containerStyles='mb-7'
            />
            <InputField
              name='phone'
              register={register}
              type='number'
              placeholder='Add your number'
              containerStyles='mb-7'
            />
          </div>
          <Button type='submit'>Get Estimate</Button>
        </form>
      </div>
    </main>
  )
}
