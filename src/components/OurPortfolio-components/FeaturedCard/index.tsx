import React from "react";
import Container from "../../../shared/Container/Container";
import FeaturedCard from "../../Home-components/FeaturedProperty/FeaturedCard";

const FCard: React.FC = () => {
  return (
    <section className="mt-40 px-10">
      <Container>
        <FeaturedCard className="overflow-y-scroll max-h-[170rem]"/>
      </Container>
    </section>
  );
};

export default FCard;
