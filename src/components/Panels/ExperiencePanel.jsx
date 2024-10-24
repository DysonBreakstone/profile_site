import React, { useState, useEffect } from "react";
import { THEME_COLORS } from "../../constants/themeColors";
import jobExperience from "../../constants/jobExperience";
import "./Panel.css"

export default function ExperiencePanel({ changeBackground }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const jobs = jobExperience.map(job =>
    <li
      key={`${job["organization"]}Card`}>
        <div className="experience-card">
          <div className="flex w-full justify-between">
            <h3 className="pb-1" >{job["organization"]}</h3>
            <a href={job["website"]} className="mb-1">Visit the website</a>
          </div>
          <div className="pb-2 border-b-2 w-full text-end mb-6">
            <h5 className="text-slate-700 pb-1">{job["title"]}</h5>
            <h5 className="text-slate-700 pb-1">{job["dates"]}</h5>
          </div>
          <p className="font-bold mb-2">Description</p>
          <p className="indent-4 mb-2">{job["description"]}</p>
          {job["accomplishments"] &&
            <div>
              <p className="font-bold mb-2">My contributions</p>
              <ul className="list-disc px-8">
                {job["accomplishments"].map(acc =>
                  <li className="mb-2">
                    {acc}
                  </li>
                )}
              </ul>
            </div>
          }
        </div>
    </li>
    )

  return (
    <div 
      id="profilePanel"  
      className={`h-full pt-36 overflow-auto flex w-full bg-cover items-center justify-left transition-opacity duration-300 p-8 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
        <ul className="flex flex-col gap-6 space-y-4 w-2/3">
          {jobs}
        </ul>
    </div>
  );
};