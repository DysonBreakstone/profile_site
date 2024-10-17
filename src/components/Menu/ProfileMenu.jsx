import React, { useState } from "react";
import profileTabs from "../../constants/profileTabs.js";
import { THEME_COLORS } from "../../constants/colors.js";

export default function ProfileMenu({ changeBackground }) {
  let themeColor; 

  function toggleTheme(e, tab) {
    themeColor = THEME_COLORS[tab];
    e.target.style.color = themeColor;
    e.target.style.borderColor = themeColor;
    changeBackground(themeColor);
  };

  const menuItems = profileTabs.map(tab =>
    <li
      key={tab} 
      className="flex w-2/3 justify-end p-6 pr-6 box-border"  
      onMouseEnter={(e) => toggleTheme(e, tab)}
      onMouseLeave={(e) => toggleTheme(e, "default")}
      onClick={() => changePanel(tab)}>
        <div className="flex text-end box-border">
            <h3 
              className="flex text-white box-border border-transparent hover:cursor-pointer hover:border-white border-b-2">
                {tab}
            </h3>
        </div>
    </li>
  );
  
  return (
    <ul className="flex flex-col w-2/3 items-end p-2 pr-6">{menuItems}</ul>
  );
};