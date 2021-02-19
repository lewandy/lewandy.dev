import styles from "../styles/Skills.module.css";

const skills = [
  {
    name: "HTML",
    img: "/skills/html5.svg",
  },
  {
    name: "CSS",
    img: "/skills/css.svg",
  },
  {
    name: "JS",
    img: "/skills/javascript.svg",
  },
  {
    name: "Vue",
    img: "/skills/vuejs.svg",
  },
  {
    name: "React",
    img: "/skills/react.svg",
  },
  {
    name: "Node",
    img: "/skills/node.svg",
  },
];

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h1>Skills</h1>
      <div className={styles.list}>
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.img}
            height="auto"
            width="100"
            alt={skill.name}
          ></img>
        ))}
      </div>
    </section>
  );
}
