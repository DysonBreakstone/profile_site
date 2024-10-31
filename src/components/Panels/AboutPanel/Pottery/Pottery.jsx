import React, { useState } from "react";
import "./Pottery.css"
import potteryInfo from "../../../../constants/AboutPanel/Pottery/potteryInfo.js"

export default function Pottery() {
  const [carouselPointer, setCarouselPointer] = useState(1);

  function handleCarouselIncrement(i) {
    let nextPhoto = carouselPointer + i;
    nextPhoto < 0 ? setCarouselPointer(4) : setCarouselPointer(nextPhoto % 5)
  }

  return (
    <section id="potterySubPanel" className="flex w-3/4 items-center justify-start">
      <div id="potteryBlurb" className="flex flex-col justify-center items-end text-end w-1/3 bg-white bg-opacity-60 text-slate-700 p-4 rounded-md indent-4 gap-4 ml-4">
        <p>
          {potteryInfo[carouselPointer]}
        </p>
      </div>
      <div id="pottery carousel" className="flex w-2/3 justify-center items-center h-full">
        <div id="leftArrow" className="flex h-full items-center justify-center bg-black bg-opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pr-1 size-12 hover:cursor-pointer hover:text-black text-white h-20" onClick={() => handleCarouselIncrement(-1)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <img src={`../../../../src/assets/AboutPanel/Pottery/pottery${carouselPointer}.jpg`} className="h-full w-auto"></img>
        <div id="rightArrow" className="flex h-full items-center justify-center bg-black bg-opacity-30">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 hover:cursor-pointer hover:text-black text-white h-20" onClick={() => handleCarouselIncrement(1)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </div>
    </section>
  )
}