import React from "react";
import Container from "../../shared/Container/Container";
import Title from "../../shared/Title/Title";
import FootAddress from "./FootAddress";
import FooterSocials from "./FooterSocials";

const Footer: React.FC = () => {
    const beforeBlop = `before:w-[80rem] before:h-[80rem] before:rounded-full before:blur-3xl before:top-[10rem] before:-left-[50rem] relative before:absolute before:opacity-10 before:bg-indigo-800`
    const afterBlop = `after:w-[80rem] after:-z-10 md:after:after:z-10 after:h-[80rem] after:rounded-full after:blur-3xl after:bottom-[-30rem] after:-right-[140.86px] relative after:absolute after:opacity-10 after:bg-indigo-800`
  return (
    <footer className={`w-full mt-40 h-full bg-blue-10 px-10 py-40 ${beforeBlop} ${afterBlop} overflow-hidden`}>
      <Container>
        <div className="text-white">
          <Title borderWhite={true}>Address</Title>
        </div>
        
        <FootAddress />
        <FooterSocials />
      </Container>
    </footer>
  );
};

export default Footer;
