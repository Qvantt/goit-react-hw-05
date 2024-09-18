import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { fetchRequest } from "../themoviedb-api";
import MovieDetailsContent from "../components/MovieDetailsContent/MovieDetailsContent";
import css from "./MovieDetailsPage.module.css";
import GoBack from "../components/GoBack/GoBack";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getmovieDetails() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchRequest(
          `https://api.themoviedb.org/3/movie/${movieId}`
        );
        setMovieDetails(res.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getmovieDetails();
  }, [movieId]);

  return (
    <>
      <GoBack to={backLinkHref.current}>Go back</GoBack>
      {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p>Loading...</p>}
      {movieDetails && <MovieDetailsContent details={movieDetails} />}
      <p>Additional information</p>
      <ul className={css.list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<p>Loading details...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
