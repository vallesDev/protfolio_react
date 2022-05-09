import React from 'react';
import ServiBox from './ServiBox';
import { generarId } from '../../helpers';

const servicesData = [
  {
    id: generarId(),
    servicesTitle: 'Ui/Ux Design',
    servicesDescrip:
      'Services that I offer and work, with years of experience in the work area.',
    servicesLink: '#',
    servicesButton: 'Know more',
  },
  {
    id: generarId(),
    servicesTitle: 'Web development',
    servicesDescrip:
      'Services that I offer and work, with years of experience in the work area.',
    servicesLink: '#',
    servicesButton: 'Know more',
  },

  {
    id: generarId(),
    servicesTitle: 'Graphic Design',
    servicesDescrip:
      'Services that I offer and work, with years of experience in the work area.',
    servicesLink: '#',
    servicesButton: 'Know more',
  },
];

const Services = () => {
  return (
    <section className="services section bd-container">
      <span className="section-subtitle" id="services">
        {' '}
        What i offer{' '}
      </span>
      <h2 className="section-title">Services</h2>
      <div className="services__container bd-grid">
        {servicesData.map(
          ({
            id,
            servicesTitle,
            servicesDescrip,
            servicesLink,
            servicesButton,
          }) => (
            <ServiBox
              key={id}
              servicesTitle={servicesTitle}
              servicesDescrip={servicesDescrip}
              servicesLink={servicesLink}
              servicesButton={servicesButton}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Services;
