import React, { useState, useEffect } from "react";
import { HeroContext } from "./heroContext";

interface HeroContextProps {
  children: React.ReactNode;
}

const HeroContextProvider: React.FC<HeroContextProps> = ({ children }) => {
  const [count, setCount] = useState(1);
  const [image, setImage] = useState("bg-living-room animate-living1");
  const [imageOne, setImageOne] = useState("bg-living-room");

  const [border, setBorder] = useState(false)
  const imageArray: string[] = [
    '',
    "bg-living1-room animate-living1",
    "bg-living2-room animate-living2",
    "bg-living3-room  animate-living3",
  ];
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCount((prev) => {
        if (prev > imageArray.length - 1) {
          prev = 0;
        }
        return prev + 1;
      });
      setBorder(prev => !prev)
      setImage(imageArray[count]);
      setImageOne(imageArray[Math.floor(Math.random()*4)]);
     
    }, 5000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [count]);

  const values = {
    imageOne,
    image,
    border
  };
  return <HeroContext.Provider value={values}>{children}</HeroContext.Provider>;
};

export default HeroContextProvider;
