import React, { useContext, useEffect, useState } from "react";
import { HeroContext } from "../../context/HeorContext/heroContext";
import HeroText from "./HeroText";
import arrow from "../../assets/icons/arrow.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero: React.FC = () => {
  const [selectedImage, setImage] = useState("");
  const [selectedImageOne, setImageOne] = useState("");
  const { image, imageOne } = useContext(HeroContext);
  useEffect(() => {
    if (image) {
      setImage(image);
      setImageOne(imageOne);
    }
  }, [image, imageOne]);

  return (
    <header
      className="relative w-full max-h-[100rem] overflow-hidden before:absolute before:left-0 before:top-0 before:z-50 before:h-full before:w-full before:bg-[rgba(0,0,0,.4)]"
    >
      <AnchorLink href="#service">
        <img
          src={arrow}
          alt="arrow"
          className="absolute bottom-60 left-1/2 z-[700]  w-8 -translate-x-1/2 brightness-0 invert opacity-50"
        />
      </AnchorLink>
      <HeroText />
      <section
        className={`overflow-hidden bg-living2-room bg-cover bg-center transition-all duration-[2s] ${
          selectedImageOne.split(" ")[0]
        } -z-10`}
      >
        <div
          className={`h-screen w-full  bg-cover  bg-center bg-no-repeat   ${
            selectedImage ? selectedImage : "bg-living3-room"
          } transition-all duration-300`}
        ></div>
      </section>
    </header>
  );
};

export default Hero;
