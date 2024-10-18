import React, { useState } from "react";
import ProfilePanel from "../Panels/ProfilePanel.jsx"
import PotteryPanel from "../Panels/PotteryPanel.jsx"
import { THEME_COLORS } from "../../constants/colors.js";
import './App.css'

function App() {
  const [mainBgColor, setMainBgColor] = useState(THEME_COLORS.default);
  const [currentPanel, setCurrentPanel] = useState("Dyson Breakstone")

  const changeBackground = (color) => {
    setMainBgColor(color || "white")
  }

  const changePanel = (tab) => {
    console.log(tab)
    setCurrentPanel(tab)
  }

  let content;
  
  switch(currentPanel) {
    case "Dyson Breakstone":
      content = <ProfilePanel panel={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "About":
      content = <AboutPanel panel={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Experience":
      content = <ExperiencePanel panel={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Projects":
      content = <ProjectsPanel panel={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Pottery":
      content = <PotteryPanel panel={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    }

  return (
    <main className="w-screen h-screen p-8 ease-in ease-out duration-300" style={{background: `${mainBgColor}`}}>
      {content}
    </main>
  )
}

export default App
