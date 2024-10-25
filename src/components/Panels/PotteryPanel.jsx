import React, { useState, useEffect } from "react";



export default function PotteryPanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div 
      id="potteryPanel" 
      className={`overflow-auto flex w-full h-full bg-cover items-center justify-end transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
    </div>
  );
};