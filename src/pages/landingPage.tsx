import React from 'react'
import Navbar from '../components/navBar/navBar'
import ProductContent from '../components/productContent/productContent'
import BannerWrapper from '../components/wrapper/bannerWrapper'
import ProductWidget from '../components/productContent/productWidget'
import ShippingDescWrapper from '../components/wrapper/shippingDescWrapper'
import SubscribeWrapper from '../components/wrapper/subscribeWrapper'
import CategoryWrapper from '../components/wrapper/categoryWrapper'
import Footer from '../components/footer/footer'
import FeaturedProductWrapper from '../components/wrapper/featuredProductWrapper'
import HeroContent from '../components/productContent/heroContent'
import ReviewWrapper from '../components/wrapper/reviewWrapper'

const landingPage = (): React.ReactElement => {
  return (
    <div className='w-[100vw] mx-auto h-[100vh]'>
      <div className='static'>
        <Navbar />
        <HeroContent />
        <CategoryWrapper />
        <ProductContent />
        <ReviewWrapper />
        <FeaturedProductWrapper />
        <BannerWrapper />
        <ProductWidget />
        <ShippingDescWrapper />
        <SubscribeWrapper />
        <Footer />
      </div>
    </div>
  )
}

export default landingPage
