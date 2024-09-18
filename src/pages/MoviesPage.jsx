import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { fetchRequest } from "../themoviedb-api";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (value, actions) => {
    if (value === "") return;
    setQuery(value.search);
    const q = searchParams.get("q");
    setSearchParams({ q: value.search });
    actions.resetForm();
  };

  useEffect(() => {
    if (!query) return;
    async function moviesRequest() {
      try {
        setMovies([]);
        setLoading(true);
        setError(false);
        const res = await fetchRequest(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`
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
  }, [query]);

  return (
    <>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field className={css.input} type="text" name="search"></Field>
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      {error && <p>Something went wrong! Please try again later.</p>}
      {loading && <p>Loading...</p>}
      {movies && <MovieList list={movies} />}
      {query && !loading && movies.length === 0 && <p>Nothing found.</p>}
    </>
  );
}
