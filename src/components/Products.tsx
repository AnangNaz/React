import React from 'react'
export interface ProductProps {
  name: string
  category: string
  img: string
  rating: number
  price: string
}

const Product = ({ name, category, img, rating, price }: ProductProps): JSX.Element => {
  return (
    <>
      <div className='mx-auto'>
        <div className='h-[380px] w-[248px]  relative border border-[rgba(0,0,0,0.3)] '>
          <div className='absolute bottom-1 px-[20px] '>
            <div className='flex justify-around items-center gap-[86px]'>
              <p className='text-[12px] uppercase '>{name} </p>
              <div className='flex gap-[2.5px] '>
                {/* star rating untuk tiap buku */}
                {Array.from(Array(5), (_, i) => (
                  <svg
                    key={i}
                    stroke='#DFB300'
                    fill={i < rating ? '#DFB300' : '#5F5F5F'}
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    height='1em'
                    width='9.4px'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className='font-extrabold text-[12px] '>{category} </p>
            <p className='text-blue-500 font-bold text-[14px] '>{price}</p>
          </div>

          <div className='h-[298px] w-[248px] shadow-xl  absolute'>
            <img
              src={img}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
