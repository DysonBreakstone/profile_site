import React from "react";
import ProfileMenu from "./ProfileMenu";


export default function Menu({ changeBackground }) {
  return (
    <nav className="flex flex-col bg-gray-700 bg-opacity-75 w-1/3 h-auto mr-6 py-8 rounded-lg gap-6 items-end">
      <div className="flex w-2/3 border-white border-b-2 justify-end p-2 pr-6">
        <h2 className="text-white">Dyson Breakstone</h2>
      </div>
      <ProfileMenu changeBackground = {changeBackground} />
    </nav>
  )
}