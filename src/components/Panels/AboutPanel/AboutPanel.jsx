import React, { useState } from "react";
import AboutSubMenu from "./AboutSubMenu/AboutSubMenu.jsx";
import Snapshot from "./Snapshot/Snapshot.jsx"
import PersonalLife from "./PersonalLife/PersonalLife.jsx"
import LifeStory from "./LifeStory/LifeStory.jsx"
import Pottery from "./Pottery/Pottery.jsx"
import Summary from "./Summary/Summary.jsx"
import Technologies from "./Technologies/Technologies.jsx"


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
      className={`flex flex-col no-scrollbar w-full overflow-auto items-center`}>
        <Snapshot />
        <Summary />
        <Technologies />
        {/* <PersonalLife /> */}
        {/*<LifeStory />
        <Pottery /> */}
      {/* <AboutSubMenu subPanel={subPanel} changeSubPanel={changeSubPanel}/> */}
    </div>
  );
};