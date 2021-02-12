import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} width="400" height="300" src="/me2.jpeg" alt="Selfie picture" />
      </div>
      <div>Text</div>
    </section>
  );
}
