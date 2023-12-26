/* eslint-disable @typescript-eslint/space-before-function-paren */
import React from 'react'
import NavBar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'

function ContactUs(): React.ReactElement {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <NavBar />
      <section className='contact-section'>
        <div className='bg-[#f6f6f6] p-20'>
          <div className='text-4xl text-slate-900 text-center font-bold mt-4'>Contact Us</div>
          <div className='text-center mt-2'>
            Home - <span className='text-sky-600 hover:underline cursor-pointer'>Contact Us</span>
          </div>
        </div>

        <div className='container px-6 mx-auto max-w-md sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-7xl pb-[100px]'>
          <div className='lg:p-12 lg:flex-1'>
            <div className='text-2xl font-bold mb-6'>Tell us your message</div>
            <form action=''>
              <label htmlFor='username'>
                <span>Your Name*</span>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Full Name'
                  className='px-3 py-3 w-full block border shadow rounded-lg mb-7'
                />
              </label>
              <label
                htmlFor='email'
                className='mb-2'>
                <span>Your Email*</span>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email Address'
                  className='px-3 py-3 w-full block border shadow rounded-lg mb-7'
                />
              </label>
              <label htmlFor='subject'>
                <span>Subject*</span>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  className='px-3 py-3 w-full block border shadow rounded-lg mb-7'
                />
              </label>
              <label htmlFor='message'>
                <span>Your Message</span>
                <input
                  type='textarea'
                  name='message'
                  id='message'
                  placeholder='Message'
                  className='px-3 py-9 w-full block border shadow rounded-lg mb-7'
                />
              </label>
              <button
                type='submit'
                className='w-full bg-black text-white text-center text-xl px-3 h-12 rounded-xl hover:underline hover:bg-blue-700'>
                Sign In
              </button>
            </form>
          </div>

          <div className='mt-10 font-sans text-left text-md lg:flex lg:flex-1 flex-wrap lg:p-6 bg-[#f6f6f6] justify-start items-start'>
            <div className='lg:m-auto '>
              <h1 className='mb-5 text-[24px] font-bold'>Contact us</h1>
              <p className='mb-7 font-regular text-[14px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam consequuntur
                laudantium esse culpa eveniet ratione soluta pariatur repudiandae asperiores veniam,
                nesciunt iure et exercitationem, nisi aliquam? Tempore optio dicta reiciendis quas,
                officiis ducimus accusantium facilis perspiciatis eius officia tenetur nihil dolores
                veritatis necessitatibus repellendus sunt deserunt! Odit vel tempora accusantium.
              </p>
              <h3 className='mb-5 text-xl font-bold'>Address</h3>
              <h3 className='text-[14px]'>123 Main Street, Anytown, CA 12345 - USA</h3>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContactUs
