import React from 'react';
import { ProductData } from './ProductData';

function ProductsSection() {
  return (
    <div id="products" className="products-section">
      <h3 className="product-header">Crypto Currency we offer</h3>
      <div className="product-flex">
        {ProductData.map((product) => {
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
      </div>
    </div>
  );
}

export default ProductsSection;
