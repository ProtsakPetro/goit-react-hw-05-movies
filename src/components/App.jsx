import React, { Suspense, lazy } from 'react';
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

        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDescriptions />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;