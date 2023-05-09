import React from "react";
import Container from "../../shared/Container/Container";
import HeadText from "../../shared/HeadText";
import Title from "../../shared/Title/Title";
import ParagraphText from "../../shared/ParagraphText";
import RoundText from "../../assets/icons/gsl.svg";
import SplitImage from "../../shared/SplitImage";
import BigImage from "../../assets/images/Living-room4.jpg";
import Button from "../../shared/Button/Button";
interface ServiceProps {}

const OurService: React.FC<ServiceProps> = ({}) => {
  return (
    <Container>
      <div
        id="service"
        className="absolute -top-40 left-0 z-[700] mx-10 md:mx-0 w-[92%] overflow-hidden sm:w-[70%] drop-shadow-xl"
      >
        <div className="w-full">
          <Button
            type="button"
            primary={false}
            className="bg-slate-100 text-[1.2rem] "
          >
            Buy
          </Button>
          <Button
            type="button"
            primary={true}
            className="text-[1.2rem] text-white"
          >
            Invest
          </Button>
        </div>
        <div className="w-full bg-slate-100 p-20 drop-shadow-lg flex justify-between items-center flex-wrap gap-10">
          <ul>
            <li className="font-semibold text-blue-10 mb-6 ">Locations</li>
            <li>
              <select name="" id="" className=" outline-none bg-transparent">
                <option value="">Select a City</option>
              </select>
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-blue-10 mb-6">Property Type</li>
            <li>
              <select name="" id="" className=" outline-none bg-transparent">
                <option value="">Change Property Type</option>
              </select>
            </li>
          </ul>
          <ul>
            <li className="font-semibold text-blue-10 mb-6">Price Range</li>
            <li>
              <select name="" id="" className=" outline-none bg-transparent">
                <option value="">Choose a range</option>
              </select>
            </li>
          </ul>
          <Button allRound={true} type="button" primary={true}> find</Button>
        </div>
      </div>
      <div className="relative mb-40 mt-[30rem] sm:mt-80 flex flex-col items-center gap-40 px-10 overflow-hidden md:flex-row">
        <article className="">
          <Title>Our service</Title>
          <HeadText>
            {" "}
            <img
              src={RoundText}
              alt="Green-Smart-luxury"
              className="absolute -top-32 right-0 hidden h-40 w-40 sm:block"
            />
            We focus on innovative, Green and smart properties
          </HeadText>
          <ParagraphText>
            We are the pioneers of the green and Smart estate program in Africa.
            Using the most advanced cutting-edge technology at our disposal. We
            are the pioneers of the green and Smart estate program in Africa.
            Using the most advanced cutting-edge technology at our disposal.
          </ParagraphText>
        </article>
        <div className="md:-order-1">
          <SplitImage image={BigImage} />
        </div>
      </div>
    </Container>
  );
};

export default OurService;
