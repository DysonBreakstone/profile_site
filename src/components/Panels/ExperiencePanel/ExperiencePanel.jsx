import React, { useState, useEffect } from "react";
import jobExperience from "../../../constants/ExperiencePanel/jobExperience";
import "./ExperiencePanel.css"


export default function ExperiencePanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const jobs = jobExperience.map(job =>
    <li
      key={`${job["organization"]}Card`} className="experience-card">
        <div className="experience-card-content flex-col">
          <div className="flex bg-cover h-40 w-full" style={{ backgroundImage: `url(${job["titlePhoto"]})` }}>
            <div className="flex flex-col w-full h-full bg-dark bg-opacity-65 p-8 text-dark gap-1 text-white justify-between">
              <div className="flex flex-col w-full h-full">
                <h3>{job.organization}</h3>
                <h5 className="experience-card-paragraph text-white">{job.title}</h5>
                <h5 className="experience-card-paragraph text-white">{job.dates}</h5>
              </div>
              <div className="flex w-full justify-end">
                <a href={job["website"]} className="mb-1 w-max text-light-blue font-bold hover:text-light-blue hover:underline">Visit the website</a>
              </div>
            </div>
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
      className={`flex flex-col no-scrollbar overflow-auto w-full items-center mt-20`}>
        <ul className="flex flex-col gap-2">
          {jobs}
        </ul>
    </div>
  );
};