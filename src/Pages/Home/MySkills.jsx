import React, { useState, useEffect } from 'react';
import data from "../../data/index.json";

export default function MySkills() {
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll('.skills--section--card');
    let maxCardHeight = 0;
    cards.forEach(card => {
      const cardHeight = card.clientHeight;
      if (cardHeight > maxCardHeight) {
        maxCardHeight = cardHeight;
      }
    });
    setMaxHeight(maxCardHeight);
  }, []);

  return (
    <section className="skills--section" id="mySkills" style={{ marginBottom: '100px' }}>
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container" style={{ height: `${maxHeight}px` }}>
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card" style={{ height: '100%' }}>
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
