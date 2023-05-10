import React from "react";
import Container from "../../../shared/Container/Container";
import HeadText from "../../../shared/HeadText";
import ParagraphText from "../../../shared/ParagraphText";
import { PORTFOLIO_DATA } from "./portFolioData";
import Title from "../../../shared/Title/Title";
const PortFolio: React.FC = () => {
  return (
    <section className="my-40 px-10">
      <Container>
        <div className="mb-40">
        <Title>
            Our Portfolio
        </Title>
        </div>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
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
        </div>
      </Container>
    </section>
  );
};

export default PortFolio;
