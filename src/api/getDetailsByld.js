import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const getDetailsById = async movieId => {
  const { data } = await axios(`${BASE_URL}/${movieId}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjU5ZDljNDA1MDhkOGIzZjNhOWM1YmJmNGQ4MjMxYiIsInN1YiI6IjY1MjliYTlmODEzODMxMDBjNDhhZjFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fINv1qn7RIF6QqQY4oOTPAsipMP0leD8fxTF0uky0-A`,
    },
  });

  return data;
};