import Image from 'next/image'
import React from 'react'



const Trusted = () => {
  return (
    <div className='text-center w-100 space-y-4 mb-8'>
        <h1 className='font-bold text-3xl'>
        Let the Tokens Flow 
        </h1>
        <p className='text-gray-500 font-normal text-sm'>
        Revolutionizing the Payment Paradigm: Redefining the Way DAOs and Crypto Businesses Streamline Subscriptions, Salaries, and Rewards with a Cutting-Edge Asset Streaming Protocol
        </p>
        <Image className='ml-auto mr-auto pt-7 pb-3' src={"/Frame.svg"} width={450} height={450} alt='Trusted Institution'/>
    </div>
  )
}

export default Trusted