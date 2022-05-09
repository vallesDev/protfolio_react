import React from 'react';

const Experiencia = ({
  workTitle,
  workIcon,
  work,
  workFechaIcon,
  workFecha,
}) => {
  return (
    <div className="bd-grid">
      <div className="qualification__data">
        <h3 className="qualification__area">{workTitle}</h3>

        <div className="qualification__box">
          <span className="qualification__work">
            <i className={workIcon}></i>
            {work}
          </span>

          <span className="qualification__work">
            <i className={workFechaIcon}></i>
            {workFecha}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
