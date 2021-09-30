import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container} id="home">
      <h1 className={styles.title}>
        <a href="https://github.com/lewandy">Lewandy Diloné</a>
      </h1>

      <p className={styles.description}>Front End Engineer 🚀</p>
      <div>
        <a href="mailto: lewandydilone@gmail.com" className={styles.button}>
          Get In Touch
        </a>
      </div>
    </section>
  );
}
