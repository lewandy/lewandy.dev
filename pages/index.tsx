import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lewandy Diloné Bonifacio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Dominican Republic
        </a>
      </footer>
    </div>
  );
}
