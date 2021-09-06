import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container} id="home">
      <h1 className={styles.title}>
        <a href="https://github.com/lewandy">Lewandy Diloné</a>
      </h1>

      <p className={styles.description}>Front End Engineer 🚀</p>
      <div>
        <button className={styles.button}>Contact Me</button>
      </div>
    </section>
  );
}
