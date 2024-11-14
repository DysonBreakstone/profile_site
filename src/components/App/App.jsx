import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
  };

  return (
    <Router>
      <main className="bg-primary-bg w-screen h-screen">
        <div className="w-full h-full overflow-auto no-scrollbar" id="contentBox">
          <Menu key="menu" panel={currentPanel.activePanel} changePanel={changePanel} />
          {content}
        </div>
      </main>
    </Router>
  )
}

export default App
