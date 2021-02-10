import styles from "../styles/Main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>My name is</span>{" "}
        <a href="https://github.com/lewandy">Lewandy Diloné</a>
      </h1>

      <p className={styles.description}>Front end Engineer 🚀</p>
    </main>
  );
}
