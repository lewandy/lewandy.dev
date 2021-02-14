import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import { useCallback, useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import useScroll from "../hooks/useScroll";

export default function Layout() {
  const {
    isBigScreen,
    isDesktopOrLaptop,
    isTabletOrMobile,
    isTabletOrMobileDevice,
  } = useMediaQuery();

  const { isScrolled } = useScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Lewandy Diloné Bonifacio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isScrolled={isScrolled} />
      <Home />
      <About />
      <Footer />
    </div>
  );
}
