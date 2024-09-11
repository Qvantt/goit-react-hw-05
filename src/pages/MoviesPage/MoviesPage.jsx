// import { useState, useEffect } from "react";
// import { getMoviesPage } from "../../service/movies-page";
// import MovieList from "../../components/MovieList/MovieList";
// import SearchForm from "../../components/SearchForm/SearchForm";
// import { useLocation, useSearchParams } from "react-router-dom";
// import Loader from "../../components/Loader/Loader";
// import Error from "../../components/Error/Error";

// export default function MoviesPage() {
//   const [movie, setMovie] = useState([]);
//   const [error, setError] = useState(false);
//   const [loader, setLoader] = useState(false);

//   const [params] = useSearchParams();

//   const query = params.get("query");

//   const location = useLocation();

//   useEffect(() => {
//     if (!query) {
//       return;
//     }
//     async function getData() {
//       setLoader(true);
//       try {
//         const response = await getMoviesPage(query);
//         setMovie(response);
//       } catch {
//         setError(true);
//       } finally {
//         setLoader(false);
//       }
//     }
//     getData();
//   }, [query]);

//   return (
//     <>
//       <SearchForm />
//       {loader && <Loader />}
//       {error && <Error />}
//       {movie && <MovieList movie={movie} state={{ from: location }} />}
//     </>
//   );
// }
import { useState, useEffect } from "react";
import { getMoviesPage } from "../../service/movies-page";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function MoviesPage() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  // Використовуємо useSearchParams для управління параметрами пошуку
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // Отримуємо поточний запит з URL

  const location = useLocation();

  // Викликаємо API при зміні квері
  useEffect(() => {
    if (!query) {
      return;
    }
    async function getData() {
      setLoader(true);
      try {
        const response = await getMoviesPage(query);
        setMovie(response);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getData();
  }, [query]);

  // Функція handleSubmit для оновлення параметрів пошуку
  const handleSubmit = (searchQuery) => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      {/* Передаємо handleSubmit у форму пошуку */}
      <SearchForm onSubmit={handleSubmit} />
      {loader && <Loader />}
      {error && <Error />}
      {movie && <MovieList movie={movie} state={{ from: location }} />}
    </>
  );
}
