import React from "react";
import Container from "../../../shared/Container/Container";
import TeamImage from "../../../shared/TeamImage";
import image from "../../../assets/teams/dsa.png";
import HeadText from "../../../shared/HeadText";
import {motion } from 'framer-motion';
interface MeetTheTeamProps {}

const MeetTheTeam: React.FC<MeetTheTeamProps> = () => {
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
        <div className="mb-20 text-center">
          <HeadText>Meet the Team</HeadText>
        </div>
        <div className="grid grid-cols-1">
          <div className="relative mx-auto mb-80">
            <TeamImage image={image} />
            <div className="absolute -bottom-[25rem] left-9 w-[30rem] space-y-2  rounded-xl bg-white p-10 shadow-2xl md:-right-[20rem] md:left-auto md:w-[40rem]">
              <h4 className="text-[2rem] font-bold">Dr. Stephen Akintayo</h4>
              <p className="text-[1.5rem] font-semibold">MD/CEO GTEXT GLOBAL</p>
              <p className="text-[1.2rem]">
                We started real estate subsidiary years ago and we've been in
                business for 14 years, and for us, when we decided to go into
                building houses, we said we cannot go the way others have gone;
                the world is going green, everybody is talking about climate
                change and we want to make a statement in Nigeria. We are not
                just talking about building green homes, we have started smart
                homes. What is unique about our housing scheme is that it's not
                just a smart home that residents will open, put on the light and
                the TV from the phone, it's an energy-efficient home, eco
                friendly, a home for the future. I don't see any better
                opportunities in terms of real estate investment than this.
                Welcome to the future.
              </p>
            </div>
          </div>
          <motion.div className="mx-auto mt-60 grid grid-cols-1 gap-32 sm:grid-cols-2  md:grid-cols-3"
         initial="hidden"
         whileInView="visible"
        //  viewport={{ once: true, amount: 0.5 }}
         variants={container}>
            <motion.div className="w-[30rem]" variants={childVariant}>
              <TeamImage image={image} className="w-[24rem]" width={true} />
              <article className="mt-20 rounded-lg p-8 text-center shadow-lg">
                <p className="text-[2rem] font-bold">Mr. Michael Raj</p>
                <p>CPO</p>
              </article>
            </motion.div>
            <motion.div className="w-[30rem]" variants={childVariant}>
              <TeamImage image={image} className="w-[24rem]" width={true} />
              <article className="mt-20 rounded-lg p-8 text-center shadow-lg">
                <p className="text-[2rem] font-bold">Mr. Michael Raj</p>
                <p>CPO</p>
              </article>
            </motion.div>
            <motion.div className="w-[30rem]" variants={childVariant}>
              <TeamImage image={image} className="w-[24rem]" width={true} />
              <article className="mt-20 rounded-lg p-8 text-center shadow-lg">
                <p className="text-[2rem] font-bold">Mr. Michael Raj</p>
                <p>CPO</p>
              </article>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MeetTheTeam;
