import React from "react";
import profilePhoto from "./headshot6.jpg";
import Menu from "../Menu/Menu.jsx"

export default function ProfilePanel() {
  return (
    <div id="profilePanel" style={{ backgroundImage: `url(${profilePhoto})`}} className="flex w-full h-full rounded-lg bg-cover items-center justify-end">
      <Menu />
    </div>
  );
};