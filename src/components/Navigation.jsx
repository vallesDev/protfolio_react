import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
const Navigation = ({ enlace, name, handleRemoveMenu, activeClass, to }) => {
  const navItem = useRef();

  useEffect(() => {
    gsap.fromTo(
      navItem.current,
      {
        opacity: 0,
        y: -25,
        x: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1.8,
        y: 0,
        x: 0,
        stagger: 0.2,
      }
    );
  }, []);
  return (
    <li className="nav__item" ref={navItem}>
      <Link
        href={enlace}
        className="nav__link"
        onClick={handleRemoveMenu}
        activeClass={activeClass}
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {name}
      </Link>
    </li>
  );
};

export default Navigation;
