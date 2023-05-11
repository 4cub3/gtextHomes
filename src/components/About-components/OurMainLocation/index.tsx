import React from "react";
import Container from "../../../shared/Container/Container";
import Title from "../../../shared/Title/Title";
import {motion} from 'framer-motion';
const OurMainLocation: React.FC = () => {
  // min-w-[20rem] min-h-[14rem] 
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
  return (
    <section className="overflow-hidden px-10 mt-40">
      <Container>
        <div className="mb-60">
        <Title>
            Our Main Location
        </Title>
        </div>
        <div className="flex items-center justify-center">
          <motion.div className="grid grid-cols-1 gap-20  sm:grid-cols-3 md:grid-cols-4"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             variants={container}
          >
            <motion.figure className="bg-Nigeria bg-cover bg-center w-[30rem] h-[25rem] sm:w-[30rem] sm:h-[20rem] md:max-w-[25rem]  flex items-end justify-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-slate-900" variants={childVariant}>
              <figcaption className="text-white px-6 font-bold text-[2.5rem] z-10 text-center">NIGERIA</figcaption>
            </motion.figure>
            <motion.figure className="bg-Dubai bg-cover bg-center w-[30rem] h-[25rem] sm:w-[30rem] sm:h-[20rem] md:max-w-[25rem] flex items-end justify-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-slate-900" variants={childVariant}>
              <figcaption className="text-white px-6 font-bold text-[2.5rem] z-10 text-center">DUBAI</figcaption>
            </motion.figure>
            <motion.figure className="bg-UK bg-cover bg-center w-[30rem] h-[25rem] sm:w-[30rem] sm:h-[20rem] md:max-w-[25rem] flex items-end justify-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-slate-900" variants={childVariant}>
              <figcaption className="text-white px-6 font-bold text-[2.5rem] z-10 text-center">UNITED KINGDOM</figcaption>
            </motion.figure>
            <motion.figure className="bg-US bg-cover bg-center w-[30rem] h-[25rem] sm:w-[30rem] sm:h-[20rem] md:max-w-[25rem] flex items-end justify-center relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:to-slate-900" variants={childVariant}>
              <figcaption className="text-white px-6 font-bold text-[2.5rem] z-10 text-center">UNITED STATES</figcaption>
            </motion.figure>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurMainLocation;
