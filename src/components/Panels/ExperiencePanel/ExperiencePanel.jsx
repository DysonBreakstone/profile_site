import jobExperience from "../../../constants/ExperiencePanel/jobExperience";


import "./ExperiencePanel.css"



export default function ExperiencePanel() {

  const jobs = jobExperience.map((job, i) =>
    <li
      key={`${job["organization"]}Card`} className="experience-card" style={{ background: (i % 2 == 0) ? "#e5e9ef" : "#f4f7fa" }}>
        <div className="experience-card-content flex-col items-center">
          <div className="flex bg-cover h-64 w-full" style={{ backgroundImage: `url(${job["titlePhoto"]})` }}>
            <div className="flex flex-col w-full h-full bg-dark bg-opacity-65 p-8 text-dark gap-1 text-white justify-between">
              <div className="flex flex-col w-full h-full">
                <h2 className="mb-2">{job.organization}</h2>
                <h5 className="experience-card-paragraph text-white">{job.title}</h5>
                <h5 className="experience-card-paragraph text-white">{job.dates}</h5>
              </div>
              <div className="flex w-full justify-end">
                <a href={job["website"]} className="w-max text-light-blue font-bold hover:text-light-blue hover:underline">Visit the website</a>
              </div>
            </div>
          </div>
          <div className="experience-blurb w-4/5">
            <p className="font-bold mb-8">About the Company</p>
            <p className="indent-4 mb-2 experience-card-paragraph mb-8">{job.description}</p>
            {job["accomplishments"] &&
              <div>
                <p className="font-bold mb-8">Notable contributions</p>
                <ul className="list-disc px-8 experience-card-paragraph">
                  {job["accomplishments"].map(acc =>
                    <li className="mb-2">
                      {acc}
                    </li>
                  )}
                </ul>
              </div>
            }
          </div>
        </div>
    </li>
    )

  return (
    <div 
      id="profilePanel"  
      className={`flex flex-col no-scrollbar overflow-auto w-full items-center mt-12`}>
        <ul className="flex flex-col w-full">
          {jobs}
        </ul>
    </div>
  );
};