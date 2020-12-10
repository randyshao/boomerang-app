import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Layout from '../components/Layout';
import SideBar from '../components/SideBar/SideBar';
import styles from '../styles/Home.module.scss';
import ListTemplate from '../components/List/ListTemplate';

const MyInterviews = () => {
  const { interviews } = useContext(GlobalContext);

  return (
    <Layout>
      <SideBar />
      <div className={styles.Dashboard}>
        <div className={styles.MyInterviews}>
          <h1 style={{ marginLeft: '40px' }}>My Interviews</h1>
          <div className={styles.ListTemplate}>
            <ListTemplate />
            {interviews.map((interview) => (
              <div
                className={styles.ListTitles}
                style={{
                  borderTop: '1px solid #E5E5E5',
                  borderBottom: '1px solid #E5E5E5',
                }}
              >
                <div className={styles.ListTitleGroup}>
                  <h4 style={{ color: '#35BAAA' }}>{interview.name}</h4>
                  <h4 style={{ color: '#848484' }}>{interview.company}</h4>
                </div>
                <div className={styles.ListTitleGroup}>
                  <h4 style={{ color: '#848484' }}>{interview.role}</h4>
                </div>
                <div className={styles.ListTitleGroup}>
                  <h4 style={{ color: '#848484' }}>
                    {interview.dateOfInterview}
                  </h4>
                </div>
                <div className={styles.ListTitleGroup}>
                  <h4 style={{ color: '#848484' }}>Feedback Status</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyInterviews;
