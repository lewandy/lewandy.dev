import styles from "../styles/Header.module.css";

const linkStyles: React.CSSProperties = {
  fontWeight: "bold",
  boxShadow: "0px 2px #0070F3",
  marginRight: "4rem",
};

type ComponentProps = {
  isScrolled: boolean;
};

export default function Header(props: ComponentProps) {
  return (
    <header
      className={`${styles.header} ${props.isScrolled ? styles.scrolled : ""}`}
    >
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
