import React, { useState, useEffect } from "react";
// import profilePhoto from "../../../assets/ProfilePanel/uncroppedHeadshot.jpg";
// import greenMoonJar from "../../../assets/ProfilePanel/greenMoonJar.jpg"
// import sunrise from "../../../assets/ProfilePanel/sunrise.jpg"


export default function ProfilePanel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <div 
      id="profilePanel"
      className={`flex w-full overflow-auto items-center justify-between transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <img src={profilePhoto} className="w-1/3 p-12"></img>
      <img src={greenMoonJar} className="w-1/3 p-12"></img>
      <img src={sunrise} className="w-1/3 p-12"></img>
    </div>
  );
};