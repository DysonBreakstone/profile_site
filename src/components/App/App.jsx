import React, { useState } from "react";
import ProfilePanel from "../Panels/ProfilePanel.jsx"
import PotteryPanel from "../Panels/PotteryPanel.jsx"
import { THEME_COLORS } from "../../constants/themeColors.js";
import Menu from "../Menu/Menu.jsx"
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

  let panel;
  
  switch(currentPanel) {
    case "Dyson Breakstone":
      panel = <ProfilePanel key={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "About":
      panel = <AboutPanel key={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Experience":
      panel = <ExperiencePanel key={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Projects":
      panel = <ProjectsPanel key={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Pottery":
      panel = <PotteryPanel key={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    }

  return (
    <main className="w-screen h-screen p-8 ease-in ease-out duration-300" style={{background: `${mainBgColor}`}}>
      <container>
        {panel}
        <Menu panel={currentPanel} changeBackground={changeBackground} changePanel={changePanel} />
      </container>
    </main>
  )
}

export default App
