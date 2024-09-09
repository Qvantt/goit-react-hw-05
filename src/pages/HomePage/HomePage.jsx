import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getMovies } from "../../service/trending-api";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getData() {
      const data = await getMovies();
      setMovies(data);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={styles.movieList}>
        {movies.map((item) => (
          <li key={item.id} className={styles.movieItem}>
            <Link
              to={`/movies/${item.id}`}
              state={{ from: location }}
              className={styles.movieLink}>
              <span className={styles.marker}>•</span>
              <h3>{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
