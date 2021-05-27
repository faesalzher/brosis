import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { Fragment } from "react";
// import Header from "../components/header";
import Footer from '../components/layout/footer';
import {
  Sidebar,
} from 'semantic-ui-react';

import "semantic-ui-css/semantic.min.css";
import "./_app.css";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
import { useRouter } from 'next/router';
import { createMedia } from '@artsy/fresnel';
import DesktopContainer from '../components/layout/DesktopContainer';
import MobileContainer from '../components/layout/MobileContainer';
// import { AuthProvider } from "../context/auth";
function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      tablet: 768,
      computer: 1024,
    },
  });

  return (
    <Fragment>
      <Head>
        <title>BROSIS</title>
      </Head>
      {/* <AuthProvider> */}
        {
          (router.pathname !== "/login" && router.pathname !== "/register") ?
            <MediaContextProvider>
              <Media greaterThan='mobile'>
                <DesktopContainer mobile={false}>
                  <Component mobile={false} />
                  <Footer />
                </DesktopContainer>
              </Media>
              <Media as={Sidebar.Pushable} at='mobile'>
                <MobileContainer mobile={true}>
                  <Component mobile={true} />
                  <Footer />
                </MobileContainer>
              </Media>
            </MediaContextProvider>
            :
            <Component {...pageProps} />
        }
      {/* </AuthProvider> */}
    </Fragment>
  );
}

export default MyApp;