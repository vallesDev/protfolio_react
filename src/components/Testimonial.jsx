import React from 'react';
import Testimonial2 from './Testimonial2';

const Testimonial = () => {
  return (
    <section className="testimonial section bd-container">
      <span className="section-subtitle">My client saying</span>
      <h2 className="section-title">Testiomial</h2>

      <div className="testimonial__container swiper-container">
        <Testimonial2 />
      </div>
    </section>
  );
};

export default Testimonial;
