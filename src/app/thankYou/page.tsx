'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ThankYou = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='flex justify-center items-center h-screen text-center font-semibold p-4'>
      <div className='flex flex-col items-center gap-4 border border-solid w-fit px-4 py-6 rounded-md'>
        <svg
          width='88'
          height='68'
          viewBox='0 0 88 68'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M2.33301 34L12.7497 23.5833L33.583 44.4167L75.2497 2.75L85.6664 13.1667L33.583 65.25L2.33301 34Z'
            fill='#FFB3C1'
            stroke='#FFB3C1'
            stroke-width='4'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>

        <p>
          Thank you for reaching out. <br /> Our team will contact you with an
          estimate for your event.
        </p>
      </div>
    </div>
  )
}

export default ThankYou
