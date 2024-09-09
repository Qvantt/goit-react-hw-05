import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getDetails } from "../../service/movies-details";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();

  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesDetails() {
      const response = await getDetails(movieId);
      setMovieDetails(response.data);
    }

    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      <Link to={`/movies${movieId}`} state={location}>
        Go back
      </Link>
      {movieDetails && <DetailsInfo details={movieDetails} />}
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
