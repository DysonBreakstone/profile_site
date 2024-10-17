import React, { useState } from "react";
import ProfilePanel from "../ProfilePanel/ProfilePanel.jsx"
import { THEME_COLORS } from "../../constants/colors.js";
import './App.css'

function App() {
  const [mainBgColor, setMainBgColor] = useState(THEME_COLORS.default);

  const changeBackground = (color) => {
    setMainBgColor(color)
  }

  return (
    <main className="w-screen h-screen p-8 ease-in ease-out duration-300" style={{background: `${mainBgColor}`}}>
      <ProfilePanel changeBackground={changeBackground} />
    </main>
  )
}

export default App
