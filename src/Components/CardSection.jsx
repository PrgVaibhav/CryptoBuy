import React from 'react';
import { CardData } from './CardData';
function CardSection() {
  return (
    <section className="cards-section">
      {CardData.map((cardData) => {
        return (
          <div key={cardData.id} className="card-section">
            <div className="card-icon">
              <i className={`fa-solid fa-${cardData.fontAwesomeIcon}`}></i>
            </div>
            <div className="card-detail">
              <h3>{cardData.title}</h3>
              <span>{cardData.description}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default CardSection;
