import css from "./DetailsInfo.module.css";

export default function DetailsInfo({ details }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
        alt={details.title}
      />
      <h3>{details.title}</h3>
      <p>Use score: {Math.round(details.vote_average) * 10}%</p>
      <h3>Overview</h3>
      <p>{details.overview}</p>
      <h3>Genres</h3>
      <ul className={css.ul}>
        {details.genres.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
