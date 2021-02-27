import React from 'react';

import styles from './sidebar.module.css';

const Sidebar = (props) => {
  return (
    <ul className={styles.emsi}>
      <li>
        <a href="#">
          <i className="fas fa-bars"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-home"></i>
          <span>홈</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-fire"></i>
          <span>인기</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-envelope-open-text"></i>
          <span>구독</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-music"></i>
          <span>유튜브 뮤직</span>
        </a>
      </li>
    </ul>
  );
}
  
export default Sidebar;