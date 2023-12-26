import React from 'react'

interface Item {
  id: number
  item: string
  qty: number
  price: number
}

interface DetailCartProps {
  items: Item[]
  handleChangeItems: (val: Item[]) => void
}

function DetailCart({ items, handleChangeItems }: DetailCartProps) {
  const addItem = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
    handleChangeItems(updatedItems)
  }

  const reduceItem = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
    )
    handleChangeItems(updatedItems)
  }

  const calculateItemTotal = (item: Item) => {
    return item.qty * item.price
  }

  const calculateTotalAmount = () => {
    let total = 0
    items.forEach((item) => {
      total += calculateItemTotal(item)
    })
    return total.toFixed(2) // Assuming 2 decimal places for the total amount
  }

  return (
    <>
      <div className='flex flex-col gap-4 my-4 font-inter text-lg'>
        {items.map((item) => (
          <div
            className='flex gap-4'
            key={item.id}>
            <div className='border bg-stone-200 px-6 py-2 font-black shadow-md rounded-md w-full h-full flex justify-between'>
              <div>{item.item}</div>
              <div>$ {item.price}</div>
              <div>{item.qty}</div>
              <div>$ {calculateItemTotal(item)}</div> {/* Display the total price for each item */}
            </div>
            <button
              className='bg-[#2abb3e] h-7 w-7'
              onClick={() => {
                addItem(item.id)
              }}>
              +
            </button>
            <button
              className='bg-red-600 h-7 w-7'
              onClick={() => {
                reduceItem(item.id)
              }}>
              -
            </button>
          </div>
        ))}
      </div>
      <div className='flex gap-x-56 font-montserrat text-xl'>
        <span>Total Amount</span>
        <span className='underline'>$ {calculateTotalAmount()}</span>{' '}
        {/* Display the total amount */}
      </div>
    </>
  )
}

export default DetailCart
