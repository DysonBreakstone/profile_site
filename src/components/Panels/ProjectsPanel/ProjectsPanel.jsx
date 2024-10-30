import React, { useState, useEffect } from "react";
import { THEME_COLORS } from "../../../constants/themeColors";

export default function ProjectsPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div 
      id="projectsPanel" 
      className={`flex w-full h-full bg-cover items-center justify-end transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
    </div>
  );
};