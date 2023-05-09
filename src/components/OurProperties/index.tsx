import React from "react";
import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import HeadText from "../../shared/HeadText";
import Arrow from "../../assets/icons/arrow.svg";
import OurPropertiesVideoCard from "./OurPropertiesVideoCard";
import ParagraphText from "../../shared/ParagraphText";
// import { FaArrowRight } from "react-icons/fa";
interface OurPropertiesProps {}

const OurProperties: React.FC<OurPropertiesProps> = ({}) => {
  return (
    <section className="mt-32 featured">
      <Container>
        <div className="flex w-full justify-end">
          <Title>Our Properties</Title>
        </div>
      </Container>
      <div className="w-full overflow-x-scroll px-10 mb-20">
        <div className="items-center justify-between gap-20 space-y-32 flex md:space-y-0 ">
          <article className="w-[70%] md:w-[28%] ml-auto">
            <HeadText>Check Out some of our Properties <span className=" ml-32 -mt-10 inline " > <img src={Arrow} alt="arrow" className=" -rotate-90 h-40 inline" /> </span></HeadText>
            <ParagraphText>
              We are the pioneers of the green and Smart estate program in
              Africa. Using the most advanced cutting-edge technology at
            </ParagraphText>
          </article>
         
          <div className="flex w-[30%] gap-16 py-10">
          <OurPropertiesVideoCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProperties;
