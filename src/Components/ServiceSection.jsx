import React from 'react';
const servicesData = [
  {
    id: 1,
    title: 'Sample Services 1',
    description: 'Our services sample text lorem ipsum dolor sit amet. ',
  },
  {
    id: 2,
    title: 'Sample Services 2',
    description: 'Our services sample text lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    title: 'Sample Services 3',
    description: 'Our services sample text lorem ipsum dolor sit amet.',
  },
];
function ServiceSection() {
  return (
    <section id="services" className="services-section">
      <div className="services service-bg-image">
        {servicesData.map((service) => (
          <div key={service.id} className="service">
            <ul>
              <div className="heading">
                <h3>{service.title}</h3>
                <li>{service.description}</li>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
