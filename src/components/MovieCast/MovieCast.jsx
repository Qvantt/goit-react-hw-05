import { useEffect, useState } from "react";
import { fetchRequest } from "../../themoviedb-api";
import { useParams } from "react-router-dom";
import MovieCastList from "../MovieCastList/MovieCastList";

export default function MovieCast() {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCredits() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchRequest(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`
        );

        setCast(res.data.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getCredits();
  }, [movieId]);

  return (
    <>
      {error && <p>Something went wrong! Please try again later.</p>}
      {!loading ? cast && <MovieCastList cast={cast} /> : <p>Loading...</p>}
    </>
  );
}
