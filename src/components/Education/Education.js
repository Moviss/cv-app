import React from 'react';
import styles from './Education.module.scss';

const education = [
  {
    school: 'Theater Academy of A. Zelwerowicz in Warsaw',
    country: 'Poland',
    city: 'Warsaw',
    degree: 'M.A.',
    field: 'Theater',
    graduationDate: 'Aug 2010'
  }
];

const Education = () => {
  return (
    <div className="section-wrapper">
      <h2>EDUCATION</h2>
      {education.map(school => (
        <div className={styles.school}>
          <div>
            <strong>{school.school}</strong>
          </div>
          <div>
            {school.city}, {school.country}
          </div>
          <div className={styles.degree}>
            {school.degree} {school.field} ({school.graduationDate})
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
