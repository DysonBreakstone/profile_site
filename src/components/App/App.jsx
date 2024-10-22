import React, { useState } from "react";
import ProfilePanel from "../Panels/ProfilePanel.jsx";
import PotteryPanel from "../Panels/PotteryPanel.jsx";
import AboutPanel from "../Panels/AboutPanel.jsx";
import ExperiencePanel from "../Panels/ExperiencePanel.jsx";
import ProjectsPanel from "../Panels/ProjectsPanel.jsx";
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
      panel = <ProfilePanel key={currentPanel.activePanel} />;
      break;
    case "About":
      panel = <AboutPanel key={currentPanel.activePanel} />;
      break;
    case "Experience":
      panel = <ExperiencePanel key={currentPanel.activePanel} />;
      break;
    case "Projects":
      panel = <ProjectsPanel key={currentPanel.activePanel} />;
      break;
    case "Pottery":
      panel = <PotteryPanel key={currentPanel.activePanel} />;
      break;
    }

  return (
    <main className="w-screen h-screen overflow-auto p-8 ease-in ease-out duration-300" style={{background: `${currentPanel.backgroundColor}`}}>
      <div className="w-full h-full rounded-lg" id="contentBox" style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
        {panel}
        <Menu panel={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />
      </div>
    </main>
  )
}

export default App
