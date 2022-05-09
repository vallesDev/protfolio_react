import React from 'react';

const InfoAbout = ({ num, achievement }) => {
  return (
    <div>
      <span className="about__number">{num}</span>
      <span className="about__achievement">{achievement}</span>
    </div>
  );
};

export default InfoAbout;
