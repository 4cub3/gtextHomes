import React from "react";
import Container from "../../../shared/Container/Container";
import Title from "../../../shared/Title/Title";
import SplitImage from "../../../shared/SplitImage";
import HeadText from "../../../shared/HeadText";
import ParagraphText from "../../../shared/ParagraphText";
import image from '../../../assets/galleryImages/jacques-bopp-Hh18POSx5qk-unsplash.jpg';

const OurPortfolio: React.FC = () => {
  return (
    <section className="mt-60 px-10">
      <Container>
        <div className="gap-40 md:flex items-center">
          <article>
            <Title>Join us in building your smart future</Title>

            <div>
              <HeadText>Our Portfolio</HeadText>
              <ParagraphText>
                Building "smart" means merging innovative, and eco- friendly
                infrastructure that provides sustainability, growth and a
                lifestyle of wellness. In order to do so, we have achieved a
                strong understanding of the concept and are ready to ensure
                systematic organization and management of our estates with the
                aim of improving the state of living by providing contemporary
                infrastructure. You can bank on our promise as all our
                properties will host state-of-the-art technology including the
                following smart features: wireless charging parks, regulated
                pools, digital libraries, data hubs and recreational centers.
              </ParagraphText>
            </div>
          </article>

          <div>
            <SplitImage image={image} className="flex-row-reverse" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurPortfolio;
