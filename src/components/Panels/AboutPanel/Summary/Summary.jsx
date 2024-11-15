import React from "react";
import "../AboutPanel.css"
import dbDiagram from "../../../../assets/AboutPanel/web-database-design.png"

export default function Summary() {
  return (
    <section id="summary" className="about-section bg-accent-bg">
      <div id="summaryContent" className="flex flex-col md:flex-row about-section-content justify-center items-center px-4 md:px-0">
        <div className="flex flex-col md:w-1/3">
          <h1 className="w-full mb-8">
            Full Stack Web Development
          </h1>
          <p className="about-subPanel-paragraph mb-4">
            Specializing in developing and scaling Database Solutions, Webhooks and APIs.
          </p>
        </div>
        <img src={dbDiagram} className="md:w-2/3"></img>
      </div>
    </section>
  )
}