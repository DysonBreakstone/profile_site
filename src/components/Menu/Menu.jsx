import React from "react";
import profileTabs from "../../constants/Menu/profileTabs.js";
import { THEME_COLORS } from "../../constants/themeColors.js";

export default function Menu({ panel, changeBackground, changePanel }) {
  let themeColor;

  function toggleTheme(tab) {
    themeColor = THEME_COLORS[tab];
    changeBackground(themeColor);
  };

  const menuItems = profileTabs.map(tab =>
    <li
      key={tab} 
      className="flex justify-center items-center box-border w-1/4"  
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
    <nav className="flex w-full justify-end shadow-lg px-4 fixed bg-white bg-opacity-70 top-0 z-50 p-2 h-16">
      <ul className="flex w-1/2 items-center justify-end p-2 gap-12">{menuItems}</ul>
    </nav>
  );
};