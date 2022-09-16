import React from 'react';
import Market1 from '/Images/market-1.png';
import Market2 from '/Images/market-2.png';
import TwoColumn from './TwoColumn';

function MarketAnalysis() {
  return (
    <>
      <TwoColumn isRTL={true} img={Market1} title="Understand the market easily" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit ex labore perferendis eius veniam?" />
      <TwoColumn img={Market2} title="Get the deep knowledge about market" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit ex labore perferendis eius veniam?" />
    </>
    // <div className="market-analysis">
    //   <div className="market">
    //     <div className="market-description">
    //       <h1>Understand the market easily</h1>
    //       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sit ex labore perferendis eius veniam?</p>
    //     </div>
    //     <div className="market-img">
    //       <img src={Market1} alt="" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default MarketAnalysis;
