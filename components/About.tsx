import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src="/me2.jpeg"
          alt="Selfie picture"
        />
      </div>
      <div className={styles.summaryContainer}>
        <h1>About</h1>

        <p>
          I am a Developer passionate for building complete web solutions. I
          mainly focus on front end technologies including but not limited to
          <strong> Vue</strong> and <strong>React</strong>. I am also proficient
          in the back end using NodeJs.
        </p>
      </div>
    </section>
  );
}
