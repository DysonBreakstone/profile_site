import React from "react";
import profilePhoto from "../../assets/fullSizeHeadshot.jpg";


export default function ProfilePanel() {
  return (
    <div id="profilePanel" style={{ backgroundImage: `url(${profilePhoto})`}} className="flex w-full h-full rounded-lg bg-cover items-center justify-end">
    </div>
  );
};