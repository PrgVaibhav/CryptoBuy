import React from 'react';
import TwoColumn from './TwoColumn';
import HeroSectionImg from '/Images/crypto-main.png';

function HeroSection() {
  return <TwoColumn isRTL={true} spanText={'Save 30% on all deals'} img={HeroSectionImg} title={'Secure your crypto currency by using our services'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} buttonLabel="Try for free &#8658;" />;
  // return (
  //   <section className="hero-section">
  //     <div className="hero-section-header">
  //       <div className="hero-section-span">
  //         <span>Save 30% on all deals</span>
  //       </div>
  //       <div className="hero-section-title">
  //         <h1>Secure your crypto currency by using our services</h1>
  //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  //       </div>
  //       <div className="hero-section-btn">
  //         <button className="btn cta-btn">Try for free &#8658;</button>
  //       </div>
  //     </div>
  //     <div className="hero-section-img">
  //       <img src={HeroSectionImg} alt="" />
  //     </div>
  //   </section>
  // );
}

export default HeroSection;
