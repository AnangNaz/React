import React from 'react'

const productWidget = (): React.ReactElement => {
  return (
    <>
      <div className='container justify-start px-4 items-center flex-nowrap relative flex mx-auto font-poppins'>
        <div className='w-full h-[30px]'>
          <div className='w-full relative flex'>
            <span className='relative flex w-[33.33%] h-[30px] text-[20px] font-bold'>
              Spesial
              <span className='h-[1px] ml-[75px] w-[247px] inset-x-0 top-1/2 bg-gray-500 absolute bottom-0 left-0'></span>
            </span>
            <span className='relative flex w-[33.33%] h-[30px] text-[20px] font-bold'>
              Latest
              <span className='h-[1px] ml-[75px] w-[247px] inset-x-0 top-1/2 bg-gray-500 absolute bottom-0 left-0'></span>
            </span>
            <span className='relative flex w-[33.33%] h-[30px] text-[20px] font-bold'>
              Top
              <span className='h-[1px] ml-[75px] w-[247px] inset-x-0 top-1/2 bg-gray-500 absolute bottom-0 left-0'></span>
            </span>
          </div>
        </div>
      </div>

      <div
        className='pt-8 container justify-center items-center relative flex flex-wrap lg:grid lg:grid-cols-3 gap-y-4 gap-x-4 mx-auto px-6 font:poppins
  sm:flex sm:flex-wrap sm:justify-center'>
        {/* 1 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video </p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 2 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 3 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 4 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 5 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 6 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 7 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 8 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
        {/* 9 */}
        <div className='border border-black mb-5 md:w-80 sm:flex-wrap sm:grid sm:grid-cols-2 md:flex'>
          <img
            className='mx-auto sm:float-left self-center w[340px] h[135px]'
            src='./Image.png'
            alt=''
          />
          <div className='float-right px-8 py-4 mx-2'>
            <div className='font-normal leading-5 text-sm flex pr-8 text-gray-600'>Vendor 01</div>
            <p className='text-sm py-2'>1.Product With Video</p>
            <p className='font-bold color text-[#0085FF]'>$20.00</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default productWidget
