import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import DetailCart from '../components/cart/DetailCart'

interface CartBarProps {
  items: Array<{
    text: string
    path: string
  }>
}

function CartBar({ items }: CartBarProps) {
  return (
    <ul
      className='flex items-center relative text-[#131246] gap-3
            font-inter font-bold text-xs leading-6'>
      {items.map((item) => (
        <li key={item.path}>
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

const cartBar = [
  { text: 'Cart', path: '/' },
  { text: 'Information', path: '/shop' },
  { text: 'Shipping', path: '/about' },
  { text: 'Payment', path: '/contact' }
]

interface Items {
  id: number
  item: string
  qty: number
  price: number
}

function Cart() {
  const [items, setItems] = useState<Items[]>([
    { id: 1, item: 'Dilan 1990', price: 29, qty: 1 },
    { id: 2, item: 'Lupus 2002', price: 12, qty: 1 }
  ])
  useEffect(() => {
    console.log('file: cart.tsx:50 ~ Cart ~ items:', items)
  }, [items])

  // const [carts, setCarts] = useState<Product[]>([])

  // useEffect(() => {
  //   // Fetch data from the API
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://172.29.114.152:3131/order')
  //       const data = response.data
  //       setCarts(data.data)
  //       console.log(data.data)
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   void fetchData()
  // }, [])

  return (
    <section className='mx-auto w-full max-h-[100vh] relative'>
      <div className='flex left-0 top-0 items-center w-full'>
        <div className='flex flex-col items-center w-full'>
          <section className='flex justify-start items-start w-full h-full'>
            <div className='flex flex-col items-start px-4 pt-[55px] pb-[10px] w-[50%] h-[32px] gap-y-3'>
              <span className='self-start block relative font-montserrat font-bold text-[40px] leading-[48px] tracking-[.075em] text-[#131246]'>
                BOOKBUZZ
              </span>
              <section className='flex items-center py-[30px] gap-3 w-full'>
                <CartBar items={cartBar} />
              </section>
              <section className='flex items-center justify-between w-full h-[121px]'>
                <span className='w-[153px] h-[20px] font-inter font-medium text-base relative flex self-start'>
                  Contact Information
                </span>
                <span className='flex relative items-center self-end text-xs font-inter'>
                  Already have an account ?<Link to='/login'>Log In</Link>
                </span>
              </section>
              <input
                type='text'
                name='Contact Information'
                placeholder='Enter your email or phone number'
                className='peer flex flex-row items-center
                          gap-2 box-border h-[44px]
                          w-full px-[10px] py-[14px] text-[16px] leading-6
                          rounded-lg border-2 border-solid border-gray-300
                          text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              />
              <label
                htmlFor='checkbox'
                className='flex flex-row justify-start items-center p-0 w-[50%] h-[16px]'>
                <input
                  type='checkbox'
                  className='w-[16px] h-[16px] bg-[#ffffff] border rounded border-solid border-[#d0d5dd]'
                />
                <span className='px-2 font-inter text-sm font-normal'>
                  Email me with news and offers
                </span>
              </label>
              <div className='pt-[50px] pb-[20px] w-[200px] h-[19px] text-base font-normal font-inter'>
                Shipping Address
              </div>
              <input
                type='text'
                name='Country'
                placeholder='Country'
                className='peer flex flex-row items-center
                          gap-2 box-border h-[44px]
                          w-full px-[10px] py-[14px] text-[16px] leading-6
                          rounded-lg border-2 border-solid border-gray-300
                          text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              />
              <div className='w-full flex gap-2'>
                <input
                  type='text'
                  name='First name'
                  placeholder='First name'
                  className='peer flex flex-row items-center
                gap-2 box-border h-[44px]
                w-[50%] px-[10px] py-[14px] text-[16px] leading-6
                rounded-lg border-2 border-solid border-gray-300
                text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                />
                <input
                  type='text'
                  name='Last name'
                  placeholder='Last name'
                  className='peer flex flex-row items-center
                gap-2 box-border h-[44px]
                w-[50%] px-[10px] py-[14px] text-[16px] leading-6
                rounded-lg border-2 border-solid border-gray-300
                text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                />
              </div>
              <input
                type='text'
                name='Address'
                placeholder='Address'
                className='peer flex flex-row items-center
                          gap-2 box-border h-[44px]
                          w-full px-[10px] py-[14px] text-[16px] leading-6
                          rounded-lg border-2 border-solid border-gray-300
                          text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              />
              <input
                type='text'
                name='Apartment,Suits, Etc'
                placeholder='Apartment,Suits, Etc'
                className='peer flex flex-row items-center
                          gap-2 box-border h-[44px]
                          w-full px-[10px] py-[14px] text-[16px] leading-6
                          rounded-lg border-2 border-solid border-gray-300
                          text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              />
              <input
                type='text'
                name='City'
                placeholder='City'
                className='peer flex flex-row items-center
                          gap-2 box-border h-[44px]
                          w-full px-[10px] py-[14px] text-[16px] leading-6
                          rounded-lg border-2 border-solid border-gray-300
                          text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                          invalid:border-pink-500 invalid:text-pink-600
                          focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
              />
              <div className='w-full flex gap-2'>
                <input
                  type='text'
                  name='Province'
                  placeholder='Province'
                  className='peer flex flex-row items-center
                gap-2 box-border h-[44px]
                w-full px-[10px] py-[14px] text-[16px] leading-6
                rounded-lg border-2 border-solid border-gray-300
                text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                />
                <input
                  type='text'
                  name='Postal code'
                  placeholder='Postal code'
                  className='peer flex flex-row items-center
                gap-2 box-border h-[44px]
                w-full px-[10px] py-[14px] text-[16px] leading-6
                rounded-lg border-2 border-solid border-gray-300
                text-[#344054] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                />
              </div>
              <label
                htmlFor='checkbox'
                className='flex flex-row justify-start items-center p-0 w-[50%] h-[16px]'>
                <input
                  type='checkbox'
                  className='w-[16px] h-[16px] bg-[#ffffff] border rounded border-solid border-[#d0d5dd]'
                />
                <span className='px-2 font-inter text-sm font-normal'>
                  Email me with news and offers
                </span>
              </label>
              <div className='flex justify-between items-center relative pt-5 w-full'>
                <div className='flex justify-start items-center font-inter text-base font-normal py-[6px] w-[50%]'>
                  {'<'}
                  <Link
                    className='px-2'
                    to='/'>
                    Return to home
                  </Link>
                </div>
                <div className='w-[50%] flex justify-end items-center'>
                  <button className='px-[14px] py-[6px] border border-black rounded-lg bg-black border-solid '>
                    <span className='font-inter text-base font-semibold text-[#fff]'>
                      Continue to shipping
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center px-4 pt-[55px] pb-[10px] w-[50%] h-full gap-y-3 bg-slate-100 border rounded-md mt-32 mx-12'>
              <DetailCart
                items={items}
                handleChangeItems={(val) => {
                  setItems(val)
                }}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Cart
