import React from 'react';
import Layout from '../components/Layout';
import SideBar from '../components/SideBar/SideBar';
import styles from '../styles/Home.module.scss';
import List from '../components/List/List';

const dashboard = () => {
  return (
    <Layout>
      <SideBar />
      <div className={styles.Dashboard}>
        <h1 style={{ marginLeft: '40px' }}>My Interviews</h1>
        <List />
      </div>
    </Layout>
  );
};

export default dashboard;
