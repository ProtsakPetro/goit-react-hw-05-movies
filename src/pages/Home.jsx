import React, { useEffect, useState } from 'react';

import { findTrending } from 'api/getTrending';
import MoviesList from 'components/MoviesList';
import { Home as HomeContainer } from 'components/Parts.styled';
const Home = () => {
  const [trending, setTrending] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await findTrending();
        setTrending(data.results);
      } catch (err) { 
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContainer> {}
      {isLoading && 'Loading...'}
      {error && <p>{error}</p>}
      {trending && <MoviesList data={trending} />}
    </HomeContainer>
  );
};

export default Home;