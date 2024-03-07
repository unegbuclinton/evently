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
    <main className='h-screen lg:flex'>
      <div className='w-full mb-10 lg:mb-0'>
        <img src='/evently.png' alt='' className='w-28 p-4 lg:pl-12' />
        <div className='flex p-4 text-center flex-col justify-center w-full lg:px-12 lg:mt-32'>
          <div className='max-w-[550px]'>
            <h3 className='text-xl lg:text-3xl mb-6 font-semibold'>
              Ready to Start Your Wedding Story?
            </h3>

            <p>
              Experience budget bliss where our budget estimator helps you keep
              the dream alive without breaking the bank
            </p>
          </div>
        </div>
      </div>
      <div className='bg-primary p-4 w-full flex flex-col justify-center items-center lg:px-12 text-center'>
        <h3 className='text-xl lg:text-3xl mb-6 font-semibold max-w-[440px]'>
          Get Your Event Estimated Cost value
        </h3>
        <p>Fill the form below</p>
        <form className='max-w-[540px]' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between gap-2'>
            <InputField
              name='budget'
              register={register}
              required
              type='number'
              error={errors.budget?.type}
              placeholder='What is your budget'
            />
            <InputField
              name='invitees'
              register={register}
              required
              error={errors.invitees?.type}
              type='number'
              placeholder='No. of Invites'
            />
          </div>
          <div className='flex justify-between gap-2'>
            <InputField
              name='email'
              register={register}
              required
              error={errors.email?.type}
              type='text'
              placeholder='Add your Email'
              containerStyles='mb-7'
            />
            <InputField
              name='phone'
              register={register}
              required
              type='number'
              error={errors.phone?.type}
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
