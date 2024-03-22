'use client'
import Button from '@/components/button/Button'
import InputField from '@/components/inputField/InputField'
import { notifySignup } from '@/lib/apiClient'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true)
    try {
      await notifySignup(data)
      router.push('/thankYou')
    } catch (error) {
      console.log('error')
    }
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
          <Button type='submit'>
            {loading ? (
              <span className='chat-spinner'>
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 1.0625C8.13261 1.0625 8.25979 1.11847 8.35355 1.2181C8.44732 1.31773 8.5 1.45285 8.5 1.59375V4.78125C8.5 4.92215 8.44732 5.05727 8.35355 5.1569C8.25979 5.25653 8.13261 5.3125 8 5.3125C7.86739 5.3125 7.74021 5.25653 7.64645 5.1569C7.55268 5.05727 7.5 4.92215 7.5 4.78125V1.59375C7.5 1.45285 7.55268 1.31773 7.64645 1.2181C7.74021 1.11847 7.86739 1.0625 8 1.0625ZM8 11.6875C8.13261 11.6875 8.25979 11.7435 8.35355 11.8431C8.44732 11.9427 8.5 12.0779 8.5 12.2188V15.4062C8.5 15.5471 8.44732 15.6823 8.35355 15.7819C8.25979 15.8815 8.13261 15.9375 8 15.9375C7.86739 15.9375 7.74021 15.8815 7.64645 15.7819C7.55268 15.6823 7.5 15.5471 7.5 15.4062V12.2188C7.5 12.0779 7.55268 11.9427 7.64645 11.8431C7.74021 11.7435 7.86739 11.6875 8 11.6875ZM15 8.5C15 8.6409 14.9473 8.77602 14.8536 8.87565C14.7598 8.97528 14.6326 9.03125 14.5 9.03125H11.5C11.3674 9.03125 11.2402 8.97528 11.1464 8.87565C11.0527 8.77602 11 8.6409 11 8.5C11 8.3591 11.0527 8.22398 11.1464 8.12435C11.2402 8.02472 11.3674 7.96875 11.5 7.96875H14.5C14.6326 7.96875 14.7598 8.02472 14.8536 8.12435C14.9473 8.22398 15 8.3591 15 8.5ZM5 8.5C5 8.6409 4.94732 8.77602 4.85355 8.87565C4.75979 8.97528 4.63261 9.03125 4.5 9.03125H1.5C1.36739 9.03125 1.24021 8.97528 1.14645 8.87565C1.05268 8.77602 1 8.6409 1 8.5C1 8.3591 1.05268 8.22398 1.14645 8.12435C1.24021 8.02472 1.36739 7.96875 1.5 7.96875H4.5C4.63261 7.96875 4.75979 8.02472 4.85355 8.12435C4.94732 8.22398 5 8.3591 5 8.5ZM3.05 3.24062C3.14376 3.14103 3.27092 3.08508 3.4035 3.08508C3.53608 3.08508 3.66324 3.14103 3.757 3.24062L5.88 5.49525C5.97108 5.59544 6.02148 5.72964 6.02034 5.86893C6.0192 6.00822 5.96661 6.14147 5.87391 6.23997C5.78121 6.33846 5.6558 6.39434 5.5247 6.39555C5.3936 6.39676 5.2673 6.34321 5.173 6.24644L3.05 3.99181C2.95626 3.89219 2.90361 3.75709 2.90361 3.61622C2.90361 3.47535 2.95626 3.34025 3.05 3.24062ZM10.121 10.7536C10.2148 10.654 10.3419 10.598 10.4745 10.598C10.6071 10.598 10.7342 10.654 10.828 10.7536L12.95 13.0082C13.0411 13.1084 13.0915 13.2426 13.0903 13.3819C13.0892 13.5212 13.0366 13.6544 12.9439 13.7529C12.8512 13.8514 12.7258 13.9073 12.5947 13.9085C12.4636 13.9097 12.3373 13.8561 12.243 13.7594L10.121 11.5048C10.0273 11.4051 9.97461 11.27 9.97461 11.1292C9.97461 10.9883 10.0273 10.8532 10.121 10.7536ZM12.95 3.24169C13.0434 3.34127 13.0959 3.47614 13.0959 3.61675C13.0959 3.75736 13.0434 3.89223 12.95 3.99181L10.828 6.2475C10.7337 6.34427 10.6074 6.39782 10.4763 6.39661C10.3452 6.3954 10.2198 6.33953 10.1271 6.24103C10.0344 6.14253 9.9818 6.00929 9.98066 5.86999C9.97952 5.7307 10.0299 5.59651 10.121 5.49631L12.243 3.24169C12.3368 3.14209 12.4639 3.08614 12.5965 3.08614C12.7291 3.08614 12.8562 3.14209 12.95 3.24169ZM5.879 10.7536C5.97274 10.8532 6.02539 10.9883 6.02539 11.1292C6.02539 11.27 5.97274 11.4051 5.879 11.5048L3.757 13.7594C3.6627 13.8561 3.5364 13.9097 3.4053 13.9085C3.2742 13.9073 3.14879 13.8514 3.05609 13.7529C2.96339 13.6544 2.9108 13.5212 2.90966 13.3819C2.90852 13.2426 2.95892 13.1084 3.05 13.0082L5.172 10.7536C5.26576 10.654 5.39292 10.598 5.5255 10.598C5.65808 10.598 5.78524 10.654 5.879 10.7536Z'
                    fill='white'
                  />
                </svg>
              </span>
            ) : (
              'Get Estimate'
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}
