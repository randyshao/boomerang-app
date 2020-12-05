import Head from 'next/head';
import Navbar from './Navbar/Navbar';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Boomerang</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
