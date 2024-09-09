import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (evt) => {
    evt.preventDefault;
    params.set("query", evt.target.elements.query.value);
    setParams(params);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
