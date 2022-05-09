import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProyectoPorfolio = ({
  img,
  title,
  subtitle,
  imgLink,
  btnLink,
  btn,
  categoria,
}) => {
  const proRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      proRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      }
    );
  }, []);
  return (
    <div className={`portfolio__content mix ${categoria}`} ref={proRef}>
      <a href={imgLink}>
        <img src={img} alt="" className="portfolio__img" />
      </a>

      <div className="portfolio__data">
        <span className="portfolio__subtitle">{subtitle}</span>
        <a href="#">
          <h2 className="portfolio__title">{title}</h2>
        </a>
        <a href={btnLink} className="button button-link">
          {btn}
        </a>
      </div>
    </div>
  );
};

export default ProyectoPorfolio;
