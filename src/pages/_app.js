import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import React, { Fragment, useState } from "react";
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
import jwtDecode from "jwt-decode";



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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  React.useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("jwtToken") !== null) {
        // console.log("sudah login")
        setIsLoggedIn(true);
        setUser(jwtDecode(window.localStorage.getItem("jwtToken")));
      } else {
        setIsLoggedIn(false);
      };
    }
  }, [ setIsLoggedIn]);

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
                <Component mobile={false} isLoggedIn={isLoggedIn} user={user} />
                <Footer />
              </DesktopContainer>
            </Media>
            <Media as={Sidebar.Pushable} at='mobile'>
              <MobileContainer mobile={true}>
                <Component mobile={true} isLoggedIn={isLoggedIn} user={user} />
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