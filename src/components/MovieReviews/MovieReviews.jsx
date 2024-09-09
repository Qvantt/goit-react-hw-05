import { getReviews } from "../../service/movies-reviews";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await getReviews(movieId);
      setReviews(response.data.results);
      console.log(response.data.results);
    }
    getData();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>
            <p>Author: {item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
