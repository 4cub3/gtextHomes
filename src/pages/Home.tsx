import React from 'react'
import Hero from '../components/Hero/Hero';
import OurService from '../components/Services';
import FeaturedProperty from '../components/FeaturedProperty';
import OurProperties from '../components/OurProperties';
import Gallery from '../components/Gallery';
import WhyNotGtext from '../components/WhyNotGtext';
import PortFolio from '../components/OurPortFolio';
import SignUp from '../components/SignUp';

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