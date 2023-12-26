import React from 'react'
import NavBar from '../components/navBar/navBar'
import ProductWrapper from '../components/wrapper/productWrapper'
import ShippingDescWrapper from '../components/wrapper/shippingDescWrapper'
import SubscribeWrapper from '../components/wrapper/subscribeWrapper'
import FeaturedProductWrapper from '../components/wrapper/featuredProductWrapper'
import Footer from '../components/footer/footer'

const ProductPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <NavBar />
      <ProductWrapper />
      <FeaturedProductWrapper />
      <ShippingDescWrapper />
      <SubscribeWrapper />
      <Footer />
    </div>
  )
}

export default ProductPage
