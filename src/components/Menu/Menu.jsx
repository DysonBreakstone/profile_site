import React from "react";
import profileTabs from "../../constants/Menu/profileTabs.js";

export default function Menu({ panel, changePanel }) {

  const menuItems = profileTabs.map(tab =>
    <li
      key={tab} 
      className="flex justify-center items-center box-border w-1/3">
        <div className="flex text-end box-border">
          <p 
            style={{ fontSize: tab === panel ? '1.5rem' : '1.25rem' }}
            className={`flex box-border ${tab === panel ? 'border-dark' : 'border-transparent'} ease-in ease-out duration-300 hover:cursor-pointer border-b-2`}
            onClick={() => changePanel(tab)}>
              {tab}
          </p>
        </div>
    </li>
  );
  
  return (
    <nav className="flex w-full justify-between px-4 fixed border-accent-bg border-2 bg-gray bg-opacity-90 top-0 p-2 h-12 text-primary-text z-50 px-8">
      <div>
        <a href="#snapshot" className="text-dark hover:text-dark" style={{ fontSize: '1.25rem'}}>Contact</a>
      </div>
      <ul className="flex gap-6 p-2">{menuItems}</ul>
    </nav>
  );
};