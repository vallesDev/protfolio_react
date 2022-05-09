import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer__container">
      <div className="footer__description bd-container">
        <h1 className="footer__title">Clay Doe</h1>
        <p className="footer__description">
          I am Clay Doe and this is my personal websaite, consult me here.
        </p>

        <div className="footer__social">
          <a href="#" className="footer__link">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#" className="footer__link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" className="footer__link">
            <i className="bx bxl-dribbble"></i>
          </a>
        </div>
        <p className="footer__copy">
          &#169; 2020 Bedimcode. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
