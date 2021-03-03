import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import styles from "../styles/Header.module.css";
import HamburgerMenu from "./HamburgerMenu";

const linkStyles: React.CSSProperties = {
  fontWeight: "bold",
  boxShadow: "0px 2px #0070F3",
};

type ComponentProps = {
  isScrolled: boolean;
};

export default function Header(props: ComponentProps) {
  const { isDesktopOrLaptop } = useMediaQuery();
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header
      className={`${styles.header} ${props.isScrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.navContainer}>
        <div className={styles.navTitle}>
          <h1>Lewandy Dilone.</h1>
        </div>

        {!isDesktopOrLaptop ? (
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => {
              setIsOpen(!isOpen);
            }}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        ) : (
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
        )}
      </nav>
    </header>
  );
}
