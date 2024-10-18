import React, { useState } from "react";
import profileTabs from "../../constants/profileTabs.js";
import { THEME_COLORS } from "../../constants/colors.js";

export default function Menu({ panel, changeBackground, changePanel }) {
  let themeColor;

  function toggleTheme(tab) {
    themeColor = THEME_COLORS[tab];
    changeBackground(themeColor);
  };

  const menuItems = profileTabs.map(tab =>
    <li
      key={tab} 
      className="flex w-full justify-end p-6 pr-6 box-border"  
      onMouseEnter={(e) => toggleTheme(tab)}
      onMouseLeave={(e) => toggleTheme("default")}>
        <div className="flex text-end box-border">
          <p 
            style={{ fontSize: tab === panel ? '1.875rem' : '1.5rem' }}
            className={`flex text-white box-border ${tab === panel ? 'border-white' : 'border-transparent'} ease-in ease-out duration-300 hover:cursor-pointer hover:border-white border-b-2`}
            onClick={() => changePanel(tab)}>
              {tab}
          </p>
        </div>
    </li>
  );
  
  return (
    <nav className="flex flex-col bg-gray-700 bg-opacity-75 w-1/3 h-auto mr-6 py-8 rounded-lg gap-6 items-end">
      <ul className="flex flex-col w-full items-end p-2 pr-6">{menuItems}</ul>
    </nav>
  );
};