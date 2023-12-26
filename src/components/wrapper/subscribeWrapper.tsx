import React from 'react'

const subscribeWrapper = (): React.ReactElement => {
  return (
    <div
      className='max-w-7xl mx-auto px-[100px] py-[100px]'
      id='subs-w'>
      <div className='text-center'>
        <p className='text-[14px] mb-[15px] text-[#929292]'>Special Offers For Subscribe</p>
        <p className='text-[32px] font-semibold mb-[20px]'>10% Member Discount</p>
        <p className='text-[14px] mb-[50px] text-[#929292]'>
          Subscribe to our newsletters now and stay up to date with new collections.
        </p>
      </div>
      <div className='flex items-center justify-center max-w'>
        <form className=' max-w-xl'>
          <div className='flex border border-teal-500'>
            <input
              className=' py-4  bg-transparent  w-full text-gray-700  px-4 md:px-24 sm:px-10  focus:outline-none'
              type='text'
              placeholder='Your email address'
              aria-label='Full name'
            />
            <button
              className='flex-shrink-0 bg-teal-300 hover: border-teal-300 hover:border-teal-500 text-sm border-4 text-black py-1 px-8 font-medium'
              type='button'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default subscribeWrapper
