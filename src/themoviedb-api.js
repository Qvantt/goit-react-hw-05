import axios from "axios";

export async function fetchRequest(url) {
  console.log(url);
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWZlYTc2MGYwYjNiMDA1MzdjZjUxNjAyOThlYzYwMCIsIm5iZiI6MTcyNDYwOTI5MC42MzUyNDIsInN1YiI6IjY2Y2IzZTczN2MxYWUyNGEzMDBmOGJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPLJpJDs-V4d_S27LEUpu9knTECN5dmXgeU3U2N0mMo",
    },
  };
  const response = await axios.get(url, options);

  return response;
}
export const imageUrl = "https://image.tmdb.org/t/p/w500";
