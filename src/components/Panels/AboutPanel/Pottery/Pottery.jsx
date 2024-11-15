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
    <section id="potterySubPanel" className="about-section bg-accent-bg flex items-center justify-center">
      <div className="about-section-content">
        <div className="flex flex-col w-full items-center">
          <h1 id="potteryBlurb" className="flex h-full w-full text-end mb-16 text-primary-text">
            I also make ceramics
          </h1>
          <div id="pottery carousel" className="flex w-full justify-between items-stretch h-full relative">
            <div id="leftArrow" className="flex h-full items-center justify-center bg-black bg-opacity-30 w-1/4">
              <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pr-1 size-12 hover:cursor-pointer text-black h-20" onClick={() => handleCarouselIncrement(-1)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <img src={`../../../../src/assets/AboutPanel/Pottery/pottery${carouselPointer}.jpg`} className="h-96 w-auto max-w-1/2"></img>
            <div id="rightArrow" className="flex h-full items-center justify-center bg-black bg-opacity-30 w-1/4">
              <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 hover:cursor-pointer text-black h-20" onClick={() => handleCarouselIncrement(1)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}