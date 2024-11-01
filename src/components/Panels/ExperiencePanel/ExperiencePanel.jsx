import React, { useState, useEffect } from "react";
import jobExperience from "../../../constants/ExperiencePanel/jobExperience";
import "../Panel.css"


export default function ExperiencePanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const jobs = jobExperience.map(job =>
    <li
      key={`${job["organization"]}Card`} className="flex h-auto">
        <div className="experience-card">
          <div className="flex h-20 gap-4">
          <div className="flex items-center justify-center">
            <img src={job.logoUrl} className="aspect-auto h-full rounded-xl"></img>
          </div>
          <div className="flex flex-col w-1/2 justify-center border-y-2 border-l-2 pl-4">
            <h3 className="pb-1" >{job.organization}</h3>
            <a href={job["website"]} className="mb-1 w-max">Visit the website</a>
          </div>
          </div>
          <div className="pb-2 border-b-2 w-full text-end mb-6">
            <h5 className="text-slate-700 pb-1">{job.title}</h5>
            <h5 className="text-slate-700 pb-1">{job.dates}</h5>
          </div>
          <p className="font-bold mb-2">Description</p>
          <p className="indent-4 mb-2">{job.description}</p>
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
      className={`h-full overflow-auto flex w-full bg-cover justify-left transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <ul className="flex flex-col gap-2">
          {jobs}
        </ul>
    </div>
  );
};