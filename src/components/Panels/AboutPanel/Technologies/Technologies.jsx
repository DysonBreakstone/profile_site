import React from "react";
import "../AboutPanel.css"
import technologyList from "../../../../constants/AboutPanel/technologies.js"

export default function Technologies() {

  const technologies = technologyList.map (tech =>
    <li className="flex flex-col items-center">
      <img src={`${tech[1]}`} className="h-12"></img>
      <p className="about-subPanel-paragraph">{tech[0]}</p>
    </li>
  );

  console.log(technologies)
  return (
    <section className="about-section bg-primary-bg justify-center content-center">
      <div className="about-section-content flex-col items-center">
        <h1 className="w-full text-start text-primary-text mb-12">Languages, frameworks, and tools</h1>
        <ul className="flex flex-wrap w-full justify-center gap-8 text-secondary-text">
          {technologies}
        </ul>
      </div>
    </section>
  );
}