import React from "react";
import { DUMMY_PROPERTIES } from "./FeaturedCardData";
import { FaMap } from "react-icons/fa";
import Button from "../../../shared/Button/Button";
import { motion } from "framer-motion";
interface FeaturedCardProps {
  className?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ className = "" }) => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const childVariant = {
    hidden: {opacity: 0, scale:0.9},
    visible: {opacity: 1, scale:1},
}
  const cards = DUMMY_PROPERTIES.map((prop) => (
    <motion.div
      key={prop.id}
      className="flex  h-[50rem] flex-col justify-between overflow-hidden rounded-lg bg-white drop-shadow-xl"
      variants={childVariant}
    >
      <figure className="h-[55%] w-full overflow-hidden">
        <img
          src={prop.image}
          alt="property-image"
          className="h-full w-full object-cover"
        />
      </figure>
      <article className="space-y-8 px-10">
        <h3 className="text-[25px] font-bold leading-7">
          {prop.propertyTitle}
        </h3>
        <address className="flex items-center gap-4 capitalize text-gray-600 ">
          <FaMap /> {prop.propertyLocation}
        </address>
        <ul>
          <li>
            {" "}
            <span className="text-[1.4rem] text-gray-600">
              {" "}
              property Type
            </span>{" "}
            :{" "}
            <p className="inline font-bold uppercase">{prop.property.type} </p>
          </li>
          <li>
            {" "}
            <span className="text-[1.4rem]  text-gray-600">
              {" "}
              property Type
            </span>{" "}
            :{" "}
            <p className="inline font-bold uppercase">
              {prop.property.status}{" "}
            </p>
          </li>
        </ul>
      </article>
      <div className="flex">
        <Button
          type="button"
          className="w-1/2 px-24 text-red-gtext transition-all duration-300 hover:bg-red-gtext hover:text-white"
        >
          Explore
        </Button>
        <Button
          primary={true}
          type="button"
          className="w-1/2 px-24 text-white transition-all duration-300 hover:bg-red-gtext hover:text-white"
        >
          Invest
        </Button>
      </div>
    </motion.div>
  ));
  return (
    <motion.div
      id="top"
      className={`mt-8 grid max-h-[140rem] w-full grid-cols-1 gap-32 overflow-hidden py-40 transition-all duration-300 sm:grid-cols-2 md:grid-cols-3  md:py-12  ${className}`}
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.5  }}
      variants={container}
    >
      {cards}
    </motion.div>
  );
};

export default FeaturedCard;
