import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

const params = new URLSearchParams({
  include_adult: 'false',
  language: 'en-US',
  page: '1',
 
});

export const searchMoviesByQuery = async searchQuery => {
  const { data } = await axios.get(`${BASE_URL}?${params}&query=${searchQuery}`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjU5ZDljNDA1MDhkOGIzZjNhOWM1YmJmNGQ4MjMxYiIsInN1YiI6IjY1MjliYTlmODEzODMxMDBjNDhhZjFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fINv1qn7RIF6QqQY4oOTPAsipMP0leD8fxTF0uky0-A',
                                      },
  });

  return data;
};