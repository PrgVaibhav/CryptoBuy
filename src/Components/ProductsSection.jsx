import React from 'react';
import Bitcoin from '/Images/bitcoin.png';
import Etherium from '/Images/etherium.png';
import Dogecoin from '/Images/dogecoin.png';
import Binace from '/Images/binace.png';
import Litecoin from '/Images/litecoin.png';
import Zcash from '/Images/zcash.png';
const productData = [
  {
    id: 1,
    img: { Bitcoin },
    title: 'Bitcoin',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.',
  },
  {
    id: 2,
    img: { Etherium },
    title: 'Etherium',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.',
  },
  {
    id: 3,
    img: { Dogecoin },
    title: 'DogeCoin',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.',
  },
  {
    id: 4,
    img: { Binace },
    title: 'Binace',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.',
  },
  {
    id: 5,
    img: { Litecoin },
    title: 'LiteCoin',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.',
  },
  {
    id: 6,
    img: { Zcash },
    title: 'ZCash',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.',
  },
];

function ProductsSection() {
  return (
    <div id="products" className="products-section">
      <h3 className="product-header">Crypto Currency we offer</h3>
      <div className="product-flex">
        {productData.map((product) => {
          return (
            <div key={product.id} className="product">
              <div className="product-img">
                <figure>
                  <img src={product.img} alt="" />
                </figure>
              </div>
              <div className="product-description">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
              </div>
            </div>
          );
        })}
        {/* <div className="product">
          <div className="product-img">
            <figure>
              <img src={Bitcoin} alt="" />
            </figure>
          </div>
          <div className="product-description">
            <h1>Products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio dolor quibusdam sint.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ProductsSection;
