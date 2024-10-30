import React from "react";
import profileTabs from "../../constants/Menu/profileTabs.js";
import { THEME_COLORS } from "../../constants/themeColors.js";
import profilePicture from "/src/assets/Menu/profilePicture.jpg"

export default function Menu({ panel, changeBackground, changePanel }) {
  let themeColor;

  function toggleTheme(tab) {
    themeColor = THEME_COLORS[tab];
    changeBackground(themeColor);
  };

  const menuItems = profileTabs.map(tab =>
    <li
      key={tab} 
      className="flex w-1/5 justify-center items-center box-border h-16"  
      onMouseEnter={(e) => toggleTheme(tab)}
      onMouseLeave={(e) => toggleTheme(panel)}>
        <div className="flex text-end box-border">
          <p 
            style={{ fontSize: tab === panel ? '1.875rem' : '1.5rem' }}
            className={`flex text-black font-bold box-border ${tab === panel ? 'border-black' : 'border-transparent'} ease-in ease-out duration-300 hover:cursor-pointer hover:border-black border-b-2`}
            onClick={() => changePanel(tab)}>
              {tab}
          </p>
        </div>
    </li>
  );
  
  return (
    <nav className="flex w-full justify-between shadow-lg px-4 fixed bg-white bg-opacity-70 top-0 z-50 p-2">
      <div id="profileIcon" className="rounded-full w-24 h-24 rounded-se-2xl shadow-2xl bg-cover" style={{ backgroundImage: `url(${profilePicture})`}}>
      </div>
      <ul className="flex w-full items-center justify-between p-2">{menuItems}</ul>
    </nav>
  );
};