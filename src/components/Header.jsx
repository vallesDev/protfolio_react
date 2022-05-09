import { useState, useEffect, useRef } from 'react';
import Menu from './Menu';
import { gsap } from 'gsap';

const Header = () => {
  const navLogo = useRef();
  const navToggle = useRef();

  const [modal, setModal] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleMenu = () => {
    setModal(!modal);
  };

  const handleRemoveMenu = () => {
    setModal(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  useEffect(() => {
    gsap.fromTo(
      navLogo.current,
      {
        opacity: 0,
        y: -25,
        x: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1.5,
        y: 0,
        x: 0,
        ease: 'expo.out',
        stagger: 0.2,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navToggle.current,
      {
        opacity: 0,
        y: 0,
        x: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1.5,
        stagger: 0.2,
      }
    );
  });

  return (
    <header
      className={navBar ? 'l-header scroll-header' : 'l-header'}
      id="header"
    >
      <nav className="nav bd-container">
        <a href="#" className="nav__logo" ref={navLogo}>
          Clay Doe
        </a>

        <Menu modal={modal} handleRemoveMenu={handleRemoveMenu} />

        <div className="nav__toggle" id="nav-toggle">
          <i onClick={handleMenu} className="bx bx-menu" ref={navToggle}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
