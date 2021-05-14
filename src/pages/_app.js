import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { Fragment } from "react";
// import Header from "../components/header";
import "semantic-ui-css/semantic.min.css";
import "./_app.css";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>BROSIS</title>
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;