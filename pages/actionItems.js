import React from 'react';
import Layout from '../components/Layout';
import SideBar from '../components/SideBar/SideBar';
import styles from '../styles/Home.module.scss';
import ListTemplate from '../components/List/ListTemplate';

const ActionItems = () => {
  return (
    <Layout>
      <SideBar />
      <div className={styles.Dashboard}>
        <div className={styles.MyInterviews}>
          <h1 style={{ marginLeft: '40px' }}>Action Items</h1>
          <div className={styles.ListTemplate}>
            <ListTemplate />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActionItems;
