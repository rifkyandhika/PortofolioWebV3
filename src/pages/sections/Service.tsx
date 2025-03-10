import { Link as ScrollLink } from 'react-scroll';

// Images
// import servImg1 from '../../assets/images/services/service1.png';
// import servImg2 from '../../assets/images/services/service2.png';
// import servImg3 from '../../assets/images/services/service3.png';
// import servImg4 from '../../assets/images/services/service4.png';
// import servImg5 from '../../assets/images/services/service4.png';

// Data
import serviceData from '../../data/service.json';

// -----------------------

function Service() {
  // const images: string[] = [servImg1, servImg2, servImg3, servImg4, servImg5];

  return (
    <section id="service" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-55">
              <h2 className="entry-title section-title">{serviceData.title}</h2>
              {serviceData.description.map((parg, i) => (
                <p key={'p-' + i}>{parg}</p>
              ))}
              {/* <p className="section-info">{serviceData.description}</p> */}
              {/* <div className="services-wrapper">
                {serviceData.servicesBoxes.map((serv, i) => (
                  <div key={'serv-' + i} className={serv.className!}>
                    <img src={images[i]} alt={serv.imageAltText} />
                    <h4 className="service-title">{serv.servTitle}</h4>
                    <div className="service-text">{serv.servDesc}</div>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="one-half width-40 last">
              {/* <h2 className="entry-title section-title">{serviceData.title}</h2>
              <p className="section-info">{serviceData.description}</p>
              {serviceData.paragraphes.map((parg, i) => (
                <p key={'p-' + i}>{parg}</p>
              ))} */}

              <div className="button-group-wrapper">
                <a href="https://www.cake.me/pdf/s--X1O1yvQ1ac41CC1fcpKKVA--/110bRE.pdf" download className="button" role="button" aria-pressed="true">Download CV
                </a>
                <ScrollLink
                  className="button"
                  smooth
                  spy
                  to="portfolio">
                  Check My Portfolio
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
