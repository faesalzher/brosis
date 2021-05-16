import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { Fragment } from "react";
// import Header from "../components/header";
import Footer from '../components/layout/footer';
import HeaderBar from '../components/layout/HeaderBar';

import "semantic-ui-css/semantic.min.css";
import "./_app.css";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const { pid } = router;
  return (
    <Fragment>
      <Head>
        <title>BROSIS</title>
      </Head>
      {
        (router.pathname !== "/login") ?
          <>
            <HeaderBar>
              <Component {...pageProps} />
              <Footer />
            </HeaderBar>
          </>
          :
          <Component {...pageProps} />
      }
    </Fragment>
  );
}

export default MyApp;