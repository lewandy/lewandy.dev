import styles from "../styles/Skills.module.css";

const skills = [
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
  {
    name: "Laravel",
    img: "/skills/laravel.svg",
  },
  {
    name: "AWS",
    img: "/skills/aws.svg",
  },
];

export default function Skills() {
  return (
    <section className={styles.container} id="skills">
      <h1>Skills</h1>
      <div className={styles.list}>
        {skills.map((skill, index) => (
          <img key={index} src={skill.img} height="auto" width="100" alt={skill.name}></img>
        ))}
      </div>
    </section>
  );
}
