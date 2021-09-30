import styles from "../styles/Header.module.css";

const linkStyles: React.CSSProperties = {
  fontWeight: "bold",
  boxShadow: "0px 2px #0070F3",
};

type ComponentProps = {
  isScrolled: boolean;
};

export default function Header(props: ComponentProps) {
  return (
    <header
      className={`${styles.header} ${props.isScrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.navContainer}>
        <div className={styles.navTitle}>
          <img height="35" width="35" src="/ball.svg" />
        </div>

        <ul className={styles.links}>
          <li style={linkStyles}>
            <a href="#home">Home</a>
          </li>
          <li style={linkStyles}>
            <a href="#about">About</a>
          </li>
          <li style={linkStyles}>
            <a href="#skills">Skills</a>
          </li>
          <li style={linkStyles}>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
