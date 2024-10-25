import React, { useState, useEffect } from "react";
import profilePhoto from "../../assets/uncroppedHeadshot.jpg";
import greenMoonJar from "../../assets/greenMoonJar.jpg"
import sunrise from "../../assets/sunrise.jpg"


export default function ProfilePanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <div 
      id="profilePanel"
      className={`flex w-full overflow-auto items-center justify-between transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} pt-24`}>
      <img src={profilePhoto} className="w-1/3 p-12"></img>
      <img src={greenMoonJar} className="w-1/3 p-12"></img>
      <img src={sunrise} className="w-1/3 p-12"></img>
    </div>
  );
};