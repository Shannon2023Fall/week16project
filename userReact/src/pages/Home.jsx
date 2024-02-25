import React from 'react';
import Carousel from './components/Carousel.jsx';
import Contact from './components/Contact.jsx';
import "./Home.css";

const Home = () => {

  return (
    <div>
      <div className="container">
        {/* <Carousel /> */}
        <div className="text-section">
          <h2>Welcome to Our Website</h2>
          <p>
        <br />E-Scooters land in Bochum since Summer 2019. Accidents involved E-Scooters have increased significantly ever since.
        Although there are regulations, such as no rides on footpath. But in reality most riders are not following.<br />
        Me personlly got hit by a E-Scooter, whose rider lose control of it and caused my injuries.<br />
        The rider ran after with his gang after hitting me. And the police never get further information.<br />
        Here I want to question the application of privacy regulations.<br />
        The <strong>GPS data</strong> acquired and stroed at the E-Scooter providers can be used to help police finding their stolen Scooters.<br />
        When a person was hurt by their Scooters and did not see those small place numbers, they refuse to provide these data.<br />
        <em>How is this fair? If the government is not ready to take actions to E-Scooter hitters. Then why are you approving the E-Scooter projects?</em>
        </p>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
