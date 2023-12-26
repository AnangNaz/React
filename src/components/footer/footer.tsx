import React from 'react'

interface TextListProps {
  items: string[]
}

interface LinkListProps {
  items: Array<{
    text: string
    path: string
  }>
}

const addressText = [
  'ipsum dolor sit, amet consectetur adipisicing elit. Totam delectus repudiandae facere.',
  'Address : No. 96, Cengkareng, Jakarta, Indonesia',
  'phone : +1 1234 1234 1234',
  'Email : support@example.com'
]

const businessHour = ['Mon - Fri : 8AM - 10PM', 'Sat : 9AM - 8PM', 'Sun : Closed']

const menuBar = [
  { text: 'Home', path: '/' },
  { text: 'Shop', path: '/shop' },
  { text: 'About', path: '/about' },
  { text: 'Subscribe', path: '/subscribe' },
  { text: 'Contact', path: '/contact' }
]

const extraBar = [
  { text: 'About Us', path: '/about' },
  { text: 'Our Office', path: '/office' },
  { text: 'Delivery', path: '/delivery' },
  { text: 'Our Store', path: '/store' },
  { text: 'Guarantee', path: '/guarantee' }
]

function TextList({ items }: TextListProps): JSX.Element {
  return (
    <ul className='text-[16px] flex flex-col gap-[15px] opacity-70'>
      {items.map((item, i) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function LinkList({ items }: LinkListProps): JSX.Element {
  return (
    <ul className='text-[14px] flex flex-col gap-[20px] opacity-70'>
      {items.map((item, i) => (
        <li key={item.path}>
          <a href={item.path}>{item.text}</a>
        </li>
      ))}
    </ul>
  )
}

const Footer = (): React.ReactElement => {
  return (
    <div className='bg-[#f6f6f6] relative py-0.5'>
      <div className='max-w-7xl w-full mx-auto flex lg:flex-row min-[100px]:flex-col min-[100px]:gap-[50px] sm:justify-left py-[70px] min-[100px]:justify-center'>
        <div className='flex flex-1  flex-col gap-[25px]'>
          <h1 className='text-[40px] font-bold capitalize font-montserrat'>BOOKBUZZ.</h1>
          <TextList items={addressText} />
        </div>
        <div className='flex flex-1 flex-row gap-[100px]'>
          <div className='flex flex-col gap-[35px]'>
            <p className='font-bold text-[14px]'>Business Hour</p>
            <TextList items={businessHour} />
          </div>
          <div className='flex flex-col gap-[35px]'>
            <p className='font-bold text-[14px]'>Footer Menu</p>
            <LinkList items={menuBar} />
          </div>
          <div className='flex flex-col gap-[35px]'>
            <p className='font-bold text-[14px]'>Business Hour</p>
            <LinkList items={extraBar} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
