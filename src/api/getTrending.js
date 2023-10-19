import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjU5ZDljNDA1MDhkOGIzZjNhOWM1YmJmNGQ4MjMxYiIsInN1YiI6IjY1MjliYTlmODEzODMxMDBjNDhhZjFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fINv1qn7RIF6QqQY4oOTPAsipMP0leD8fxTF0uky0-A'
  }
};

export const findTrending = async () => {
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    // Обробка помилок, якщо такі є
    console.error("Помилка при отриманні даних про популярні фільми:", error);
    throw error;
  }
};