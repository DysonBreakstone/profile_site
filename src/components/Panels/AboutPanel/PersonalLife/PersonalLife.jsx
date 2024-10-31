import maroonBells from "../../../../assets/AboutPanel/maroonBells.jpg";

export default function PersonalLife({handleImageLoaded, isLoaded}) {
  return (
    <section key={"personalSubsection"} id="aboutContent" className="flex w-3/4 h-full justify-between items-center overflow-hidden">
      <section id="aboutPhotoContainer" className="flex justify-center w-1/2">
        <img src={`${maroonBells}` } onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }}/>
      </section>
      <section id="aboutInfo" className="flex flex-col h-full border-slate-700 p-8 w-1/2 rounded-md bg-white bg-opacity-60 justify-center items-center shadow-lg">
        <div id="aboutDescription" className="flex flex-col text-slate-700 indent-4 text-wrap gap-2">
          <p>
            I live in Boulder, Colorado with my partner Helen. When I'm not programming, I enjoy hiking, rock climbing, running and road cycling.
          </p>
          <p>
            I also love international travel. I've visited eight countries over the last five years, and I plan to visit many more in the future.
          </p>
          <p>
            My indoor hobbies include making pottery, reading, keeping up with Formula 1, and playing overly complicated boardgames.
          </p>
        </div>


      </section>
    </section>
  )
}