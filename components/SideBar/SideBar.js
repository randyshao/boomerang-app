import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

const SideBar = () => {
  return (
    <div className={styles.SideBar}>
      <ul>
        <li>
          <Link href='/'>
            <a>My Interviews</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>My Feedback</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Action Items</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
