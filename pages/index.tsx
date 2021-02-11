import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import { useCallback, useEffect } from "react";

const scrollEventHandler: any = () => {
  document.addEventListener("scroll", ({ target }: any) => {
    const scrollTopPixels: number = target.scrollingElement.scrollTop;

    if (scrollTopPixels > 0) {
      //TODO: Adding scroll menu animation
    }
  });
};

export default function Layout() {
  useEffect(() => {
    scrollEventHandler();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lewandy Diloné Bonifacio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  );
}
