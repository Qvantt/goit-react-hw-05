import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmNjODJkODczOWI0NzNmZGI0NzlkYjU0Mzc0NmJhZiIsIm5iZiI6MTcyNTcyMTk0OC43ODc1NzUsInN1YiI6IjY2ZGIyOWUwYWIxODE0ZmQ4Zjk2MzQxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dk6w18_5oBKYgwa11HT6yJ8_EnLSea_6bqzhQJqZDOA",
  },
};

export const getDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return response;
};
