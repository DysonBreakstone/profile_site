import React, { useState } from "react";
import AboutSubMenu from "./AboutSubMenu/AboutSubMenu.jsx";
import Snapshot from "./Snapshot/Snapshot.jsx"
import PersonalLife from "./PersonalLife/PersonalLife.jsx"
import LifeStory from "./LifeStory/LifeStory.jsx"
import Pottery from "./Pottery/Pottery.jsx"


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
      className={`flex flex-col no-scrollbar w-full overflow-auto`}>
      <div className="flex flex-col w-full h-full">
        <Snapshot />
        <PersonalLife />
        {/*<LifeStory />
        <Pottery /> */}
      </div>
      {/* <AboutSubMenu subPanel={subPanel} changeSubPanel={changeSubPanel}/> */}
    </div>
  );
};