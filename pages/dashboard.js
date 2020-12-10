import React from 'react';
import Layout from '../components/Layout';
import SideBar from '../components/SideBar/SideBar';
import styles from '../styles/Home.module.scss';
import MyInterviews from './myInterviews';

const Dashboard = () => {
  return (
    <Layout>
      <SideBar />
      <div className={styles.Dashboard}></div>
    </Layout>
  );
};

export default Dashboard;
