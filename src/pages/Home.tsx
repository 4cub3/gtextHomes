import React from 'react'
import Hero from '../components/Home-components/Hero/Hero';
import OurService from '../components/Home-components/Services';
import FeaturedProperty from '../components/Home-components/FeaturedProperty';
import OurProperties from '../components/Home-components/OurProperties';
import Gallery from '../components/Home-components/Gallery';
import WhyNotGtext from '../components/Home-components/WhyNotGtext';
import PortFolio from '../components/Home-components/OurPortFolio';
import SignUp from '../components/Home-components/SignUp';

const Home:React.FC = () => {
  return (
    <>
        <Hero />
        <OurService />
        <FeaturedProperty />
        <OurProperties />
        <Gallery />
        <WhyNotGtext />
        <PortFolio />
        <SignUp />
    </>
  )
}

export default Home;