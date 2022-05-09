import React from 'react';

const Education = ({
  eduTitle,
  qualificationEduIcon,
  qualificationEdu,
  qualificationEduFechaIcon,
  qualificationEduFecha,
}) => {
  return (
    <div className="bd-grid">
      <div className="qualification__data">
        <h3 className="qualification__area"> {eduTitle} </h3>

        <div className="qualification__box">
          <span className="qualification__work">
            <i className={qualificationEduIcon}></i>
            {qualificationEdu}
          </span>

          <span className="qualification__work">
            <i className={qualificationEduFechaIcon}></i>
            {qualificationEduFecha}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
