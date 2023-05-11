import React from "react";
import Container from "../../../shared/Container/Container";
import SplitImage from "../../../shared/SplitImage";
import image from "../../../assets/images/Living-room2.jpg";
import HeadText from "../../../shared/HeadText";
import ParagraphText from "../../../shared/ParagraphText";
import { motion } from "framer-motion";

const WhyNotGtext: React.FC = () => {
  return (
    <section>
      <Container>
        <motion.div className="md:flex items-center gap-40 my-20 px-10 space-y-20 md:space-y-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}>
        <SplitImage image={image} />
        <article>
          <HeadText>Why Not Gtext</HeadText>
          <ParagraphText>
            Times and seasons come and go, but we stay strong in adding positive
            value to humanity. Our bedrock stands on smart digitalized workflow
            aimed at constant innovation that doesn’t fall below the industry’s
            standard without infringing on your comfort. We are also sensitive
            to your numerous needs and we believe in providing world-class
            services now and well into the future.
          </ParagraphText>
          <ParagraphText>
            We are trailblazers light years ahead, while others are stuck using
            the same techniques that stagnantly works. We apply a
            custom-tailored approach as we do not believe in the one size fits
            all real estate solutions. Be it landed properties or a home we will
            tailor our services to suit your individual needs.
          </ParagraphText>
        </article>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyNotGtext;
