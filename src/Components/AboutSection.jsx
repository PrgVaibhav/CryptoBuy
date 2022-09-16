import React from 'react';
import AboutSectionImg from '/Images/about.png';
import TwoColumn from './TwoColumn';
function AboutSection() {
  return <TwoColumn img={AboutSectionImg} title={'Why you will choose us'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} buttonLabel="Learn More &#8658;" />;
}

export default AboutSection;
