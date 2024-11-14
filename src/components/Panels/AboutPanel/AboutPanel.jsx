import React, { useState } from "react";
import Snapshot from "./Snapshot/Snapshot.jsx"
import History from "./History/History.jsx"
import Summary from "./Summary/Summary.jsx"
import Technologies from "./Technologies/Technologies.jsx"
import HireMe from "./HireMe/HireMe.jsx"



export default function AboutPanel() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subPanel, setSubPanel] = useState("Snapshot")
  
  return (
    <div 
      id="aboutPanel" 
      className={`flex flex-col no-scrollbar w-full overflow-auto items-center mt-12`}>
        <Snapshot />
        <Summary />
        <History />
        <Technologies />
        <HireMe />
    </div>
  );
};