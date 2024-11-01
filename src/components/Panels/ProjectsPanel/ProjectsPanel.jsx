import React, { useState, useEffect } from "react";
import projectsInfo from "../../../constants/ProjectsPanel/projectsInfo.js"

export default function ProjectsPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  let projects = projectsInfo.map(project =>
    <li className="flex w-1/3 justify-center m-4 text-black bg-white bg-opacity-75">
      {project.description}
    </li>
  )

  return (
    <div 
      id="projectsPanel" 
      className={`flex w-full h-full bg-cover items-center justify-end transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div id="projectsContainer" className="flex w-full h-full justify-between">
          <ul className="flex w-full">
            {projects}
          </ul>
        </div>
    </div>
  );
};