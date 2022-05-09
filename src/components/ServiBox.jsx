import React from 'react';

const ServiBox = ({
  servicesTitle,
  servicesDescrip,
  servicesLink,
  servicesButton,
}) => {
  return (
    <div className="services__data">
      <i className="bx bx-palette services__icon"></i>
      <h3 className="services__title">{servicesTitle}</h3>
      <p className="services__description">{servicesDescrip}</p>
      <a href={servicesLink} className="button">
        {servicesButton}
      </a>
    </div>
  );
};

export default ServiBox;
