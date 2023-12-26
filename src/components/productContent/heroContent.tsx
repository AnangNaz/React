import React from 'react'

const heroContent = (): React.ReactElement => {
  return (
    <>
      {/* item1 */}
      <div
        className='h-[750px] items-center flex bg-no-repeat bg-cover bg-right'
        id='heroContent'
        style={{ backgroundImage: 'url(./Banner.png)' }}>
        <div className='w-[1280px] mx-auto items-center justify-start flex'>
          {/* -hero-txt */}
          <div className='flex flex-col justify-start text-left'>
            <p className='text-[24px] font-normal'>New Arrival</p>
            <p className='text-[70px] font-medium'>CUSTOM BOOK</p>
            <p className='text-[16px] font-normal'>
              You can custom any design book.
            </p>
            <button className='bg-black text-white font-medium h-[44px] w-[120px] rounded-xl mt-4'>
              <p>Shop Now</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default heroContent
