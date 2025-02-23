import React, { useState } from 'react';

// Plugins
import { motion, AnimatePresence } from 'framer-motion';

// UI Components
import PortfolioItem1 from './items/PortfolioItem1';
import PortfolioItem2 from './items/PortfolioItem2';

// --> Icon Images
import backArrow from '../../../assets/images/close-left-arrow.png';

// Styles
import './portfolio.css';

// Data
import portfolioData from '../../../data/portfolio.json';
import { PortfolioItemType } from '../../../types/portfolio.types';

// --------------

function Portfolio() {

  // Portfolio item to be shown (change rendered different components in item folder)
  const [portfolioItem, setPortfolioItem] = useState<number>(0);

  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  /**
   * Toggle filter buttons menu display
   */
  const handleToggleFilterBtns = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  /**
   * Show images that have category matches the given, and
   * remove the images with different category.
   *
   * if the category equals `all`, it will show all images
   *
   * @param category images category to be shown
   */
  const handleFilterImages = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredImages: PortfolioItemType[] =
    selectedCategory === 'all'
      ? portfolioData.portfolioItems
      : portfolioData.portfolioItems.filter(
        (item) => item.category === selectedCategory
      );

  console.log('filteredImages :>> ', filteredImages);

  /**
   * Opening portfolio item that the user clicked
   *
   * @param num portfolio item to be open
   */
  const handleOpenItem = (num: number) => {
    const element: HTMLElement | null =
      document.getElementById('portfolio-wrapper');
    if (element) {
      element.scrollIntoView();
    }

    setPortfolioItem(num);
  };

  /**
   * Close Opened portfolio item and show the portfolio grid images
   */
  const handlCloseItem = () => {
    setPortfolioItem(0);
  };

  return (
    <section id="portfolio" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div id="portfolio-wrapper" className="relative">
            {portfolioItem === 0 ? (
              <>
                <div
                  className="category-filter"
                  onClick={handleToggleFilterBtns}>
                  <div className="category-filter-icon"></div>
                </div>
                <motion.div
                  variants={{
                    expanded: {
                      height: 'auto',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                      },
                    },
                    collapsed: {
                      height: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                  animate={isFilterOpen ? 'expanded' : 'collapsed'}
                  initial="collapsed"
                  className={
                    'category-filter-list button-group filters-button-group visible'
                  }>
                  {portfolioData.filter.map((flBtn, i) => (
                    <div
                      key={'filter-btn-' + i}
                      className={
                        'button ' +
                        (selectedCategory === flBtn.category
                          ? 'is-checked'
                          : '')
                      }
                      onClick={() => handleFilterImages(flBtn.category)}>
                      {flBtn.text}
                    </div>
                  ))}
                </motion.div>
                <div className="portfolio-load-content-holder"></div>
                <motion.div className="grid" id="portfolio-grid" layout>
                  {filteredImages.map((item, i) => (
                    <AnimatePresence key={'portfolio-item-' + i}>
                      <motion.div
                        // layout
                        animate={{ scale: 1, opacity: 1 }}
                        initial={{ scale: 0, opacity: 0 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        id={'p-item-' + (i + 1)}
                        className="grid-item element-item p-one-third">
                        <a
                          className="item-link ajax-portfolio"
                          style={{ position: 'relative' }}
                          data-id={i + 1}
                          onClick={() => {
                            // according to action type we wil fire the function
                            if (
                              item?.action?.type === 'item' &&
                              typeof item?.action?.number === 'number'
                            ) {
                              handleOpenItem(item.action.number);
                            }
                          }}>
                          <img src={item.images.src} alt={item.images.alt} />
                          <div className="portfolio-text-holder">
                            <div className="portfolio-text-wrapper">
                              <p className="portfolio-text">
                                {item.description.text}
                              </p>
                              <p className="portfolio-cat">
                                {item.description.caption}
                              </p>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                    </AnimatePresence>
                  ))}
                </motion.div>
              </>
            ) : (
              // Portfolio items to be opened as a separate component
              <div className="portfolio-load-content-holder">
                <div
                  className="close-icon"
                  role="button"
                  onClick={handlCloseItem}>
                  <img src={backArrow} alt="back arrow" />
                </div>
                {portfolioItem % 2 !== 0 ? (
                  <PortfolioItem1
                    portfolioItem={portfolioItem}
                  />
                ) : (
                  <PortfolioItem2
                    portfolioItem={portfolioItem}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
