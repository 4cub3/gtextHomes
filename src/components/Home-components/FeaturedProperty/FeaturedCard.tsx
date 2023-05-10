import React from "react";
import { DUMMY_PROPERTIES } from "./FeaturedCardData";
import { FaMap } from "react-icons/fa";
import Button from "../../../shared/Button/Button";
interface FeaturedCardProps {
  className?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({className = ''}) => {
  const cards = DUMMY_PROPERTIES.map((prop) => (
    <div
    
      key={prop.id}
      className="h-[50rem]  flex flex-col justify-between overflow-hidden rounded-lg bg-white drop-shadow-xl"
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
        <address className="flex items-center gap-4 text-gray-600 capitalize ">
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
        <Button type="button" className="w-1/2 px-24 hover:bg-red-gtext text-red-gtext hover:text-white transition-all duration-300">
          Explore
        </Button>
        <Button primary={true} type="button" className="w-1/2 px-24 text-white hover:bg-red-gtext hover:text-white transition-all duration-300">
          Invest
        </Button>
      </div>
    </div>
  ));
  return <div id="top" className={`w-full mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32 py-6 transition-all duration-300 overflow-hidden  max-h-[140rem]  ${className}`}>{cards}</div>;
};

export default FeaturedCard;
