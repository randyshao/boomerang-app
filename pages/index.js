import Head from 'next/head';
import Link from 'next/link';
import ButtonBlock from '../components/util/ButtonBlock';
import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.mainbanner}>
            <div className={styles.bannertext}>
              <h1 className={styles.title}>Welcome to Boomerang</h1>
              <p className={styles.description}>
                Provide growth opportunities to companies and job candidates
                through simple, enlightening feedback.
              </p>
              <ButtonBlock link='https://devpost.com/software/boomerang'>
                Learn More About Boomerang
              </ButtonBlock>
            </div>
            <img src='/mainbanner.svg' />
          </div>
          <div className={styles.aboutsection}>
            <div className={styles.aboutdescription}>
              <h2>
                Streamline the feedback process between job canadidates and
                interviewers.
              </h2>
              <p>
                To often, job canadidates who have been rejected from the
                interview process have been unable to receive actionable
                feedback from their interviewer.
              </p>
            </div>

            <img src='/aboutbanner.svg' />
          </div>
        </main>

        <footer className={styles.footer}>
          <Link
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            rel='noopener noreferrer'
          >
            <a target='_blank'>Powered by Team Boomerang</a>
          </Link>
        </footer>
      </div>
    </Layout>
  );
}
