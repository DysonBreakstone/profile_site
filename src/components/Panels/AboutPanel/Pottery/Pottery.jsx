import React, { useState } from "react";
import "./Pottery.css"
import potteryInfo from "../../../../constants/AboutPanel/Pottery/potteryInfo.js"

export default function Pottery() {
  const [carouselPointer, setCarouselPointer] = useState(0);
  const potCount = Object.keys(potteryInfo).length

  function handleCarouselIncrement(i) {
    setCarouselPointer((carouselPointer + i + potCount) % potCount)
  }

  return (
    <section id="potterySubPanel" className="flex w-3/4 items-center justify-start">
      <div id="potteryBlurb" className="flex h-full potteryBlurb bg-white bg-opacity-90 flex-col items-center text-center w-1/3 pt-28 text-slate-700 p-4">
        <p className="p-4 rounded-sm gap-4 indent-4 text-justify">
          I've been making pottery off and on for about three years.
        </p>
        <p className="p-4 rounded-sm gap-4 indent-4 text-justify">
          Here are some pieces that I've made at my local community maker space, the <a href="https://tinkermill.org/">Tinkermill</a>.
        </p>
      </div>
      <div id="pottery carousel" className="flex w-2/3 justify-center items-center h-full relative">
        <div className="bg-white bg-opacity-70 flex-col items-center text-center text-slate-700 p-4 absolute bottom-6 rounded-sm">
          <p>
            {potteryInfo[carouselPointer]}
          </p>
        </div>
        <div id="leftArrow" className="flex h-full items-center justify-center bg-black bg-opacity-30 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pr-1 size-12 hover:cursor-pointer hover:text-black text-white h-20" onClick={() => handleCarouselIncrement(-1)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <img src={`../../../../src/assets/AboutPanel/Pottery/pottery${carouselPointer}.jpg`} className="h-full w-auto"></img>
        <div id="rightArrow" className="flex h-full items-center justify-center bg-black bg-opacity-30 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 hover:cursor-pointer hover:text-black text-white h-20" onClick={() => handleCarouselIncrement(1)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>

      </div>
    </section>
  )
}