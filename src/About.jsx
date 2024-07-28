import React from 'react';
import business from "./images/business.jpg"
import Common from './Common';
const About = () => {
  return (
    <>

      <Common name='Welcome To About Page' imgsrc={business} visit="/contact" btname="Contact Now" />

    </>
  )
}

export default About;
