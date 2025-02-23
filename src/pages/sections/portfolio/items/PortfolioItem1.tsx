// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
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

function PortfolioItem1({ portfolioItem }: Item) {
  const filteredData: PortfolioItemType[] =
    portfolioData.portfolioItems.filter(
      (item) => item.action.number === portfolioItem
    );

  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="row">
          <div className="one-half width-55">
            <div className="image-slider-wrapper relative block-right">
              <Swiper
                pagination={{ clickable: true }}
                autoHeight={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                zoom={true}
                loop={true}
                modules={[Pagination, Autoplay]}
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

          <div className="one-half width-40 last">
            <h2 className="entry-title section-title">{filteredData[0].description.text}</h2>

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
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem1;
