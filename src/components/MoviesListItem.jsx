import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ItemText, ItemTextWrap } from './Parts.styled';

const defaultImg =
  'https://cdn.create.vista.com/api/media/medium/123720148/stock-photo-businessman-sleeping-on-a-computer-keyboard?token=';

const MoviesListItem = ({ title, id, poster_path }) => {
    
    const location = useLocation();
    
  return (
    <Link to={`/movies/${id}`} state={location}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        alt={title}
      />
      <ItemTextWrap>
        <ItemText>{title}</ItemText>
      </ItemTextWrap>
    </Link>
  );
};

export default MoviesListItem