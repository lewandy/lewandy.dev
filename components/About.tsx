import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src="/me2.jpeg" alt="Selfie picture" />
      </div>
      <div className={styles.summaryContainer}>
        <h1>About</h1>

        <p>
          I am a Developer with <strong>strong</strong> skills in building web
          applications with 
          <strong> Javascript.</strong> I mainly focus on front-end technologies
          including but not limited to Vue and React. I am also proficient in
          the back end using Node.
        </p>
      </div>
    </section>
  );
}
