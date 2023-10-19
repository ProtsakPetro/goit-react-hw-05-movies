import React from 'react';
import { InfoWrapper, SingleImg, Wrapper } from './Parts.styled';


const SingleMovie = ({ data }) => {
 
  const defaultImg =
    'https://cdn.create.vista.com/api/media/medium/123720148/stock-photo-businessman-sleeping-on-a-computer-keyboard?token=';
  const { poster_path, title, vote_average, overview, genres } = data;
  return (
    <InfoWrapper>
      <div>
        <SingleImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </div>

      <Wrapper>
        <h1>{title}</h1>
        <h3>Rating: {vote_average}</h3>
        <p>{overview}</p>
        <div>
          <h2>Genres:</h2>
          <ul>
            {genres.map(one => (
              <li key={one.id}>{one.name}</li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </InfoWrapper>
  );
};

export default SingleMovie;