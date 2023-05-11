import React from "react";
import Container from "../../../shared/Container/Container";
import HeadText from "../../../shared/HeadText";
import ParagraphText from "../../../shared/ParagraphText";
import { PORTFOLIO_DATA } from "./portFolioData";
import Title from "../../../shared/Title/Title";
import {motion} from 'framer-motion'
const PortFolio: React.FC = () => {
  return (
    <section className="my-40 px-10">
      <Container>
        <div className="mb-40">
        <Title>
            Our Portfolio
        </Title>
        </div>
        <motion.div className="grid grid-cols-1 gap-16 sm:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
          <figure className="grid grid-cols-4 gap-8">
            {PORTFOLIO_DATA.map(itm =>(
                <img src={itm.icon} alt="estate-logo" key={itm.id} />
            ))}
          </figure>
          <article>
            <HeadText>
              We’ve worked to Ensure Quality in the following projects
            </HeadText>
            <ParagraphText>
              We are the pioneers of the green and Smart estate program in
              Africa. Using the most advanced cutting-edge technology at our
              disposal. We are the pioneers of the green and Smart estate
              program in Africa. Using the most advanced cutting-edge
            </ParagraphText>
          </article>
        </motion.div>
      </Container>
    </section>
  );
};

export default PortFolio;
