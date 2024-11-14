import researchPhoto from "../../../src/assets/ExperiencePanel/croppedResearchImage.jpg"
import bootcampImage from "../../../src/assets/ExperiencePanel/developerDesk2.jpg"
import cta from "../../../src/assets/ExperiencePanel/sagMIP2.jpg"

const jobExperience = [
  {
    "organization": "Software for Research",
    "title": "Software Engineer",
    "dates": "August 2023 - Present",
    "description": "Software for Research creates web applications for researchers conducting behavioral health studies at institutions such as Johns Hopkins University, the MD Anderson Cancer Center, and Harvard University. The main functionality of these apps revolve around automating the sending and receiving of text messages and collection of biometric data, and preparing reports for researchers.",
    "accomplishments": [
      "Created and implemented a webhook and database models to automate the ordering of and collection of weight data from Bodytrace scales, a remote, API-enabled weight tracking device.", 
      "Designed and implemented a new method of grouping and dynamically selecting text message content based on the individual attributes of participants, streamlining and enhancing the main functionality of the application while maintaining backwards compatibility.",
      "Enabled the visualization and CSV download of study-specific  text-message based surveys",
      "More than doubled test coverage with meaningful unit and integration tests."],
    "website": "https://www.softwareforresearch.com/",
    "titlePhoto": researchPhoto
  },
  {
    "organization": "Turing School of Software and design",
    "title": "Student (Back-end Engineering)",
    "dates": "January 2023 - August 2023",
    "description": "Turing is an eight-month, 1,500 hour ACCET-accredited software engineering program. During this program, I spent ~70 hours per week learning everything from the basics of OOP and TDD to database and web architecture, while working in teams of 2-8 developers using AGILE methodologies to create and deploy full-stack web applications.",
    "website": "https://turing.edu/",
    "titlePhoto": bootcampImage
  },
  {
    "organization": "Fusion Medical Staffing",
    "title": "Travel CT Technologist",
    "dates": "January 2022 - December 2022",
    "description": "During my time at fusion, I traveled to hospitals which faced understaffing due to the pandemic. As a radiologic imaging technologist, it was my job to work and communicate with an interdisciplinary team to collect and deliver accurate health data in often life or death circumstances.",
    "website": "https://www.fusionmedstaff.com/",
    "titlePhoto": cta
  }
];

export default jobExperience;