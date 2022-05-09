import { useEffect, useRef } from 'react';
import ImgHome from '../images/home.jpg';
import { gsap } from 'gsap';

const Home = () => {
  const homeImgRef = useRef();
  const homeData = useRef();
  const dataRef = gsap.utils.selector(homeData);
  const dataRefGroup = useRef();
  const socialIconRef = useRef();
  const dataIcon = gsap.utils.selector(socialIconRef);
  const groupSocialIcon = useRef();

  useEffect(() => {
    gsap.fromTo(
      homeImgRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0.5,
        x: 60,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      homeData.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 0.8,
        x: 25,
      }
    );
  }, []);

  useEffect(() => {
    dataRefGroup.current = gsap.timeline().fromTo(
      dataRef('.home__greeting, .home__name, .home__profession, .home__button'),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
        y: 20,
        ease: 'expo.out',
        stagger: 0.2,
      }
    );
  }, []);

  useEffect(() => {
    groupSocialIcon.current = gsap.timeline().fromTo(
      dataIcon('.home__social-icon'),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
        y: 20,
        ease: 'expo.out',
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__data" ref={homeData}>
          <span className="home__greeting">Hello, My name is</span>
          <h1 className="home__name">Clay Doe</h1>
          <span className="home__profession">Web developer</span>
          <a href="#contact" className="home__button button button-light">
            Contact
          </a>
        </div>

        <div className="home__social" ref={socialIconRef}>
          <a href="#" className="home__social-icon">
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="#" className="home__social-icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="home__social-icon">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <div className="home__img" ref={homeImgRef}>
          <img src={ImgHome} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
