import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import useScroll from "../hooks/useScroll";

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
      <Footer />
    </div>
  );
}
