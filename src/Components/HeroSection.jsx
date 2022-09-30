import React from 'react';
import TwoColumn from './TwoColumn';
import HeroSectionImg from '/Images/crypto-main.png';

function HeroSection() {
  return <TwoColumn isRTL={true} spanText={'Save 30% on all deals'} img={HeroSectionImg} title={'Secure your crypto currency by using our services'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} buttonLabel="Try for free &#8658;" />;

}

export default HeroSection;
