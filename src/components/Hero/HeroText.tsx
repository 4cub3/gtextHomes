import React, {useContext} from "react";
import { HeroContext } from "../../context/HeorContext/heroContext";

const HeroText: React.FC = () => {
    const {border} = useContext(HeroContext)
    const borderStyle = border? ' after:bottom-0 ' : 'after:top-0';
  return (
    <section className="absolute bottom-80 left-0 z-[600] w-full px-10">
      <article className="mx-auto max-w-[120rem]">
        <div className="sm:w-3/4 md:w-1/2  space-y-8">
          <h1 className={`relative font-serif text-[60px] sm:text-[75.32px] font-medium leading-[6.1rem] text-white after:absolute after:-left-11 after:h-1/2 after:w-[full] after:border-l-4 before:absolute before:-left-10 before:top-0 before:h-full before:w-[full] before:border-l ${borderStyle} transition-all duration-500 `}>
            Find your next <span>Green </span> Home.
          </h1>
          <p className="font-sans text-[14px] sm:text-[20.8px] font-[300] leading-[2.9rem] text-white">
            We are the pioneers of the green and Smart estate program in Africa.
            Using the most advanced cutting-edge technology at our disposal.
          </p>
          <button className="bg-[rgba(255,255,255, .4)] rounded-lg border px-12 py-4 font-sans text-[13px] font-semibold text-white backdrop-blur-lg">
            {" "}
            Explore
          </button>
        </div>
      </article>
    </section>
  );
};

export default HeroText;
