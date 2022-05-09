import QualificationExperience from './QualificationExperience';
import QualificationEdu from './QualificationEdu';
const Qualification = () => {
  return (
    <section className="qualification section bd-container">
      <span className="section-subtitle">Experience and education</span>
      <h2 className="section-title">Qualification</h2>

      <div className="qualification__container bd-grid">
        <QualificationExperience />
        <QualificationEdu />
      </div>
    </section>
  );
};

export default Qualification;
