import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lewandy Diloné Bonifacio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
      <Footer />

    </div>
  );
}
