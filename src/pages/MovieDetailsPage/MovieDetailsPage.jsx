import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getDetails } from "../../service/movies-details";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import { NavLink, Link, useLocation } from "react-router-dom";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  const { movieId } = useParams();

  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    async function getMoviesDetails() {
      setLoader(true);
      try {
        const response = await getDetails(movieId);
        setMovieDetails(response.data);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Go back</Link>
      {movieDetails && <DetailsInfo details={movieDetails} />}
      {loader && <Loader />}
      {error && <Error />}
      <h2>Edditional information</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
