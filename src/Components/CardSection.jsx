import React from 'react';
const sampleCardData = [
  {
    id: 1,
    title: '30B',
    description: 'Digital Currency Exchanged',
    fontAwesomeIcon: 'chart-column',
  },
  {
    id: 2,
    title: '100M+',
    description: 'Digital Currency Exchanged',
    fontAwesomeIcon: 'user',
  },
  {
    id: 3,
    title: '120+',
    description: 'In more than 120 countries',
    fontAwesomeIcon: 'globe',
  },
  {
    id: 4,
    title: 'Safety',
    description: 'We got you protected',
    fontAwesomeIcon: 'shield-heart',
  },
];

function CardSection() {
  return (
    <section className="cards-section">
      {sampleCardData.map((cardData) => {
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
