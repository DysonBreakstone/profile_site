import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from "../ScrollToTop.jsx";
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
        
  return (
    <Router>
      <main className="bg-primary-bg w-screen h-screen">
        <div className="w-full h-full overflow-auto no-scrollbar" id="contentBox">
          <ScrollToTop />
          <Menu key="menu" panel={currentPanel.activePanel} changePanel={changePanel} />
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<AboutPanel key={currentPanel.activePanel} />} />
            <Route path="/experience" element={<ExperiencePanel key={currentPanel.activePanel} />} />
            <Route path="/projects" element={<ProjectsPanel key={currentPanel.activePanel} />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App
