import React, { useState } from "react";
import ProfilePanel from "../ProfilePanel/ProfilePanel.jsx"
import { BACKGROUND_COLORS } from "../../constants/colors.js";
import './App.css'

function App() {
  const [mainBgColor, setMainBgColor] = useState(BACKGROUND_COLORS.sixth);

  function changeBackgroundColor(color) {
    console.log("yo!")
  }

  function changeBackground(color) {
    this.setMainBgColor(color)
  }

  return (
    <main className="w-screen h-screen p-8" style={{background: `${mainBgColor}`}}>
      <ProfilePanel />
    </main>
  )
}

export default App
