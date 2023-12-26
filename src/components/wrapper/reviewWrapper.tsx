/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect, useState } from 'react'

interface ReviewListProps {
  items: Array<{
    src: string
    text: string
    name: string
  }>
}

const intervalTime = 1000 // set interval time

const reviewList = [
  {
    src: './1.png',
    text: '1984 is a classic dystopian novel that is as relevant today as it was when it was first published in 1949. The story takes place in a totalitarian society where citizens are closely monitored and controlled by the government. Orwells writing is compelling, and the characters are well-developed. This book is a must-read for anyone interested in political science, sociology, or literature.',
    name: 'Finnegan Black'
  },
  {
    src: './2.png',
    text: 'The Alchemist is a simple yet profound book that explores the themes of destiny, purpose, and the power of the universe. The main character, Santiago, is a shepherd who goes on a journey to fulfill his personal legend. The book is written in a simple and easy-to-understand style, which makes it accessible to readers of all ages. Overall, The Alchemist is a thought-provoking and inspiring read.',
    name: 'Ava Rodriguez'
  },
  {
    src: './3.png',
    text: 'To Kill a Mockingbird is a timeless classic that tackles the sensitive issue of racial injustice. The story is told from the perspective of Scout, a young girl growing up in the deep South during the 1930s. The characters are richly drawn, and the themes of prejudice, courage, and morality are explored in a thought-provoking way. This book is a must-read for anyone interested in social justice, human rights, or history.',
    name: 'Liam Patel'
  },
  {
    src: './4.png',
    text: 'The Hitchhiker Guide to the Galaxy is a science fiction classic that is quirky, irreverent, and downright bizarre. The story follows the misadventures of Arthur Dent, an ordinary man who finds himself caught up in a series of intergalactic hijinks. The humor is wry and satirical, and the writing is imaginative and playful. While this book may not be for everyone, it is a fun and entertaining read for those who appreciate offbeat humor and zany storytelling.',
    name: 'Penelope Flores'
  }
]

function Review({ items }: ReviewListProps): JSX.Element {
  return (
    <div>
      {items.map((item, index) => (
        <div
          className='flex flex-col justify-center items-center gap-6 w-[585px] h-[382px] '
          key={items.length}>
          <img
            src={item.src}
            className='w-[81px] h-[90px] rounded-sm'
          />
          <span className='font-inter font-normal text-xs text-center items-center justify-center'>
            {item.text}
          </span>
          <img
            src='./iconTestimoni.png'
            alt=''
          />
          <span className='font-inter font-semibold text-xs text-center items-center justify-center tracking-[.3em]'>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

const ReviewWrapper = (): React.ReactElement => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === reviewList.length - 1 ? 0 : currentSlide + 1
      )
    }, intervalTime)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='pt-[100px]'>
      <div
        style={{
          backgroundImage: 'url(./bannerReview.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        className='flex justify-between items-center w-auto h-[383px] gap-[10px] z-[-10]'>
        <div className='container justify-center items-center mx-auto flex px-4 w-full sm:py-[20px]  pt-[200px] pb-10'>
          <Review items={[reviewList[currentSlide]]} />
        </div>
      </div>
    </div>
  )
}

export default ReviewWrapper
