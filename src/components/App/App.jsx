import React, { useState } from "react";
import ProfilePanel from "../ProfilePanel/ProfilePanel.jsx"
import './App.css'

function App() {
  const [mainBgColor, setMainBgColor] = useState("white");

  function changeBackgroundColor(color) {
    console.log("yo!")
  }

  return (
    <main className="w-full h-full rounded-lg">
      <ProfilePanel />
    </main>
  )
}

export default App
