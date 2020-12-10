import React from 'react';
import styles from '../../styles/Home.module.scss';

const ListTemplate = () => {
  return (
    <div className={styles.ListTitles}>
      <div className={styles.ListTitleGroup}>
        <h4 style={{ color: '#35BAAA' }}>Interviewer</h4>
        <h4>Company</h4>
      </div>
      <div className={styles.ListTitleGroup}>
        <h4>Role</h4>
      </div>
      <div className={styles.ListTitleGroup}>
        <h4>Interview Date</h4>
      </div>
      <div className={styles.ListTitleGroup}>
        <h4>Feedback Status</h4>
      </div>
    </div>
  );
};

export default ListTemplate;
