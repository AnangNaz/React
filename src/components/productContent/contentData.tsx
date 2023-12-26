import React from 'react'

interface ProductProps {
  name: string
  img: string
  price: number
  rating: number
  nameProduct: string
  discountPrice?: number
}

const StarIcon = ({ filled }: { filled: boolean }): JSX.Element => (
  <svg
    stroke='#DFB300'
    fill={filled ? '#DFB300' : '#5F5F5F'}
    strokeWidth='0'
    viewBox='0 0 576 512'
    height='1em'
    width='9.4px'
    xmlns='http://www.w3.org/2000/svg'>
    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
  </svg>
)

const Rating = ({ rating }: { rating: number }): JSX.Element => (
  <div className='flex gap-[2.5px]'>
    {Array.from(Array(5), (_, i) => (
      <StarIcon
        key={i}
        filled={i < rating}
      />
    ))}
  </div>
)

const Price = ({
  price,
  discountPrice
}: {
  price: number
  discountPrice?: number
}): JSX.Element => (
  <div className='py-1 gap-[55px] flex'>
    <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-[#0085FF]'>
      ${price}
    </span>
    {discountPrice !== undefined && (
      <span className='font-bold font-inter sm:text-[14px] text-[10px] leading-4 text-slate-900/30 line-through'>
        ${discountPrice === 0 || isNaN(discountPrice) ? '' : discountPrice}
      </span>
    )}
  </div>
)

const Product = ({ name, img, nameProduct, rating, price, discountPrice }: ProductProps) => {
  return (
    <div className='sm:h-auto flex justify-center items-center flex-col h-[35vw] w-full'>
      <div className='items-center flex justify-center'>
        <img
          alt={nameProduct}
          src={img}
          className='shadow-xl p-4  items-center h-[300px] max-w-[248px] w-[248px] object-contain border border-[rgba(0,0,0,0.3)]'
        />
      </div>
      <div className='border border-[rgba(0,0,0,0.3)] pt-2 px-[10px] h-[100px] max-w-[248px] w-full '>
        <div className='flex justify-between'>
          <span className='font-normal font-inter sm:text-[12px] text-[10px] text-[#000000]/60 leading-4'>
            {name}
          </span>
          <Rating rating={rating} />
        </div>
        <span className='font-extrabold p-2 font-inter  sm:text-[12px] text-[10px] leading-5'>
          {nameProduct}
        </span>
        <Price
          price={price}
          discountPrice={discountPrice}
        />
      </div>
    </div>
  )
}

export default Product
