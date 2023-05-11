import React from "react";
import Container from "../../../shared/Container/Container";
import visionimage from "../../../assets/IdentityIcon/eye.svg";
import targetimage from "../../../assets/IdentityIcon/target.svg";
import goalimage from "../../../assets/IdentityIcon/sunrise.svg";
import Title from "../../../shared/Title/Title";
import Button from "../../../shared/Button/Button";
import {motion} from 'framer-motion';
const OurIdentity: React.FC = () => {
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
    <section className="mt-60 px-10">
      <Container>
        <div>
          <Title>Our Identity</Title>
        </div>
        <div className="mt-40 flex items-center justify-center">
          <motion.div className="grid grid-cols-1 gap-40 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}>
            <motion.div className=" relative flex w-[30rem] sm:w-[30rem] flex-col px-10  items-center justify-center gap-10 border-2  border-t-0 border-red-gtext py-16 after:absolute after:-left-2 after:top-0 after:h-full after:w-[105%] after:bg-gradient-to-t after:from-transparent after:to-white" variants={childVariant}>
              <p className="z-10 px-6 text-center text-[2rem] font-bold">
                Vision
              </p>
              <img src={visionimage} alt="vision" className="z-10" />
              <p className="text-center">
                To be the largest green and smart home developer in the world
              </p>
            </motion.div>
            <motion.div className=" relative flex w-[30rem] sm:w-[30rem] flex-col px-10 items-center justify-center gap-10 border-2  border-t-0 border-red-gtext py-16 after:absolute after:-left-2 after:top-0 after:h-full after:w-[105%] after:bg-gradient-to-t after:from-transparent after:to-white" variants={childVariant}>
              <p className="z-10 px-6 text-center text-[2rem] font-bold">
                Mission
              </p>
              <img src={targetimage} alt="vision" className="z-10" />
              <p className="text-center">
                To build the largest green and smart homes in the world using
                innovation and technology
              </p>
            </motion.div>
            <motion.div className=" relative flex w-[30rem] sm:w-[30rem] flex-col px-10  items-center justify-center gap-10 border-2  border-t-0 border-red-gtext py-16 after:absolute after:-left-2 after:top-0 after:h-full after:w-[105%] after:bg-gradient-to-t after:from-transparent after:to-white" variants={childVariant}>
              <p className="z-10 px-6 text-center text-[2rem] font-bold">
                Goal
              </p>
              <img src={goalimage} alt="vision" className="z-10" />
              <p className="text-center">
                To build 25,000 green and smart homes by the year 2035
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-40 flex items-center justify-center">
          <Button type="button" secondary={true}>
            Join us today
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurIdentity;
