import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="container">
      <div className="frontpage">
        <div className="fp-cell fp-cell--1">
          <div class="fp-item">
            <a href="https://p.dw.com/p/3IdH4" target="_blank">
            <img src="https://static.dw.com/image/48184380_605.webp" alt="News Preview" />            
            E-scooters to hit the streets of Germany                 
            </a>
          </div>
        </div>
        <div className="fp-cell fp-cell--2">
          <div class="fp-item">
          <a href="https://www.destatis.de/DE/Presse/Pressemitteilungen/2023/05/PD23_N028_462.html#:~:text=Data%20ranges%20from%2011.7%20to%2064.9.&text=End%20of%20interactive%20chart.,waren%20es%20noch%205%20Todesopfer." target="_blank">
            <img src="./public/unfaelle-personenschaeden.png" alt="News Preview" />
            Correction: 65% of all E-Scooter accidents with personal injuries occurred in large cities in 2022
          </a>
          </div>
        </div>
        <div className="fp-cell fp-cell--3" fp-cell--border-top>
          <div class="fp-item">
          <iframe width="100%" height="100%" /* width="560" height="315" */ 
          src="https://www.youtube.com/embed/z2-7cRimafE?si=Hq46XL5bl_Om-Clo" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
          <a href="https://www.youtube.com/embed/z2-7cRimafE?si=Hq46XL5bl_Om-Clo" target="_blank">
          {/* SPIEGEL TV: E-Scooter vs. Fussgänger - Kampf um die Strasse */}
          </a>
          </div>
        </div>
        <div className="fp-cell fp-cell--4" fp-cell--border-top>
          <div class="fp-item">
          <iframe width="100%" height="100%" /* width="560" height="315" */ 
          src="https://www.youtube.com/embed/kU0Cqyjjtwc?si=n6In8p3inPGQYM3A" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
         <a href="https://www.youtube.com/embed/kU0Cqyjjtwc?si=n6In8p3inPGQYM3A" target="_blank">
         {/* End of electric scooters in Paris: French capital completely bans hire scooters from its streets */}
         </a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default News;
