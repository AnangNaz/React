import React from 'react'
import { Link } from 'react-router-dom'

interface NameBarProps {
  items: Array<{
    text: string
    path: string
  }>
}

function NameBar({ items }: NameBarProps) {
  return (
    <ul
      className='flex items-center relative text-[#131246] gap-5
          font-poppins font-medium text-xs leading-6'>
      {items.map((item) => (
        <li key={item.path}>
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  )
}

const nameBar = [
  { text: 'Home', path: '/' },
  { text: 'Shop', path: '/productlist' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' }
]

const MenuBar = (): React.ReactElement => {
  return (
    <section className='flex items-center relative justify-center '>
      <button className='relative'>
        <NameBar items={nameBar} />
      </button>
    </section>
  )
}

export default MenuBar
