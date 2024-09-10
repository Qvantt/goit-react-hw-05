import { Link } from "react-router-dom";

export default function MovieList({ movie, state }) {
  return (
    <>
      <ul>
        {movie.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={state}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
