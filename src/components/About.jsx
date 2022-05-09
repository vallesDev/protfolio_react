import React from 'react';
import InfoAbout from './InfoAbout';
import ImgAbout from '../images/about.jpg';
import { generarId } from '../../helpers';

const aboutListDatos = [
  {
    key: generarId(),
    id: generarId(),
    num: '05',
    achievement: 'Years off Experience',
  },
  {
    key: generarId(),
    id: generarId(),
    num: '29+',
    achievement: 'Projects completes',
  },
  {
    key: generarId(),
    id: generarId(),
    num: '07',
    achievement: 'Best work awards',
  },
];

const About = () => {
  return (
    <section className="about section bd-container">
      <div className="section-subtitle" id="about">
        My History
      </div>
      <h2 className="section-title">About me</h2>
      <div className="about__container bd-grid">
        <div className="about__data bd-grid">
          <p className="about__description">
            <span>
              Hello, I am
              <br />
              freelance fronted developer, I am passionate about creating and
              developing web interfaces. With years of experience in web design
              and development.
            </span>
          </p>
          {aboutListDatos.map(({ id, num, achievement }) => (
            <InfoAbout key={id} id={id} num={num} achievement={achievement} />
          ))}
        </div>

        <img src={ImgAbout} alt="" className="about__img" />
      </div>
    </section>
  );
};

export default About;
