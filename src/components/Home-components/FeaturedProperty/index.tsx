import React, { useContext } from "react";
import Container from "../../../shared/Container/Container";
import Title from "../../../shared/Title/Title";
import Button from "../../../shared/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import FeaturedCard from "./FeaturedCard";
import useMediaQuery from "../../../hooks/mediaQuery";
import { NavBarContext } from "../../../context/NavbarContext/navBarContext";
interface FeaturedPropertyProps {}

const FeaturedProperty: React.FC<FeaturedPropertyProps> = ({}) => {
  const isAboveScreen = useMediaQuery("(min-width:768px)");
  const { selectHandler } = useContext(NavBarContext);

  return (
    <section className="w-full px-10">
      <Container>
        <Title>Featured Properties</Title>
        {isAboveScreen && (
          <div className="mt-10 flex w-full justify-end">
            <Button
              type="button"
              className="ml-auto flex items-center gap-8 px-0 py-0 font-serif"
              link="/ourportfolio"
              onclick={() => {
                selectHandler('/ourportfolio')
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Explore All
              <FaArrowRight className={` transition-all duration-300`} />
            </Button>
          </div>
        )}
        <FeaturedCard className="max-h-[180rem] md:max-h-[55rem]" />
        {!isAboveScreen && (
          <div className="mt-10 w-full">
            <Button
              type="button"
              className="ml-auto flex items-center gap-8 px-0 py-0 font-serif"
              link="/ourportfolio"
              onclick={() => {
                selectHandler('/ourportfolio')
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              Explore All
              <FaArrowRight className={` transition-all duration-300`} />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProperty;
