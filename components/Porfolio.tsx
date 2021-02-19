import { useEffect } from "react";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio() {
  useEffect(() => {
    //Call to api
  }, []);

  return (
    <section id="portfolio" className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.list}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  );
}
