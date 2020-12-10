import React from 'react';
import styles from '../styles/Home.module.scss';
import ListTemplate from '../components/List/ListTemplate';
import Layout from '../components/Layout';
import SideBar from '../components/SideBar/SideBar';

const MyFeedback = () => {
  return (
    <Layout>
      <SideBar />
      <div className={styles.Dashboard}>
        <div className={styles.MyInterviews}>
          <h1 style={{ marginLeft: '40px' }}>My Feedback</h1>
          <div className={styles.ListTemplate}>
            <ListTemplate />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyFeedback;
