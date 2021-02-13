import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import About from "../components/About";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  //TODO: use context api to propagate these props
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  useEffect(() => {
    const handler = ({ target }: any) => {
      const scrollTopPixels: number = target.scrollingElement.scrollTop;

      if (scrollTopPixels > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, []);

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
