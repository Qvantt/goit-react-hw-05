import { imageUrl } from "../../themoviedb-api";

export default function MovieCastList({ cast }) {
  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <li key={id}>
            <img width="200" src={imageUrl + profile_path} alt={name}></img>
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
