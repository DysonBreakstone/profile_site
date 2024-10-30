import React, { useState } from "react";
import maroonBells from "../../../../src/assets/AboutPanel/maroonBells.jpg"
import AboutSubMenu from "./AboutSubMenu/AboutSubMenu.jsx";


export default function AboutPanel() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subPanel, setSubPanel] = useState("Snapshot")
  
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const changeSubPanel = (newSubPanel) => {
    setSubPanel(newSubPanel);
  };

  return (
    <div 
      id="aboutPanel" 
      className={`flex overflow-auto flex w-full h-full bg-cover items-top justify-left transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {!isLoaded && <div id="loading"> Loading... </div>}
      <section id="aboutContent" className="flex w-3/4 h-full justify-between items-center">
        <section id="aboutPhotoContainer" className="flex h-max p-6 max-w-1/3">
          <img src={`${maroonBells}` } className="max-h-96 min-w-72 grow rounded-full" onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }}/>
        </section>
        <section id="aboutInfo" className="flex flex-col h-2/3 justify-center border-slate-700 m-6 p-6 w-2/3 rounded-md bg-white bg-opacity-60">
          <p id="aboutDescription" className="text-slate-700 indent-4 text-justify">
            I am an early-career software engineer with 1.5 years of experience in web development.
            My experience is primarily back-end focused, working with data-heavy web applications, 
            and my first love will always be developing databases and APIs. However, during my time 
            working in a startup environment, I have gained experience in nearly every facet of web 
            development, including UI/UX design, database management, and direct collaboration with 
            clients.
          </p>
        </section>
      </section>
      <AboutSubMenu subPanel={subPanel} changeSubPanel={changeSubPanel}/>
    </div>
  );
};