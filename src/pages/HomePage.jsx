import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchRequest } from "../themoviedb-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function moviesRequest() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchRequest(
          "https://api.themoviedb.org/3/trending/movie/day"
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    moviesRequest();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p>Loading...</p>}
      {movies && <MovieList list={movies} />}
    </>
  );
}
