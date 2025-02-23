import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Styles
import './portfolio-item.css';

// Data
import portfolioData from '../../../../data/portfolio.json';
import { PortfolioItemType } from '../../../../types/portfolio.types';

type Item = {
  portfolioItem: Number;
};

// -------------------

function PortfolioItem2({ portfolioItem }: Item) {
  const filteredData: PortfolioItemType[] =
    portfolioData.portfolioItems.filter(
      (item) => item.action.number === portfolioItem
    );
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-40">
            <h2 className="entry-title section-title">
              {filteredData[0].description.text}
            </h2>

            <p>
              {filteredData[0].detail.sub}
            </p>

            {filteredData[0].detail.link !== "" ? (
              <>
                <p>
                  <a className="button" target="_blank" href={filteredData[0].detail.link}>Check Project</a>
                </p>
              </>
            ) : ("")}
          </div>
          <div className="one-half width-55 last">
            <div className="image-slider-wrapper relative block-right">
              <Swiper
                pagination={{ clickable: true }}
                loop={true}
                modules={[Pagination]}
                className="portfolio-slider">
                {filteredData[0].detail.imagesDetail.map((item, i) => (
                  <>
                    <SwiperSlide>
                      <img src={item.src} alt={item.alt} />
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem2;
