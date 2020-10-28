import React from 'react';
// import myImage from '../../assets/images/my-image.jpeg';
import styles from './Header.module.scss';
import linkedInLogo from '../../assets/images/linkedin.png';
import githubLogo from '../../assets/images/GitHub-Mark-32px.png';

const links = [
  {
    icon: linkedInLogo,
    url: 'https://www.linkedin.com/in/marcin-lubowicz/',
    title: 'LinkedIn'
  },
  {
    icon: githubLogo,
    url: 'https://github.com/Moviss',
    title: 'GitHub'
  }
  // {
  //   icon: githubLogo,
  //   url: 'https://github.com/Moviss',
  //   title: 'CV Online'
  // }
];

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>Marcin Lubowicz</div>
      {/* Image I am not sure it will be still here */}
      {/*<div className={styles.image}>*/}
      {/*  <img src={myImage} alt="Marcin Lubowicz"/>*/}
      {/*</div>*/}
      <div className={styles.addressWrapper}>
        <ul>
          <li>Jana III Sobieskiego 229/3A</li>
          <li>Wejherowo, pomorskie, Poland</li>
          <li>+48 501 619 789</li>
          <li>marcin.lubowicz@gmail.com</li>
        </ul>
      </div>
      <div className={styles.links}>
        {links.map(link => (
          <div className={styles.link}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt="{link.title}" />
              <span className={styles.linkTitle}>{link.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
