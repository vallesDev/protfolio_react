import React from 'react';

const PortfolioNav = ({ name, handleNav, dataFilter }) => {
  return (
    <span
      onClick={handleNav}
      className={`portfolio__item active-portfolio ${dataFilter}`}
    >
      {name}
    </span>
  );
};

export default PortfolioNav;
