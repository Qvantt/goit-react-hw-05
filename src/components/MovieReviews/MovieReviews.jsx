import { useEffect, useState } from "react";
import { fetchRequest } from "../../themoviedb-api";
import { useParams } from "react-router-dom";
import MovieReviewList from "../MovieReviewList/MovieReviewList";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchRequest(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`
        );
        setReviews(res.data.results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p> Loading...</p>}
      {reviews && <MovieReviewList reviews={reviews} />}
    </>
  );
}
