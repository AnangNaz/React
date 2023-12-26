import ProductProp from '../productContent/productProp'
import List from '../../list.json'
import React from 'react'
import { Link } from 'react-router-dom'

export interface ProductProps {
  name: string
  category: string
  img: string
  rating: number
  price: string
}

const featuredProductWrapper = (): React.ReactElement => {
  return (
    <>
      <div className='text-center'>
        <h2 className='mt-[102px] text-[24px] '>Featured Collection</h2>
        <p className='text-[rgba(0,0,0,0.5)] mb-[40px] '>
          mirum est notare quam littera gotica, quam nunc putamus parum claram anteposuerit
          litterarum formas
        </p>
      </div>
      <Link to='/product'>
        <div className='flex flex-wrap gap-[30px]  mb-[106px] items-center justify-center max-w-7xl mx-auto'>
          {List.map((v, i) => {
            return (
              <ProductProp
                key={i}
                name={v.name}
                category={v.category}
                price={v.price}
                img={v.img}
                rating={v.rating}
              />
            )
          })}
        </div>
      </Link>
    </>
  )
}

export default featuredProductWrapper
