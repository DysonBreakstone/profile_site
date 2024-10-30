import React, { useState } from "react";
import ProfilePanel from "../Panels/ProfilePanel/ProfilePanel.jsx";
import AboutPanel from "../Panels/AboutPanel/AboutPanel.jsx";
import ExperiencePanel from "../Panels/ExperiencePanel/ExperiencePanel.jsx";
import ProjectsPanel from "../Panels/ProjectsPanel/ProjectsPanel.jsx";
import { THEME_COLORS } from "../../constants/themeColors.js";
import Menu from "../Menu/Menu.jsx"
import './App.css'
import bgPhoto from "/src/assets/App/background5.jpg";

function App() {
  const [currentPanel, setCurrentPanel] = useState({backgroundColor: THEME_COLORS.default, activePanel: "Dyson"});

  const changePanel = (tab) => {
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
    <main className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full bg-cover pt-32" id="contentBox" style={{ backgroundImage: `url(${bgPhoto})`}}>
        <Menu key="menu" panel={currentPanel.activePanel} changeBackground={changeBackground} changePanel={changePanel} />
        {content}
      </div>
    </main>
  )
}

export default App
