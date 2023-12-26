import React from 'react'

const CategoryWrapper = (): React.ReactElement => {
  return (
    <div className='container mx-auto px-12 md:flex justify-center gap-5 my-[125px]'>
      <img
        className='pt-10'
        src='./buku1.png'
        alt=''
      />
      <img
        className='pt-10'
        src='./buku2.png'
        alt=''
      />
      <img
        className='pt-10'
        src='./buku3.png'
        alt=''
      />
    </div>
  )
}

export default CategoryWrapper
