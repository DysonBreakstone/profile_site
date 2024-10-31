import stellarator from "../../../../assets/AboutPanel/stellarator.jpg"

export default function Snapshot({handleImageLoaded, isLoaded}) {
  console.log(isLoaded)
  return (
    <section key={"snapshotSubsection"} id="aboutContent" className="flex w-3/4 h-full justify-between items-center overflow-hidden">
      <section id="aboutPhotoContainer" className="flex h-max justify-center w-1/2">
        <img src={`${stellarator}` } onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }}/>
      </section>
      <section id="aboutInfo" className="flex flex-col h-full border-slate-700 justify-center items-center p-8 gap-2 w-1/2 rounded-md bg-white bg-opacity-60 shadow-lg">
        <div id="aboutDescription" className="flex flex-col text-slate-700 indent-4 text-wrap gap-2">
          <p>
            I am an early-career software engineer with 1.5 years of experience in web development.
            My experience is primarily back-end focused, working with data-heavy web applications, 
            and my first love will always be developing databases and APIs. However, during my time 
            working in a startup environment, I have gained experience in nearly every facet of web 
            development, including UI/UX design, database management, QA/QC, and direct collaboration with 
            clients.
          </p>
          <p>
            I am currently seeking a full time role. If you have room on your team for a dedicated and 
            passionate developer, please reach out to me here.
          </p>
        </div>
      </section>
    </section>
  )
}