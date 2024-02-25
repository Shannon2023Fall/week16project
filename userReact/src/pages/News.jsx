import React from 'react';

const News = () => {
  return (
    <div className="container">
      <div className="frontpage">
        <div className="fp-cell fp-cell--1">
          <div class="fp-item">E-scooters to hit the streets of Germany</div>
          <a href="https://www.dw.com/en/e-scooters-can-hit-german-streets-after-upper-house-approval/a-48769886" target="_blank">
            <img src="https://source.unsplash.com/random/300x200" alt="News Preview" />
          </a><br />
        </div>
        <div className="fp-cell fp-cell--2">
          <div class="fp-item">Correction: 65% of all E-Scooter accidents with personal injuries occurred in large cities in 2022</div>
          <a href="https://www.destatis.de/DE/Presse/Pressemitteilungen/2023/05/PD23_N028_462.html#:~:text=Data%20ranges%20from%2011.7%20to%2064.9.&text=End%20of%20interactive%20chart.,waren%20es%20noch%205%20Todesopfer." target="_blank">
            <img src="https://source.unsplash.com/random/300x200" alt="News Preview" />
          </a><br />
        </div>
        <div className="fp-cell fp-cell--3">
          <div class="fp-item">SPIEGEL TV: E-Scooter vs. Fussgänger - Kampf um die Strasse</div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/z2-7cRimafE?si=Hq46XL5bl_Om-Clo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="fp-cell fp-cell--4">
          <div class="fp-item">End of electric scooters in Paris: French capital completely bans hire scooters from its streets</div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/kU0Cqyjjtwc?si=n6In8p3inPGQYM3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default News;
