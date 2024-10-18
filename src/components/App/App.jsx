import React, { useState } from "react";
import ProfilePanel from "../Panels/ProfilePanel.jsx"
import PotteryPanel from "../Panels/PotteryPanel.jsx"
import { THEME_COLORS } from "../../constants/themeColors.js";
import Menu from "../Menu/Menu.jsx"
import './App.css'

function App() {
  const [currentPanel, setCurrentPanel] = useState({backgroundColor: THEME_COLORS.default, activePanel: "Dyson Breakstone"});

  const changePanel = (tab) => {
    console.log(tab)
    setCurrentPanel({ backgroundColor: THEME_COLORS[tab], activePanel: tab })
  }

  const changeBackground = (hoveredTab) => {
    setCurrentPanel({backgroundColor: hoveredTab, activePanel: currentPanel.activePanel })
  }

  let panel;
  
  switch(currentPanel.activePanel) {
    case "Dyson Breakstone":
      panel = <ProfilePanel key={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "About":
      panel = <AboutPanel key={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Experience":
      panel = <ExperiencePanel key={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Projects":
      panel = <ProjectsPanel key={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    case "Pottery":
      console.log(currentPanel.activePanel)
      panel = <PotteryPanel key={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />;
      break;
    }

  return (
    <main className="w-screen h-screen p-8 ease-in ease-out duration-300" style={{background: `${currentPanel.backgroundColor}`}}>
      <container>
        {panel}
        <Menu panel={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />
      </container>
    </main>
  )
}

export default App
