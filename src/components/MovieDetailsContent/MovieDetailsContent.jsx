import { imageUrl } from "../../themoviedb-api";
import css from "./MovieDetailsContent.module.css";

export default function MovieDetailsContent({ details }) {
  const { title, release_date, genres, backdrop_path, vote_average, overview } =
    details;

  return (
    <>
      <div className={css.wrapper}>
        <img
          src={imageUrl + backdrop_path}
          alt={title}
          width="300"
          height="300"
          className={css.image}></img>
        <div className={css.contentWrapper}>
          <h3>
            {title} ({release_date.slice(0, 4)})
          </h3>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
    </>
  );
}
