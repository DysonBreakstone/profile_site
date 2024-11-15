import React from "react";
import ecg from "../../../../assets/AboutPanel/History/ecg.svg"
import leaf from "../../../../assets/AboutPanel/History/leaf.svg"
import platter from "../../../../assets/AboutPanel/History/platter.svg"
import gradCap from "../../../../assets/AboutPanel/History/gradCap.svg"
import compdb from "../../../../assets/AboutPanel/History/compdb.png"

export default function History() {
  return (
    <div className="about-section flex-col gap-8 py-12 items-center">
      <div className="about-section-content flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <div className="flex w-full items-start">
            <h1 className="mb-8 text-secondary-text">My History</h1>
          </div>
          <div className="flex gap-4 items-center mb-12 w-full">
            <p className="experience-card-paragraph text-wrap md:w-full">
              Before becoming software engineer, I gained experience in a variety of fields.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-max">
          <div className="flex flex-col n gap-4">
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