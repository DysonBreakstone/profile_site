import React, { useState, useEffect } from "react";
import profilePhoto from "../../assets/fullSizeHeadshot.jpg";


export default function ProfilePanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <div 
      id="profilePanel" 
      style={{ backgroundImage: `url(${profilePhoto})`}} 
      className={`flex w-full h-full bg-cover items-center justify-end transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
    </div>
  );
};