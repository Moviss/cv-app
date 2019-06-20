import React from 'react';
import myImage from '../../assets/images/my-image.jpeg';
import styles from './Header.module.scss';

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
          <li>Wejherowo, pomorskie, 84-200</li>
          <li>+48 501 619 789</li>
          <li>marcin.lubowicz@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
