import React, { useState, useEffect } from "react";
import bgPhoto from "../../assets/pottery1.jpg";


export default function PotteryPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div 
      id="potteryPanel" 
      className={`overflow-auto flex w-full h-full rounded-lg bg-cover items-center justify-end transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundImage: `url(${bgPhoto})`}}>

    </div>
  );
};