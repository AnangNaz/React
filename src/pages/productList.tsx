/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from '../components/navBar/navBar'
import Footer from '../components/footer/footer'
import ProductListFilter from '../components/productListFilter/productFilter'

function ProductList(): React.ReactElement {
  return (
    <>
      {/* Main title */}
      <Navbar />
      <ProductListFilter />
      <div className='pt-[550px]'>
        <Footer />
      </div>
    </>
  )
}

export default ProductList
