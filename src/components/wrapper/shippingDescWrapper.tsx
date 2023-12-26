import React from 'react'

const shippingDescWrapper = (): React.ReactElement => {
  return (
    <div
      className=' max-w-7xl mx-auto px-[100px] py-[50px] border-b-2'
      id='shipping-desc'>
      <div className='flex flex-wrap  xl:justify-between text-center sm:justify-center '>
        <div className='text-xs md:py-[50px] py-[30px] sm:px-[20px] xl:px-0 '>
          <div className='mb-[30px] flex items-center justify-center max-w'>
            <img src='./001-shipped_small.webp' />
          </div>
          <h1 className='text-black font-bold mb-[24px]'>FREE SHIPPING WORLDWIDE</h1>
          <p className='text-[#929292]'>
            We offer free shipping via Standard Shipping on orders over <br /> $200.00
          </p>
        </div>
        <div className='text-xs md:py-[50px] py-[30px] sm:px-[20px] xl:px-0'>
          <div className='mb-[30px] flex items-center justify-center max-w'>
            <img src='./002-money-back_small.webp' />
          </div>
          <h1 className='text-black font-bold mb-[24px]'>FREE SHIPPING WORLDWIDE</h1>
          <p className='text-[#929292]'>
            We offer free shipping via Standard Shipping on orders over <br /> $200.00
          </p>
        </div>
        <div className='text-xs md:py-[50px] py-[30px] sm:px-[20px] xl:px-0'>
          <div className='mb-[30px] flex items-center justify-center max-w'>
            <img src='./003-support_small.webp' />
          </div>
          <h1 className='text-black font-bold mb-[24px]'>FREE SHIPPING WORLDWIDE</h1>
          <p className='text-[#929292]'>
            We offer free shipping via Standard Shipping on orders over <br />
            $200.00
          </p>
        </div>
      </div>
    </div>
  )
}

export default shippingDescWrapper
