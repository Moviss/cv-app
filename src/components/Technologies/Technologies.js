import React from 'react';

const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript (ES5, ES6+)',
  'TypeScript',
  'React',
  'VueJS',
  'Python',
  'Django',
  'PHP',
  'Symfony',
  'MySQL',
  'Docker',
  'Git',
  'Java'
];

const Technologies = () => {
  return (
    <div className="section-wrapper">
      <h2>TECHNOLOGIES</h2>
      <p>
        {technologies.map((tech, index) => {
          if (index + 1 < technologies.length) {
            tech += ', ';
          }
          return tech;
        })}
      </p>
    </div>
  );
};

export default Technologies;
