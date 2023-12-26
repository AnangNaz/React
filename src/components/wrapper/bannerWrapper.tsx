import React from 'react'

const BannerWrapper = (): React.ReactElement => {
  return (
    <div className='container mx-auto px-6 font-inter sm:flex justify-center items-center sm:gap-4'>
      <div className='rounded shadow-lg mb-10 sm:w[526px] h[300px] justify-center'>
        <img
          src='./Banner-1.png'
          alt=''
        />
      </div>
      <div className='rounded shadow-lg mb-10 sm:w[526px] h[300px] justify-center'>
        <img
          src='./Banner-2.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default BannerWrapper
