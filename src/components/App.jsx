import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'layout/Layout';
import Home from 'pages/Home';

const Movies = lazy(() => import('pages/Movies'));
const MovieDescriptions = lazy(() => import('pages/MovieDescriptions'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDescriptions />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;