import React from 'react';
import styles from '../CareerObjective/CareerObjective.module.scss';

const jobs = [
  {
    companyName: 'AS-PL Sp. z o.o.',
    position: 'Junior Fullstack Developer',
    period: 'Mar 2019 - Present',
    location: 'Gdańsk, pomorskie, Poland',
    responsibilities: [
      'Design, build, or maintain web sites, using authoring or scripting languages, content creation tools, management tools, and digital media.',
      'Perform or direct web site updates.',
      'Evaluate code to ensure that it is valid, is properly structured, meets industry standards and is compatible with browsers, devices, or operating systems.',
      'Develop databases that support web applications and web sites.',
      'Modify existing software to correct errors, allow it to adapt to new hardware, or to improve its performance.'
    ]
  },
  {
    companyName: '3mdeb Embedded Systems Consulting',
    position: 'Junior Frontend Developer',
    period: 'June 2018 - Feb 2019',
    location: 'Gdańsk, pomorskie, Poland',
    responsibilities: [
      'Design, build, or maintain web sites, using authoring or scripting languages, content creation tools, management tools, and digital media.',
      'Perform or direct web site updates.',
      'Evaluate code to ensure that it is valid, is properly structured, meets industry standards and is compatible with browsers, devices, or operating systems.',
      'Modify existing software to correct errors, allow it to adapt to new hardware, or to improve its performance.',
      'Confer with management or development teams to prioritize needs, resolve conflicts, develop content criteria, or choose solutions.',
      'Lead small team of designers, programmers and marketing specialists.'
    ]
  },
  {
    companyName: 'Malu',
    position: 'Frontend Developer',
    period: 'Nov 2017 - June 2018',
    location: 'Wejherowo, pomorskie, Poland',
    responsibilities: [
      'Design, build, or maintain web sites, using authoring or scripting languages, content creation tools, management tools, and digital media.',
      'Perform or direct web site updates.',
      'Evaluate code to ensure that it is valid, is properly structured, meets industry standards and is compatible with browsers, devices, or operating systems.',
      'Write, design, or edit web page content, or direct others producing content.',
      'Analyze user needs to determine technical requirements.'
    ]
  }
];

const ProfessionalExperience = () => {
  return (
    <div className="section-wrapper">
      <h2>PROFESSIONAL EXPERIENCE</h2>

      {jobs.map(job => (
        <div key={job.companyName} className={styles.job}>
          <div className={styles.companyName}>
            <strong>{job.companyName}</strong>, {job.location}
          </div>
          <div className={styles.position}>
            {job.position}, {job.period}
          </div>
          <ul className={styles.responsibilities}>
            {job.responsibilities.map(resp => (
              <li>
                <p>{resp}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalExperience;
