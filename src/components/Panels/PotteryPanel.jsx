import React from "react";
import bgPhoto from "../../assets/pottery1.jpg";
import Menu from "../Menu/Menu.jsx";


export default function ProfilePanel({ panel, changeBackground, changePanel }) {
  return (
    <div id="profilePanel" style={{ backgroundImage: `url(${bgPhoto})`}} className="flex w-full h-full rounded-lg bg-cover items-center justify-end">
    </div>
  );
};