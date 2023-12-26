import React from 'react'

interface Props {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
}

function FilterPagination({ currentPage, totalPages, onPageChange }: Props) {
  const pageRange = 2 // Number of pages to show before and after the current page
  const pageNumbers = []

  // Calculate the start and end of the page range
  const start = Math.min(Math.max(currentPage - pageRange, 1), Math.max(totalPages - 4, 1))
  const end = Math.min(start + 4, totalPages)

  // Add the page numbers to the array
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i)
  }

  const handlePageClick = (pageNumber: number): void => {
    onPageChange(pageNumber)
  }

  const handleFirstPageClick = (): void => {
    onPageChange(1)
  }

  const handleLastPageClick = (): void => {
    onPageChange(totalPages)
  }

  return (
    <ul className='inline-flex gap-3 relative'>
      {currentPage !== 1 && (
        <li
          className='cursor-pointer'
          onClick={handleFirstPageClick}>
          First
        </li>
      )}

      {currentPage > 1 && (
        <li
          className='cursor-pointer '
          onClick={() => {
            handlePageClick(currentPage - 1)
          }}>
          Prev
        </li>
      )}

      {currentPage > 3 && <li className='cursor-pointer '>...</li>}

      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={`cursor-pointer ${
            pageNumber === currentPage
              ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
              : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
          }`}
          onClick={() => {
            handlePageClick(pageNumber)
          }}>
          {pageNumber}
        </li>
      ))}

      {currentPage < totalPages - 2 && <li className=' cursor-pointer '>...</li>}

      {currentPage < totalPages && (
        <li
          className='cursor-pointer '
          onClick={() => {
            handlePageClick(currentPage + 1)
          }}>
          Next
        </li>
      )}

      {currentPage !== totalPages && (
        <li
          className='cursor-pointer '
          onClick={handleLastPageClick}>
          Last
        </li>
      )}
    </ul>
  )
}

export default FilterPagination
