import React from "react";
import ecg from "../../../../assets/AboutPanel/History/ecg.svg"
import leaf from "../../../../assets/AboutPanel/History/leaf.svg"
import platter from "../../../../assets/AboutPanel/History/platter.svg"
import gradCap from "../../../../assets/AboutPanel/History/gradCap.svg"
import compdb from "../../../../assets/AboutPanel/History/compdb.png"

export default function History() {
  return (
    <div className="about-section justify-start flex-col gap-8 items-center py-12">
      <div className="about-section-content flex-col items-center">
        <div className="flex w-full items-start">
          <h1 className="mb-12 text-secondary-text">My History</h1>
        </div>
        <div className="flex gap-4 items-center mb-12">
          <img src={compdb} className="h-10"></img>
          <p className="experience-card-paragraph">
            Prior to my career in Software Development, I gained experience in:
          </p>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col w-1/2 gap-4">
            <div className="flex gap-4 items-center">
              <img src={ecg} className="h-6"></img>
              <p className="experience-card-paragraph">
                Healthcare and Emergency Medicine
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={gradCap} className="h-6"></img>
              <p className="experience-card-paragraph">
                Education
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={leaf} className="h-6"></img>
              <p className="experience-card-paragraph">
                Environmental Nonprofit
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={platter} className="h-6"></img>
              <p className="experience-card-paragraph">
                Service and Hospitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}