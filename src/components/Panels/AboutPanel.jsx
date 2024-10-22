import React from "react";
import { THEME_COLORS } from "../../constants/themeColors.js";
import maroonBells from "../../assets/maroonBells.jpg"


export default function AboutPanel() {
  return (
    <div 
      id="aboutPanel" 
      className="flex overflow-auto flex w-full h-full rounded-lg bg-cover items-top justify-left"
      style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
      <section id="aboutContent" className="flex w-full h-max justify-left">
        <section id="aboutPhotoContainer" className="flex h-max p-6">
          <img src={`${maroonBells}` } className="max-h-96 min-w-72 grow rounded-full" />
        </section>
        <section id="aboutInfo" className="flex flex-col w-auto grow border-slate-700 border-b-2 rounded-md m-6 p-6">
          <h3 id="snapshot" className="text-slate-600 pb-6">Snapshot</h3>
          <p id="aboutDescription" className="text-slate-700 indent-4 text-justify">
            I am an early-career software engineer with 1.5 years of experience in web development.
            My experience is primarily back-end focused, working with data-heavy web applications, and my first love
            will always be building and working with relational databases. However, I have professional experience 
            in almost every aspect of web development from UI/UX to designing and consuming APIs, to customer satisfaction.
          </p>
          <p id="aboutPersonal" className="text-slate-700 indent-4 text-justify">
            I live in Boulder, Colorado with my partner Helen. When I'm not designing and implementing 
            world-class relational databases or spending time at the pottery studio, she and I are exploring
            Colorado's great outdoors or traveling the world together. 
          </p>
        </section>
        <section id="aboutBuffer" className="flex min-w-96"></section>
      </section>


    </div>
  );
};