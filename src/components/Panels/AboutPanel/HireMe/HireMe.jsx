import React from "react";
import rocket from "../../../../assets/AboutPanel/HireMe/rocketSVG.svg";
import thumbsUp from "../../../../assets/AboutPanel/HireMe/thumbsUpSVG.svg";
import candidate from "../../../../assets/AboutPanel/HireMe/candidate.svg";

export default function HireMe() {
  return (
    <div className="about-section bg-secondary-text items-center">
      <div className="about-section-content items-center">
        <h1 className="text-hero-text-accent min-w-1/3">
          I'm currently seeking a full-time position
        </h1>
        <div className="flex flex-col px-8 gap-4">
          <div className="flex items-center gap-8">
            <img src={rocket} className="h-10"></img> 
            <p className="text-primary-bg">
              My greatest ambition is to join a software team where I can use my passion and experience to create solutions that improve people's lives.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <img src={candidate} className="h-10"></img> 
            <p className="text-primary-bg">
              If you're looking for a tirelessly enthusiastic, hard working member to join your team, please feel free to contact me using the info at the{" "}
              <a href="/#snapshot" className="text-light-blue hover:underline hover:text-light-blue">top of this page</a>
            </p>
          </div>
          <div className="flex items-center gap-8">
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