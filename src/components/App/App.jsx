import React, { useState } from "react";
import ProfilePanel from "../Panels/ProfilePanel/ProfilePanel.jsx";
import AboutPanel from "../Panels/AboutPanel/AboutPanel.jsx";
import ExperiencePanel from "../Panels/ExperiencePanel/ExperiencePanel.jsx";
import ProjectsPanel from "../Panels/ProjectsPanel/ProjectsPanel.jsx";
import { THEME_COLORS } from "../../constants/themeColors.js";
import Menu from "../Menu/Menu.jsx"
import './App.css'

function App() {
  const [currentPanel, setCurrentPanel] = useState({backgroundColor: THEME_COLORS.default, activePanel: "About"});

  const changePanel = (tab) => {
    setCurrentPanel({ backgroundColor: THEME_COLORS[tab], activePanel: tab });
  };

  let content;
  
  switch(currentPanel.activePanel) {
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
  };

  return (
    <main className="bg-primary-bg w-screen h-screen">
      <div className="w-full h-full overflow-auto no-scrollbar" id="contentBox">
        <Menu key="menu" panel={currentPanel.activePanel} changePanel={changePanel} />
        {content}
      </div>
    </main>
  )
}

export default App
