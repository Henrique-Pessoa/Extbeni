'use client'
import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
export default function Carousel({ slides }: any) {

  const [current, setCurrent]: any = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }

  let nextSlide = () => {
    if (current === (slides.length - 1)) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }


  return (
    <>
      <div className="overflow-hidden relative">
        <div className={`flex transition ease-in-out duration-40`} style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((s: any) => {
            return <img src={s} />
          })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide}>
            <FaArrowCircleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  )
}