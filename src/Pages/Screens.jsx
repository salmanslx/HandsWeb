import React from 'react';
import Slider from 'react-slick';
import './screens.css'; // Your custom CSS
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.png';
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';
import p5 from '../Assets/p5.png';

function Screens() {
  const images = [p1, p2, p3, p4, p5];

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 4,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768, // For mobile view
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="screens-container" id='screens'>
      <h2 className="fw-bold d-flex justify-content-center align-items-center">
        BEAUTIFUL INTERFACES
      </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`p${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Screens;
