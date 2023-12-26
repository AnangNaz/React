/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React from 'react'
import { Link } from 'react-router-dom'
import FormSignup from '../components/userForm/userFormSignup'

function SignUp(): React.ReactElement {
  return (
    <section className='mx-auto w-full max-h-[100vh] relative'>
      <div className='flex-col flex left-0 top-0 items-center w-full h-[90%]'>
        <div className='flex-row flex items-center w-full h-[90%]'>
          <section className='flex-col flex justify-start items-start w-full h-full lg:w-[95%] lg:h-[880px]'>
            <div className='flex flex-row items-start px-4 pt-[48px] pb-[10px] lg:p-[32px] w-full lg:w-[640px] h-[32px]'>
              <span className='self-start lg:hidden block font-black capitalize font-montserrat text-[32px] sm:text-[36px] leading-[44px] tracking-[.075em] italic font-feature-settings-tnum-onum-ordn-ss02-ss03-ss04-salt-ss01 text-[#131246]'>
                BOOKBUZZ
              </span>
            </div>
            <div className='flex flex-col items-center px-4 lg:px-0 lg:py-36 py-8 w-full lg:w-[640px] h-full '>
              <div className='flex flex-col items-center gap-8 w-full lg:w-[360px] h-full '>
                <div className='flex flex-col items-start gap-3 w-full lg:w-[360px] h-full'>
                  <span className='font-inter font-semibold text-[30px] leading-[38px] text-[#101828] w-full lg:w-[360px] h-full'>
                    Sign Up
                  </span>
                </div>
                <div className='flex flex-col items-center p-0 gap-3 w-full lg:w-[360px] h-full rounded-xl'>
                  <FormSignup />
                  <div className='w-full lg:w-[360px] h-[44px] flex flex-col justify-center items-center p-0 gap-3'>
                    <button
                      className='flex flex-row justify-center items-center px-[10px] py-[16px] gap-3 w-full lg:w-[360px] h-[44px]
                                    bg-white border-[1px] border-solid shadow-[0_0px_1px_2px_rgba(16,24,40,0.05)] rounded-lg'>
                      <span className='inline-flex items-baseline'>
                        <img
                          src='https://pngimg.com/uploads/google/google_PNG19635.png'
                          alt='google'
                          className='h-[24px] w-[24px] self-center mx-1'
                        />
                        <span className='font-inter self-center font-semibold text-[16px] leading-6 text-[#344054] w-[155px] h-[24px]'>
                          Sign up with google
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className='w-[360px] h-[20px] flex flex-row justify-center items-start p-0 gap-1'>
                  <span className='w-[175px] h-[20px] font-inter font-normal text-[14px] leading-5 text-[#667085]'>
                    Already have an account ?
                  </span>
                  <div className='flex flex-row items-start p-0 w-[41px] h-[20px]'>
                    <button className='flex flex-row justify-center items-center p-0 gap-2 w-[41px] h-[20px] '>
                      <Link
                        to='/login'
                        className='flex'>
                        <span className='w-[41px] h-[20px] font-inter font-semibold text-[14px] leading-5 text-black'>
                          Log in
                        </span>
                      </Link>
                    </button>
                  </div>
                </div>
                <footer className='pt-[80px] flex lg:flex-row flex-col items-end p-8 justify-between lg:w-[640px] lg:h-[200px]'>
                  <div className='flex flex-row items-center lg:self-start self-center w-[83px] h-[20px]  '>
                    <span className='font-normal text-[14px] leading-5 text-[#667085]'>
                      © Bookbuzz
                    </span>
                  </div>
                  <div className='flex flex-row items-center self-center p-0 gap-2 w-[186px] h-[20px] lg:self-end'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 50 50'>
                      <path d='M 14 4 C 8.4886661 4 4 8.4886661 4 14 L 4 36 C 4 41.511334 8.4886661 46 14 46 L 36 46 C 41.511334 46 46 41.511334 46 36 L 46 14 C 46 8.4886661 41.511334 4 36 4 L 14 4 z M 14 6 L 36 6 C 40.430666 6 44 9.5693339 44 14 L 44 36 C 44 40.430666 40.430666 44 36 44 L 14 44 C 9.5693339 44 6 40.430666 6 36 L 6 14 C 6 9.5693339 9.5693339 6 14 6 z M 13 15 C 11.35503 15 10 16.35503 10 18 L 10 32 C 10 33.64497 11.35503 35 13 35 L 37 35 C 38.64497 35 40 33.64497 40 32 L 40 18 C 40 16.35503 38.64497 15 37 15 L 13 15 z M 13.414062 17 L 36.583984 17 L 27.677734 25.892578 C 26.18494 27.382984 23.796834 27.382819 22.304688 25.890625 L 13.414062 17 z M 38 18.412109 L 38 31.587891 L 31.402344 25 L 38 18.412109 z M 12 18.414062 L 18.585938 25 L 12 31.585938 L 12 18.414062 z M 29.988281 26.412109 L 36.585938 33 L 13.414062 33 L 20 26.414062 L 20.890625 27.304688 C 23.146478 29.56054 26.832638 29.562194 29.089844 27.308594 L 29.988281 26.412109 z'></path>
                    </svg>
                    <span className='font-inter font-normal text-[14px] leading-5 text-[#667085] w-[162px] h-[20px]'>
                      support@bookbuzz.com
                    </span>
                  </div>
                </footer>
              </div>
            </div>
          </section>
          <section className='w-full h-full hidden md:block'>
            <img
              src='./bg-signUp.jpg'
              alt='background.jpg'
              className='w-[100vw] h-[100vh] object-cover'
            />
          </section>
        </div>
      </div>
    </section>
  )
}

export default SignUp
