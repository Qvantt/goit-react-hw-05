import { useEffect, useState } from "react";
import { getCard } from "../../service/movies-card";
import { useParams } from "react-router-dom";

export default function MovieCast() {
  const [card, setCard] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getCard(movieId);
      setCard(response.data.cast);
    }
    getData();
  }, [movieId]);

  return (
    <>
      <ul>
        {card.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt={item.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
