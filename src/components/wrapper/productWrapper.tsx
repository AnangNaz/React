import React from 'react'
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook, FaCcPaypal, FaCcVisa, FaCcMastercard, FaBitcoin } from 'react-icons/fa'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const ProductWrapper = (): React.ReactElement => {
  return (
    <div>
      <div className='flex items-center justify-center mb-[50px]'>
        <div className='max-w-7xl mx-auto py-[50px] flex lg:flex-row lg:gap-[30px] min-[100px]:flex-col justify-center gap-[50px]'>
          <div id='foto-product'>
            <div className='flex flex-col max-w-[525px]  items-center gap-[10px]'>
              <div className='border w-[525px]'>
                <img src='./10_bf49c3cd-fade-4f88-9caa-725a72b1018a_600x800_crop_center.png' />
              </div>
              <div id='foto-product-carousel'>
                <ul className='flex flex-row gap-[10px]'>
                  <li className='border'>
                    <img src='./11_e272e529-4c81-454b-b9ff-99dcfba814f1_600x800_crop_center.png' />
                  </li>
                  <li className='border'>
                    <img src='./11_e272e529-4c81-454b-b9ff-99dcfba814f1_600x800_crop_center.png' />
                  </li>
                  <li className='border'>
                    <img src='./11_e272e529-4c81-454b-b9ff-99dcfba814f1_600x800_crop_center.png' />
                  </li>
                  <li className='border'>
                    <img src='./11_e272e529-4c81-454b-b9ff-99dcfba814f1_600x800_crop_center.png' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* desc product */}
          <div className='flex w-full max-w-[525px] '>
            <div className='flex flex-col w-full'>
              {/* title */}
              <div className='flex w-full flex-col gap-[15px] border-b-2 pb-[20px] min-[100px]:px-3 sm:px-0'>
                <p
                  id='product-title'
                  className='text-[18px]'>
                  {' '}
                  1. This is the large title
                </p>
                <p id='product-rating'></p>
                <p
                  id='product-price'
                  className='text-[16px] font-bold'>
                  {' '}
                  $20.00{' '}
                  <span
                    id='discount-price'
                    className='font-normal text-[16px]'>
                    $25.00
                  </span>
                </p>
                <p id='product-sku'> SKU:1001</p>
              </div>
              {/* desc product */}
              <div className='py-5 min-[100px]:px-3'>
                <p className='text-opacity-70 text-black'>
                  A long established fact that a reader will be distracted by the readable content
                  of a page when looking at its layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal...
                </p>
              </div>
              {/* detail product */}
              <div className='my-5 min-[100px]:px-3'>
                <table className='table-auto border w-full text-left text-base'>
                  <thead>
                    <tr>
                      <th className='border py-2 pl-2'>Book Name:</th>
                      <th className='border py-2 pl-2'>This is the Large Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border py-2 pl-2'>Author Name:</td>
                      <td className='border py-2 pl-2'>Vendor 1</td>
                    </tr>
                    <tr>
                      <td className='border py-2 pl-2'>Product Type:</td>
                      <td className='border py-2 pl-2'>Type 1</td>
                    </tr>
                    <tr>
                      <td className='border py-2 pl-2'>Item Publish Date:</td>
                      <td className='border py-2 pl-2'>2020 / 02 / 02</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* order action  */}
              <div className='flex flex-row gap-[15px] sm:h-[55px] mb-5 text-[14px] min-[100px]:justify-center lg:justify-start min-[100px]:flex-wrap'>
                <div className='flex flex-row gap-[15px] items-center justify-center'>
                  <p>QTY</p>
                  <form className='border w-[100px] min-[100px]:h-12 flex items-center justify-center h-full'>
                    {' '}
                    1
                  </form>
                </div>
                <button className='border flex w-[65px] items-center justify-center min-[100px]:h-12'>
                  {/* icon */}
                </button>
                <button className='border items-center w-[140px] min-[100px]:h-12 justify-center flex'>
                  Add To Cart
                </button>
              </div>
              {/* buy button */}
              <div className='flex min-[100px]:justify-center lg:justify-start'>
                <button className='border bg-black text-white font-bold sm:w-[380px] h-[55px] mb-5 min-[100px]:w-[250px]'>
                  Buy it now
                </button>
              </div>
              {/* share product */}
              <div className='flex flex-col my-6 min-[100px]:items-center lg:items-start'>
                <p className='mb-2 text-base font-medium'>Share This Product</p>
                <div className='flex flex-row gap-2'>
                  <button>
                    <FaInstagram />
                  </button>
                  <button>
                    <FaWhatsapp />
                  </button>
                  <button>
                    <FaFacebook />
                  </button>
                  <button>
                    <FaTwitter />
                  </button>
                </div>
              </div>
              {/* payment method */}
              <div className='flex flex-col mb-6 min-[100px]:items-center lg:items-start'>
                <p className='mb-2 text-base font-medium'>Payment Method</p>
                <div className='flex flex-row gap-2'>
                  <button>
                    <FaCcPaypal />
                  </button>
                  <button>
                    <FaCcVisa />
                  </button>
                  <button>
                    <FaCcMastercard />
                  </button>
                  <button>
                    <FaBitcoin />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto min-[100px]:px-3'>
        <nav className=' flex pt-[100px] pb-[50px] border-t-2 justify-center'>
          <ul className='flex justify-between items-center '>
            <li className='text-[20px] font-semibold flex gap-[50px]'>
              <a>Description</a>
              <a>Reviews</a>
              <a>Comments</a>
            </li>
          </ul>
        </nav>

        <div className='pb-[100px] border-b-2'>
          <div>
            <p>
              A long established fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using Content here, content
              here, making it look like readable English. Many desktop publishing packages and web
              page editors now use Lorem Ipsum as their default model text, and a search for lorem
              ipsum will uncover many web sites still in their infancy. Various versions have
              evolved over the years, sometimes by accident, sometimes on purpose (injected humour
              and the like.
              <br />
              <br />
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductWrapper
