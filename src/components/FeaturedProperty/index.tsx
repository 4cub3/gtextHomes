import React, { useState } from "react";
import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import Button from "../../shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import FeaturedCard from "./FeaturedCard";
import useMediaQuery from "../../hooks/mediaQuery";
interface FeaturedPropertyProps {}

const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const isAboveScreen = useMediaQuery("(min-width:768px)");
  const handleClick = () => {
    setExpand((prev) => !prev);
  };
  return (
    <section className="w-full px-10">
      <Container>
        <Title>Featured Properties</Title>
        {isAboveScreen && (
          <div className="mt-10 w-full flex justify-end">
            <button
              type="button"
              className="ml-auto flex items-center gap-8 px-0 py-0 font-serif"
              onClick={handleClick}
            >
              {expand ? "Collapse" : "Explore All"}{" "}
              <FaArrowRight
                className={` transition-all duration-300 ${
                  expand ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        )}
        <FeaturedCard expand={expand} />
        {!isAboveScreen && (
          <div className="mt-10 w-full">
            <Button
              type="button"
              className="ml-auto flex items-center gap-8 px-0 py-0 font-serif"
              onclick={handleClick}
            >
              {expand ? "Collapse" : "Explore All"}{" "}
              <FaArrowRight
                className={` transition-all duration-300 ${
                  expand ? "rotate-90" : "rotate-0"
                }`}
              />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProperty;
