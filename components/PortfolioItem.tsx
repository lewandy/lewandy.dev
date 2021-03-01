import { StarredRepository } from "./Porfolio";
import styles from "../styles/PortfolioItem.module.css";

type PortfolioItemPros = {
  item: StarredRepository;
};

export default function PortfolioItem({ item }: PortfolioItemPros) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{item.repo}</h2>
        <div>
          <img src="/icons/star.svg" alt="star icon" height={15} width={15} /> {" "}
          {item.stars}
        </div>
      </div>
      <p>{item.description}</p>
      <ul>
        <li>
          <strong>Language/Tool/Framework:</strong> {item.language}
        </li>
      </ul>
      <a className={styles.link} href={item.link}>
        Check it out
      </a>
    </div>
  );
}
