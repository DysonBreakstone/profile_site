import React from "react";
import { Link } from 'react-router-dom';
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
              <Link to={`/${tab.toLowerCase()}`} className="text-primary-text hover:text-primary-text">{tab}</Link>
          </p>
        </div>
    </li>
  );
  
  return (
    <nav className="flex w-full justify-end px-2 fixed border-accent-bg border-2 bg-gray bg-opacity-90 top-0 p-2 h-12 text-primary-text z-50 md:px-8">
      <ul className="flex gap-8 md:gap-12 p-2 pb-2 justify-end mr-4 md:">{menuItems}</ul>
    </nav>
  );
};