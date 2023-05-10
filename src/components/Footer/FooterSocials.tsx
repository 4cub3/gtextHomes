import React, { useContext } from "react";
import Title from "../../shared/Title/Title";
import Button from "../../shared/Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavBarContext } from "../../context/NavbarContext/navBarContext";
import {
  FaAngleUp,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const FooterSocials: React.FC = () => {
  const { selectHandler } = useContext(NavBarContext);
  return (
    <section className="mt-40 justify-between space-y-28 sm:flex  sm:space-y-0">
      <article className=" text-white sm:w-2/5 ">
        <Title borderWhite={true}>About Us</Title>
        <p className="my-10  text-[12px] font-light ">
          We are the pioneers of the green and smart estate program in Africa.
          Using the most advanced cutting-edge technology at our disposal.
        </p>
        <Button
          allRound={true}
          secondary={true}
          type="button"
          link="/aboutus"
          onclick={() => {
            selectHandler("/aboutus");
            window.scrollTo({top: 0, left:0 , behavior:"smooth"});
          }}
        >
          Learn More
        </Button>
      </article>
      <article className="flex flex-wrap items-center gap-20 self-start text-white">
        <div className="z-50 w-full">
          <Title borderWhite={true}>Our Social Handles</Title>
          <ul className="mt-14 flex gap-10">
            <a target="_blank" href="https://www.facebook.com">
              <li className=" rounded-2xl border border-gray-700 p-6 text-4xl">
                <FaFacebook />
              </li>
            </a>
            <a target="_blank" href="https://www.twitter.com">
              <li className=" rounded-2xl border border-gray-700 p-6 text-4xl">
                <FaTwitter />
              </li>
            </a>
            <a target="_blank" href="https://www.instagram.com">
              <li className=" rounded-2xl border border-gray-700 p-6 text-4xl">
                <FaInstagram />
              </li>
            </a>
            <a target="_blank" href="https://www.google.com">
              <li className=" rounded-2xl border border-gray-700 p-6 text-4xl">
                <FaGoogle />
              </li>
            </a>
          </ul>
        </div>
        <AnchorLink
          href="#home"
          className="z-50 rounded-full border-2 border-gray-500 bg-gray-700 p-6"
        >
          <FaAngleUp />
        </AnchorLink>
      </article>
    </section>
  );
};

export default FooterSocials;
