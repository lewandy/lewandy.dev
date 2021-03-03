import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container} id="home">
      <h1 className={styles.title}>
        <span>My name is</span>{" "}
        <a href="https://github.com/lewandy">Lewandy Diloné</a> 
      </h1>

      <p className={styles.description}>Front end Engineer 🚀</p>
      <div>
        <button className={styles.button}>Get it touch</button>
      </div>
    </section>
  );
}
