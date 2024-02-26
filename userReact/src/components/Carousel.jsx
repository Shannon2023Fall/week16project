import React, {useState} from 'react';

function Carousel() {
  //Add Carousel   
<div id="myCarousel" class="carousel slide" data-ride="carousel">
  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="/EScooterBlockFootpath.jpg" alt="First Slide" />
      <div class="carousel-caption">
        <h3>E-Scooters block footpath</h3>
      </div>
    </div>

    <div class="item">
      <img src="/EScooterCrashCar.jpg" alt="Second Slide" />
      <div class="carousel-caption">
        <h3>E-Scooter hits car</h3>
      </div>
    </div>

    <div class="item">
      <img src="/EScooterHitFemale.jpg" alt="Third Slide" />
      <div class="carousel-caption">
        <h3>E-Scooter hits people on footpath</h3>
      </div>
    </div>

    <div class="item">
      <img src="/EScooterGPSphone.jpg" alt="Forth Slide" />
      <div class="carousel-caption">
        <h3>GPS data stored by E-Scooter provider</h3>
      </div>
    </div>

    <div class="item">
      <img src="/banEScooter.jpg" alt="Fifth Slide" />
      <div class="carousel-caption">
        <h3>Ban E-Scooter</h3>
      </div>
    </div>
  </div>

  {/* <!-- Left and right controls --> */}
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

}

export default Carousel;
