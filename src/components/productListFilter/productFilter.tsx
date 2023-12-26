/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import ContentData from '../productContent/contentData'
import { Link } from 'react-router-dom'
import FilterPagination from './filterPagination'
import axios from 'axios'

interface Product {
  id: number
  product_id: string
  title_book: string
  author: string
  genre_id: number
  description: string
  thumbnail: string
  price: number
  stock: number
  review_id: number
  createdAt: string
  updatedAt: string
  review: {
    avgRating: number
  }
}

function ProductListFilter(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://172.29.114.152:3131/product')
        const data = response.data
        setProducts(data.data)
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    void fetchData()
  }, [])

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }
  const totalPages = Math.ceil(products.length / itemsPerPage)

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setItemsPerPage(Number(event.target.value))
    setCurrentPage(1) // reset current page when items per page changes
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const startRange = startIndex + 1
  const endRange = Math.min(endIndex, products.length)

  return (
    <>
      {/* Main title */}

      <div className='bg-[#f6f6f6]'>
        <div className=' max-w-7xl w-full h-auto mx-auto py-8 flex flex-col items-center'>
          <div className='w-full max-w-md flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-center mb-4'>Product List</h1>
            <div className='flex items-center text-gray-500 text-sm'>
              <span>Home &gt;</span>
              <p className='text-blue-500 ml-1'>Product List</p>
            </div>
          </div>
        </div>
      </div>
      {/* filter */}
      <div className='max-w-7xl w-full mx-auto justify-between md:h-auto relative flex-col items-start flex h-[145px]'>
        <div className='flex place-items-center border-t-2 border-b-2 w-full h-[45px] px-[10px] gap-3'>
          <svg
            className='text-xl  '
            stroke='#ff2800'
            fill='#000000'
            strokeWidth='0'
            viewBox='0 0 1024 1024'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0
                              624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8
                              3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
          </svg>
          <svg
            className='text-xl  '
            stroke='#ff2800'
            fill='#000000'
            strokeWidth='0'
            viewBox='0 0 1024 1024'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0
                              624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8
                              3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
          </svg>
          <svg
            className='text-xl  '
            stroke='#ff2800'
            fill='#000000'
            strokeWidth='0'
            viewBox='0 0 1024 1024'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0
                              624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8
                              3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
          </svg>
          <input
            placeholder={`Showing ${startRange}-${endRange} of ${products.length} results`}
            className='w-auto h-[17px] font-inter font-normal text-sm'
          />
          <div className='ml-auto gap-4 flex'>
            <label htmlFor='books'>Show:</label>
            <select
              name='numbers'
              id='numbers'
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}>
              <option value='3'>3</option>
              <option value='6'>6</option>
              <option value='9'>9</option>
            </select>
            <label htmlFor='books'>Sort by:</label>
            <select
              name='Featured'
              id='Featured'>
              <option value='Sci-Fi'>Sci-Fi</option>
              <option value='Adventure'>Adventure</option>
              <option value='Mystery/Thriller'>Mystery/Thriller</option>
              <option value='Fiction'>Fiction</option>
            </select>
          </div>
        </div>
        <section className='flex justify-between items-center py-[30px] gap-[80px]'>
          <div className=' flex flex-col items-start w-[320px] h-[1380px]'>
            {/* selected filter */}
            <div className='w-[317px] h-[120px] flex flex-col gap-2 '>
              <div className='grid grid-cols-3 px-1 py-2 relative gap-2'>
                <span className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[17px] text-black/75 font-inter text-sm'>
                  selected
                </span>
                <span className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[17px] text-black/75 font-inter text-sm'>
                  selected
                </span>
                <span className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[17px] text-black/75 font-inter text-sm'>
                  selected
                </span>
                <span className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[17px] text-black/75 font-inter text-sm'>
                  selected
                </span>
              </div>
              <span className='px-2 font-inter font-normal text-sm underline text-[#298fc2]'>
                clear all
              </span>
            </div>
            {/* Price Filter */}
            <div className=' flex flex-col items-start pb-[40px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Price
              </span>
              <div className='flex relative pt-[10px] justify-between items-center'>
                <div className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[21px] text-black/75 font-inter text-sm'>
                  selected
                </div>
                <div className='relative left-[200px] font-inter font-normal text-sm underline text-[#298fc2] w-[160px] h-[21px]'>
                  clear all
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center px-2 py-12 w-[320px] h-[44px]'>
              <div className='font-inter text-base'>$</div>
              <div className='font-inter text-base items-center justify-start relative flex w-[90px] h-[44px] border border-solid rounded-lg px-[5px]'>
                0
              </div>
              <div>To</div>
              <div className='font-inter text-base'>$</div>
              <div className='font-inter text-base items-center justify-start relative flex w-[90px] h-[44px] border border-solid rounded-lg px-[5px]'>
                0
              </div>
            </div>
            <button className='px-[10px] flex items-center justify-center py-[18px] rounded-lg w-[100px] h-[35px] border-solid border text-white bg-black'>
              Filter
            </button>
            {/* Availability filter */}
            <div className=' flex flex-col items-start py-[40px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Availability
              </span>
              <div className='flex pt-[10px] relative justify-between items-center'>
                <div className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[21px] text-black/75 font-inter text-sm'>
                  selected
                </div>
                <div className='relative left-[200px] font-inter font-normal text-sm underline text-[#298fc2] w-[160px] h-[21px]'>
                  clear all
                </div>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>In stock</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(5)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Out stock</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(0)</span>
              </div>
            </div>
            {/* Author */}
            <div className=' flex flex-col items-start py-[100px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Author
              </span>
              <div className='flex pt-[10px] relative justify-between items-center'>
                <div className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[21px] text-black/75 font-inter text-sm'>
                  selected
                </div>
                <div className='relative left-[200px] font-inter font-normal text-sm underline text-[#298fc2] w-[160px] h-[21px]'>
                  clear all
                </div>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Author 1</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(5)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Author 2</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(0)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Author 3</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(5)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Author 4</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(0)</span>
              </div>
            </div>
            {/* Genre */}
            <div className=' flex flex-col items-start py-[100px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Genre
              </span>
              <div className='flex pt-[10px] relative justify-between items-center'>
                <div className='flex justify-center items-center border-dashed border rounded-[40px] w-[60px] h-[21px] text-black/75 font-inter text-sm'>
                  selected
                </div>
                <div className='relative left-[200px] font-inter font-normal text-sm underline text-[#298fc2] w-[160px] h-[21px]'>
                  clear all
                </div>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Self Help</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(5)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Sci fi</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(0)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Fiction</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(5)</span>
              </div>
              <div className='flex relative justify-center items-center w-[320px] h-[25px]'>
                <input
                  className='flex relative'
                  type='checkbox'
                />
                <span className='px-2 w-[160px] h-[25px]'>Non Fiction</span>
                <span className='flex justify-end w-[160px] h-[25px] relative'>(0)</span>
              </div>
            </div>
            <div className=' flex flex-col items-start py-[100px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Category
              </span>
            </div>
            <div className=' flex flex-col items-start py-[100px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Format
              </span>
            </div>
            <div className=' flex flex-col items-start py-[100px] w-[320px] h-[21px]'>
              <span className='flex items-center border-b-2 border-solid px-2 w-[320px] h-[40px] font-inter font-semibold text-sm'>
                Language
              </span>
            </div>
          </div>
          <div className='relative container px-[50px] py-10 w-[960px] h-[1380px] flex items-start flex-col'>
            <Link to='/product'>
              <div className='mx-auto grid px-4 w-full sm:py-[20px] lg:grid-cols-3 sm:gap-y-[1vh] pt-[200px] pb-10 grid-cols-1 gap-y-[300px] gap-[30px]'>
                {products.slice(startIndex, endIndex).map((product, index) => (
                  <ContentData
                    key={index}
                    name={product.author}
                    img={product.thumbnail}
                    rating={product.review.avgRating}
                    nameProduct={product.title_book}
                    price={product.price}
                  />
                ))}
              </div>
            </Link>
            <div className='flex justify-between items-center w-auto h-[150px]'>
              <div className='px-4 flex justify-between items-center w-auto h-[50px] border-t-2 border-b-2'>
                <span className='items-center flex justify-start relative w-[425px] text-[12px] h-[17px]'>
                  {`Showing ${startRange}-${endRange} of ${products.length} results`}
                </span>
                <div className='items-center text-[12px] justify-end flex relative w-[400px] h-[17px] gap-[30px]'>
                  <FilterPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductListFilter
