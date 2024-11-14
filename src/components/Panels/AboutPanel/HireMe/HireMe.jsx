import React from "react";
import rocket from "../../../../assets/AboutPanel/HireMe/rocketSVG.svg";
import thumbsUp from "../../../../assets/AboutPanel/HireMe/thumbsUpSVG.svg";

export default function HireMe() {
  return (
    <div className="about-section bg-secondary-text pb-12 items-center">
      <div className="about-section-content">
        <h1 className="text-hero-text-accent min-w-1/3">
          I'm looking for work!
        </h1>
        <div className="flex flex-col px-8 gap-4">
          <div className="flex items-center gap-4">
            <img src={rocket} className="h-10"></img> 
            <p className="text-primary-bg">
              If you're looking for a tirelessly enthusiastic, hard working member to join your team, please feel free to contact me using the info at the{" "}
              <a href="/#snapshot" className="text-light-blue hover:underline hover:text-light-blue">top of this page</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src={thumbsUp} className="h-10"></img> 
            <p className="text-primary-bg">
              Let's connect and make something great together!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}