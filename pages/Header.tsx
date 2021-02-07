import styles from "../styles/Header.module.css";

const linkStyles: React.CSSProperties = {
  fontWeight: "bold",
  boxShadow: "0px 3px #0070F3",
};

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
          <li style={linkStyles}>
            <a href="#home">Home</a>
          </li>
          <li style={linkStyles}>
            <a href="#about">About</a>
          </li>
          <li style={linkStyles}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li style={linkStyles}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
