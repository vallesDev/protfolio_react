import React from 'react';
import Education from './Education';
import { generarId } from '../../helpers/index.js';

const educationData = [
  {
    id: generarId(),
    eduTitle: 'Computer technician',
    qualificationEduIcon: 'bx bx-book-alt qualification__icon',
    qualificationEdu: 'Lima - Computer institute',
    qualificationEduFechaIcon: 'bx bx-calendar-alt qualification__icon',
    qualificationEduFecha: 'Apr 2015 - Dec 2018',
  },

  {
    id: generarId(),
    eduTitle: 'Master in web developer',
    qualificationEduIcon: 'bx bx-book-alt qualification__icon',
    qualificationEdu: 'Madrid - Design institute',
    qualificationEduFechaIcon: 'bx bx-calendar-alt qualification__icon',
    qualificationEduFecha: 'Jan 2019 - Aug 2020',
  },

  {
    id: generarId(),
    eduTitle: 'Web Designer',
    qualificationEduIcon: ' bx bx-briefcase-alt qualification__icon',
    qualificationEdu: 'Apple Inc - New York',
    qualificationEduFechaIcon: 'bx bx-calendar-alt qualification__icon',
    qualificationEduFecha: 'Jan 2020 - May 2020',
  },
];

const QualificationEdu = () => {
  return (
    <div className="qualification__content">
      <h2 className="qualification__title">
        <i className="bx bx-briefcase-alt qualification__title-icon"></i>
        Education
      </h2>
      {educationData.map(
        ({
          id,
          eduTitle,
          qualificationEduIcon,
          qualificationEdu,
          qualificationEduFechaIcon,
          qualificationEduFecha,
        }) => (
          <Education
            key={id}
            id={id}
            eduTitle={eduTitle}
            qualificationEduIcon={qualificationEduIcon}
            qualificationEdu={qualificationEdu}
            qualificationEduFechaIcon={qualificationEduFechaIcon}
            qualificationEduFecha={qualificationEduFecha}
          />
        )
      )}
    </div>
  );
};

export default QualificationEdu;
