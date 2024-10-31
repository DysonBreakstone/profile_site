import React, { useState } from "react";
import AboutSubMenu from "./AboutSubMenu/AboutSubMenu.jsx";
import Snapshot from "./Snapshot/Snapshot.jsx"
import PersonalLife from "./PersonalLife/PersonalLife.jsx"
import LifeStory from "./LifeStory/LifeStory.jsx"


export default function AboutPanel() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subPanel, setSubPanel] = useState("Snapshot")
  
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const changeSubPanel = (newSubPanel) => {
    setSubPanel(newSubPanel);
  };

  let content;
  
  switch(subPanel) {
    case "Snapshot":
      content = <Snapshot isLoaded={isLoaded} handleImageLoaded={handleImageLoaded} />;
      break;
    case "Personal/Hobbies":
      content = <PersonalLife isLoaded={isLoaded} handleImageLoaded={handleImageLoaded} />;
      break;
    case "Pottery":
      content = <Snapshot isLoaded={isLoaded} handleImageLoaded={handleImageLoaded} />;
      break;
    case "Life Story":
      content = <LifeStory isLoaded={isLoaded} handleImageLoaded={handleImageLoaded} />;
      break;
  }

  return (
    <div 
      id="aboutPanel" 
      className={`flex overflow-auto flex w-full h-full bg-cover items-top justify-end transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {!isLoaded && <div id="loading"> Loading... </div>}
      {content}
      <AboutSubMenu subPanel={subPanel} changeSubPanel={changeSubPanel}/>
    </div>
  );
};