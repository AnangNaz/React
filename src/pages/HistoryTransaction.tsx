import React from 'react'

const HistoryTransaction = () => {
  return (
    <div className='flex mt-7'>
      <div className='mx-auto w-1/2 pl-5'>
        <h1 className=' mb-10 text-5xl'>Purchase History</h1>
        <div className=' flex gap-7'>
          <span>no.4</span>
          <span>30.01.2020</span>
          <span>Address</span>
        </div>
        <div className='flex justify-end items-end mx-auto my-auto'>
          <span>$19.25</span>
        </div>
        <hr className='h-1 w-full border bg-slate-400 mb-7' />
        <div className='mt-7'>
          <div className='mt-7'>
            <img
              src='./dilan,jpg'
              className='w-16 h-14 inline-block mr-5'
              alt='dilan'
            />
            <span className='mr-5'>AADC 2000</span>
            <span className='text-slate-400'>Quantity: 1</span>
            <span className='flex justify-end items-end'>$12.92</span>
            <hr className='h-0.5 w-full border bg-slate-400 mt-7' />
          </div>
          <div className='mt-7'>
            <img
              src='./dilan,jpg'
              className='w-16 h-14 inline-block mr-5'
              alt='dilan'
            />
            <span className='mr-5'>dilan 1990</span>
            <span className='text-slate-400'>Quantity: 1</span>
            <span className='flex justify-end items-end'>$12.92</span>
            <hr className='h-0.5 w-full border bg-slate-400 mt-7' />
          </div>
          <div className='mt-7'>
            <img
              src='./dilan,jpg'
              className='w-16 h-14 inline-block mr-5'
              alt='dilan'
            />
            <span className='mr-5'>lupus 1998</span>
            <span className='text-slate-400'>Quantity: 1</span>
            <span className='flex justify-end items-end'>$12.92</span>
            <hr className='h-0.5 w-full border bg-slate-400 mt-7' />
          </div>
          <div className=' flex gap-7 justify-end items-end mt-6'>
            <div className='text-xl'>Total : $19.25</div>
            <button className='w-20 h-10 border bg-red-600 text-center rounded-md hover:bg-slate-500'>
              Reorder
            </button>
          </div>
        </div>
        <hr className=' h-0.5 w-full border mt-14' />
        <div className='flex gap-10 my-1'>
          <span>No.1</span>
          <span>23.01.2020</span>
          <span>Address</span>
        </div>
        <span className='flex justify-end items-end'>$198</span>
        <hr className=' h-0.5 w-full border mt-4' />
        <div className='flex gap-10 my-1'>
          <span>No.2</span>
          <span>23.01.2020</span>
          <span>Address</span>
        </div>
        <span className='flex justify-end items-end'>$198</span>
        <hr className=' h-0.5 w-full border mt-4' />
        <div className='flex gap-10 my-1'>
          <span>No.3</span>
          <span>23.01.2020</span>
          <span>Address</span>
        </div>
        <span className='flex justify-end items-end'>$198</span>
        <hr className=' h-0.5 w-full border mt-4' />
      </div>
      <div className=' mx-auto border bg-slate-200 px-9 rounded-md shadow-md h-3/4 my-20 py-3'>
        <h1 className='pb-5'>Guntur Adi Wijaya</h1>
        <h2>Phone</h2>
        <h2 className='pb-3'>0123456789</h2>
        <h2>Email</h2>
        <h2>testtest@gmail.com</h2>
        <h2 className='pt-3'>password</h2>
        <h2>*******</h2>
      </div>
    </div>
  )
}

export default HistoryTransaction
