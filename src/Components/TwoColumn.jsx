import React from 'react';

function TwoColumn({ img, isRTL, spanText, title, description, buttonLabel, buttonLink }) {
  return (
    <section className="hero-section">
      <div style={{ order: isRTL ? 1 : 2 }} className="hero-section-header">
        {spanText && (
          <div className="hero-section-span">
            <span>{spanText}</span>
          </div>
        )}
        <div className="hero-section-title">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
        {buttonLabel && (
          <div className="hero-section-btn">
            <a href={buttonLink} className="btn cta-btn">
              {buttonLabel}
            </a>
          </div>
        )}
      </div>
      <div style={{ order: isRTL ? 2 : 1 }} className="hero-section-img">
        <img src={img} alt="" />
      </div>
    </section>
  );
}

export default TwoColumn;
