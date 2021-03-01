import { useEffect, useState } from "react";
import styles from "../styles/Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

const API_REPOSITORIES =
  "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=lewandy";

export type StarredRepository = {
  description: string;
  forks: number;
  language: string;
  link: string;
  owner: string;
  repo: string;
  stars: string;
};

const renderRepository = (repository: StarredRepository) => {
  return <PortfolioItem key={repository.repo} item={repository} />;
};

export default function Portfolio() {
  const [repositories, setRepositories] = useState<StarredRepository[]>([]);

  useEffect(() => {
    fetch(API_REPOSITORIES)
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return (
    <section id="portfolio" className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.list}>{repositories.map(renderRepository)}</div>
    </section>
  );
}
