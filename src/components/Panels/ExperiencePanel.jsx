import React from "react";
import { THEME_COLORS } from "../../constants/themeColors";

export default function ExperiencePanel({ changeBackground }) {
  return (
    <div 
      id="profilePanel"  
      className="flex w-full h-full rounded-lg bg-cover items-center justify-end"
      style={{ backgroundColor: THEME_COLORS["panelDiv"] }}>
    </div>
  );
};