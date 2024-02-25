import React from 'react';

function Carousel() {
  return (
    <div className="homepageCarousel">
      <div className="myCarousel">
        <div
          id="carouselIndicators"
          className="carousel slide"
          data-ride="carousel"
          style="display: block"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselIndicators"
              data-slide-to="0"
              className="active"
            ></li> 
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
            <li data-target="#carouselIndicators" data-slide-to="3"></li>
            <li data-target="#carouselIndicators" data-slide-to="4"></li>
            <li data-target="#carouselIndicators" data-slide-to="5"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="./public/banEScooter.jpg"
                alt="First slide"
              />
            </div>
            <div cclassName="carousel-item">
              <img
                className="d-block w-100"
                src="./public/EScooterBlockFootpath.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./public/EScooterCrashCar.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src=".//EScooterGPSphone.jpg"
                alt="Fourth slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./public/EScooterHitFemale.jpg"
                alt="Fifth slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;