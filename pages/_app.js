import '../styles/globals.scss';
import { GlobalProvider } from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </GlobalProvider>
  );
}

export default MyApp;

// import React from 'react';
// import App from 'next/app';
// import Head from 'next/head';
// import { GlobalProvider } from '../context/GlobalState';
// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <div>
//         <div>
//           <Head>// stuff.....</Head>
//         </div>
//         <GlobalProvider>
//           <Component {...pageProps} />
//         </GlobalProvider>
//       </div>
//     );
//   }
// }
// export default MyApp;
