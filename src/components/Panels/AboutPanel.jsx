import React, { useState, useEffect } from "react";
import { THEME_COLORS } from "../../constants/themeColors.js";
import maroonBells from "../../assets/maroonBells.jpg"


export default function AboutPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div 
      id="aboutPanel" 
      className={`flex overflow-auto flex w-full h-full rounded-lg bg-cover items-top justify-left transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
      <section id="aboutContent" className="flex w-full h-max justify-left">
        <section id="aboutPhotoContainer" className="flex h-max p-6">
          <img src={`${maroonBells}` } className="max-h-96 min-w-72 grow rounded-full" />
        </section>
        <section id="aboutInfo" className="flex flex-col w-auto grow border-slate-700 border-b-2 rounded-md m-6 p-6">
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
        <section id="aboutBuffer" className="flex min-w-96"></section>
      </section>


    </div>
  );
};