import pizzaOven from "../../../../assets/AboutPanel/pizzaOven.jpg"
import perfusionStudy from "../../../../assets/AboutPanel/perfusionStudy.jpg"
import developerDesk from "../../../../assets/AboutPanel/developerDesk.jpg"
import "../AboutPanel.css"

export default function Snapshot({handleImageLoaded, isLoaded}) {
  return (
    <section key={"snapshotSubsection"} className="flex w-3/4 h-full justify-between items-center overflow-hidden">
      <section id="photoContainer" className="flex flex-col h-full w-1/2 overflow-auto no-scrollbar">
        <img src={`${pizzaOven}` } onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }} className="border-b-2"/>
        <img src={`${developerDesk}` } onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }} className="border-b-2"/>
        <img src={`${perfusionStudy}` } onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }} className="border- border-x-2"/>
      </section>
      <section id="aboutInfo" className="flex flex-col h-full border-slate-700 justify-center items-center p-8 gap-2 w-1/2 rounded-md bg-white bg-opacity-60 shadow-lg">
        <div id="aboutDescription" className="flex flex-col text-slate-700 indent-4 text-wrap gap-2">
          <p>
            Although this website is styled using Tailwind, I've always been a bootstrapper.
          </p>
          <p>
            I grew up in Calais, Vermont, a town with one paved road and a general store. 
            I've always loved technology, but I didn't have the opportunity to 
            attend a university after graduating high school. Up until 2013 when I moved
            to Colorado, I worked a number of jobs in the restaurant and service industry 
            while volunteering as an EMT.
          </p>
          <p>
            After moving to Colorado, I worked my way through an Associates degree in radiologic 
            technology and began a career in medical imaging. By taking travel assignments to 
            understaffed hospitals during the pandemic, I was finally able to put enough money
            aside to attend the Turing school, the finest programming bootcamp in the state.
          </p>
          <p>
            I began my first role as a Software engineer in August of 2023, and I hope to have 
            a long career doing what I love in tech.
          </p>
        </div>
      </section>
    </section>
  )
}