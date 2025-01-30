import { useRef, useEffect, useState } from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ------------------

function InfiniteCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <h2> Infinite Carousel </h2>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <i className="devicon-codeigniter-plain-wordmark"></i>
              </div>
              <div>
                <i className="devicon-php-plain"></i>
              </div>
              <div>
                <i className="devicon-react-original-wordmark"></i>
              </div>
              <div>
                <i className="devicon-nextjs-original-wordmark"></i>
              </div>
              <div>
                <i className="devicon-nodejs-plain-wordmark"></i>
              </div>
              <div>
                <i className="devicon-npm-original-wordmark"></i>
              </div>
              <div>
                <i className="devicon-bootstrap-plain"></i>
              </div>
              <div>
                <i className="devicon-mysql-plain-wordmark"></i>
              </div>
              <div>
                <i className="devicon-postgresql-plain-wordmark"></i>
              </div>
            </Slider>
          </div>
        </div>
      </div >
    </section >
  );
}

export default InfiniteCarousel;
