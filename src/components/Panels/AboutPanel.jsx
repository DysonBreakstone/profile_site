import React from "react";
import profilePhoto from "../../assets/fullSizeHeadshot.jpg";
import Menu from "../Menu/Menu.jsx";


export default function ProfilePanel({ changeBackground }) {
  return (
    <div id="profilePanel" style={{ backgroundImage: `url(${profilePhoto})`}} className="flex w-full h-full rounded-lg bg-cover items-center justify-end">
      <Menu changeBackground={changeBackground} />
    </div>
  );
};