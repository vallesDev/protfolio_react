import { useState } from 'react';
//import PortfolioNav from './PortfolioNav';
import ProyectoPorfolio from './ProyectoPorfolio';
import Work1 from '../images/work1.jpg';
import Work2 from '../images/work2.jpg';
import Work3 from '../images/work3.jpg';
import Work4 from '../images/work4.jpg';
import Work5 from '../images/work5.jpg';
import Work6 from '../images/work6.jpg';
import { generarId } from '../../helpers';

/*
const navPortfolio = [
  {
    id: 1,
    name: 'All',
    dataFilter: 'all',
  },
  {
    id: 2,
    name: 'Web',
    dataFilter: 'web',
  },
  {
    id: 3,
    name: 'Ui/Ux',
    dataFilter: 'ux',
  },
  {
    id: 4,
    name: 'App',
    dataFilter: 'app',
  },
];

*/

const portfolioData = [
  {
    id: generarId(),
    img: Work1,
    title: 'New portfolio of work done for a client.',
    subtitle: 'Web development',
    imgLink: '#',
    btnLink: '#',
    btn: ' View Detail',
    categoria: 'web',
  },
  {
    id: generarId(),
    img: Work2,
    title: 'New portfolio of work done for a client.',
    subtitle: 'Web development',
    imgLink: '#',
    btnLink: '#',
    btn: ' View Detail',
    categoria: 'web',
  },
  {
    id: generarId(),
    img: Work3,
    title: 'New portfolio of work done for a client.',
    subtitle: 'Web development',
    imgLink: '#',
    btnLink: '#',
    btn: ' View Detail',
    categoria: 'ux',
  },
  {
    id: generarId(),
    img: Work4,
    title: 'New portfolio of work done for a client.',
    subtitle: 'Web development',
    imgLink: '#',
    btnLink: '#',
    btn: ' View Detail',
    categoria: 'ux',
  },
  {
    id: generarId(),
    img: Work5,
    title: 'New portfolio of work done for a client.',
    subtitle: 'Web development',
    imgLink: '#',
    btnLink: '#',
    btn: ' View Detail',
    categoria: 'app',
  },
  {
    id: generarId(),
    img: Work6,
    title: 'New portfolio of work done for a client.',
    subtitle: 'Web development',
    imgLink: '#',
    btnLink: '#',
    btn: ' View Detail',
    categoria: 'app',
  },
];

const Portfolio = () => {
  const [items, setItems] = useState(portfolioData);

  const filterItem = (categItem) => {
    console.log('Has selecionado la categoria');
    const updateItem = portfolioData.filter((curElem) => {
      return curElem.categoria === categItem;
    });

    setItems(updateItem);
  };

  return (
    <section className="portfolio section bd-container">
      <span className="section-subtitle" id="portfolio">
        My recent works
      </span>
      <h2 className="section-title">Portfolio</h2>

      {/*NAVEGACÓN PORFOLIO*/}

      <div className="portfolio__nav">
        <span
          onClick={() => setItems(portfolioData)}
          className="portfolio__item active-portfolio"
        >
          All
        </span>
        <span
          onClick={() => filterItem('web')}
          className="portfolio__item active-portfolio web"
        >
          Web
        </span>
        <span
          onClick={() => filterItem('ux')}
          className="portfolio__item active-portfolio ux"
        >
          Ux/ui
        </span>
        <span
          onClick={() => filterItem('app')}
          className="portfolio__item active-portfolio app"
        >
          App
        </span>
      </div>

      {/*FIN NAVEGACÓN PORFOLIO*/}

      {/*==== PORTFOLIO ====*/}

      <div className="portfolio__container bd-grid">
        {items.map(
          ({ id, img, title, subtitle, imgLink, btnLink, btn, categoria }) => (
            <ProyectoPorfolio
              key={id}
              img={img}
              title={title}
              subtitle={subtitle}
              imgLink={imgLink}
              btnLink={btnLink}
              btn={btn}
              categoria={categoria}
            />
          )
        )}
      </div>

      {/*===== FIN PORTFOLIO =======*/}
    </section>
  );
};

export default Portfolio;
