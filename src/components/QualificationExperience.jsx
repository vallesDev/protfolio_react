import { generarId } from '../../helpers';
import Experiencia from './Experiencia';

const experienceData = [
  {
    id: generarId(),
    workTitle: 'Senior Front end Developer',
    workIcon: 'bx bx-briefcase-alt qualification__icon',
    work: 'Adobe - New York',
    workFechaIcon: 'bx bx-calendar-alt qualification__icon',
    workFecha: 'Jan 2019 - Aug 2019',
  },

  {
    id: generarId(),
    workTitle: 'Ui / UX Designer',
    workIcon: 'bx bx-briefcase-alt qualification__icon',
    work: 'Figma - Lima',
    workFechaIcon: 'bx bx-calendar-alt qualification__icon',
    workFecha: 'Oct 2019 - Dec 2019',
  },

  {
    id: generarId(),
    workTitle: 'Web Designer',
    workIcon: 'bx bx-briefcase-alt qualification__icon',
    work: 'Apple Inc - New York',
    workFechaIcon: 'bx bx-calendar-alt qualification__icon',
    workFecha: 'Jan 2020 - May 2020',
  },
];

const QualificationExperience = () => {
  return (
    <div className="qualification__content">
      <h2 className="qualification__title">
        <i className="bx bx-briefcase-alt qualification__title-icon"></i>
        Work Experience
      </h2>
      {experienceData.map(
        ({ id, workTitle, workIcon, work, workFechaIcon, workFecha }) => (
          <Experiencia
            key={id}
            workTitle={workTitle}
            workIcon={workIcon}
            work={work}
            workFechaIcon={workFechaIcon}
            workFecha={workFecha}
          />
        )
      )}
    </div>
  );
};

export default QualificationExperience;
