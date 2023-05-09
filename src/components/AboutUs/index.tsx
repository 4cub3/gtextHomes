import React from "react";
import Container from "../../shared/Container/Container";
import HeadText from "../../shared/HeadText";
import ParagraphText from "../../shared/ParagraphText";
import SplitImage from "../../shared/SplitImage";
import image from "../../assets/galleryImages/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg";

const AboutUs: React.FC = () => {
  return (
    <section className="mt-32 px-10 overflow-hidden">
      <Container>
        <div className="md:flex items-center gap-40 my-20 space-y-20 md:space-y-0">
          <article>
            <HeadText>About Us</HeadText>
            <ParagraphText>
              Our primary objective is to build innovative green and smart homes
              that encourage a lifestyle of wellness and luxury through the
              provision of facilities and infrastructure designed for you
              comfort and overall wellbeing. Our properties span across the
              global sphere with branches in Nigeria, Dubai, U.S.A, U.K, amongst
              others. Our organization also hosts a number of subsidiaries that
              provide affiliate and investment opportunities on a global scale.
            </ParagraphText>
          </article>
          <div className="relative">
            <div className="absolute -top-28 left-16 z-10 hidden h-60 w-60 items-center justify-center bg-spiral bg-cover bg-center md:flex">
              <p className="rounded-lg bg-white px-10 py-2 text-[2rem] text-blue-gtext drop-shadow-2xl">
                Smart
              </p>
            </div>
            <div className="absolute -left-32 top-40 z-10 hidden h-60 w-60 items-center justify-center bg-spiral bg-cover bg-center md:flex">
              <p className="rounded-lg bg-white px-10 py-2 text-[2rem] text-blue-400 drop-shadow-2xl">
                Innovative
              </p>
            </div>
            <div className="absolute left-16 top-[35rem] z-10 hidden h-60 w-60 items-center justify-center bg-spiral bg-cover bg-center md:flex">
              <p className="rounded-lg bg-white px-10 py-2 text-[2rem] text-green-400 drop-shadow-2xl">
                Green
              </p>
            </div>
            <SplitImage image={image} className="flex-row-reverse" />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
