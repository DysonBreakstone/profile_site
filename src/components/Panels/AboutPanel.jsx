import React, { useState } from "react";
import maroonBells from "../../assets/maroonBells.jpg"


export default function AboutPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true)
  }

  return (
    <div 
      id="aboutPanel" 
      className={`flex overflow-auto flex w-full h-full bg-cover items-top justify-left transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} pt-24`}>
        {!isLoaded && <div id="loading"> Loading... </div>}
      <section id="aboutContent" className="flex w-full h-max justify-left">
        <section id="aboutPhotoContainer" className="flex h-max p-6 max-w-1/3">
          <img src={`${maroonBells}` } className="max-h-96 min-w-72 grow rounded-full" onLoad={handleImageLoaded} style={{ display: isLoaded ? "flex" : "none" }}/>
        </section>
        <section id="aboutInfo" className="flex flex-col border-slate-700 m-6 p-6 max-w-1/3">
          <h3 id="snapshot" className="text-slate-600 pb-6">Snapshot</h3>
          <p id="aboutDescription" className="text-slate-700 indent-4 text-justify">
            I am an early-career software engineer with 1.5 years of experience in web development.
            My experience is primarily back-end focused, working with data-heavy web applications, 
            and my first love will always be developing databases and APIs. However, during my time 
            working in a startup environment, I have gained experience in nearly every facet of web 
            development, including UI/UX design, database management, and direct collaboration with 
            clients.
          </p>
          <p id="aboutPersonal" className="text-slate-700 indent-4 text-justify">
            I was born in Vermont, and now reside in Boulder, Colorado with my partner Helen. When 
            I'm not coding, I enjoy rock climbing, overly complicated boardgames, and traveling 
            abroad. 
          </p>
        </section>
        <section id="subNav" className="min-w-1/3">

        </section>
      </section>


    </div>
  );
};