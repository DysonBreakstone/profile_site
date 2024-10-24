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
  const [currentPanel, setCurrentPanel] = useState({backgroundColor: THEME_COLORS.default, activePanel: "Dyson"});

  const changePanel = (tab) => {
    console.log(tab)
    setCurrentPanel({ backgroundColor: THEME_COLORS[tab], activePanel: tab })
  }

  const changeBackground = (hoveredTab) => {
    setCurrentPanel({backgroundColor: hoveredTab, activePanel: currentPanel.activePanel })
  }

  let content;
  
  switch(currentPanel.activePanel) {
    case "Dyson":
      content = <ProfilePanel key={currentPanel.activePanel} />;
      break;
    case "About":
      content = <AboutPanel key={currentPanel.activePanel} />;
      break;
    case "Experience":
      content = <ExperiencePanel key={currentPanel.activePanel} />;
      break;
    case "Projects":
      content = <ProjectsPanel key={currentPanel.activePanel} />;
      break;
    case "Pottery":
      content = <PotteryPanel key={currentPanel.activePanel} />;
      break;
    }

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full" id="contentBox" style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
        <Menu key="menu" panel={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />
        {content}
      </div>
    </main>
  )
}

export default App
