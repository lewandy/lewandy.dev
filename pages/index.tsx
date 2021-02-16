import Head from "next/head";
import useScroll from "../hooks/useScroll";
import styles from "../styles/Layout.module.css";

import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import Skills from "../components/Skills"

export default function Layout() {
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
      <Skills />
      <Footer />
    </div>
  );
}
