import React from "react";
import bgPhoto from "../../assets/pottery1.jpg";


export default function PotteryPanel() {
  return (
    <div id="potteryPanel" style={{ backgroundImage: `url(${bgPhoto})`}} className="overflow-auto flex w-full h-full rounded-lg bg-cover items-center justify-end">
    </div>
  );
};