import React from 'react'
import { ActorWrap, CastItem, CastUl } from './Parts.styled';

const defaultImg =
  'https://cdn.create.vista.com/api/media/medium/123720148/stock-photo-businessman-sleeping-on-a-computer-keyboard?token=';

const CastList = ({ castData }) => {

  return (
    <CastUl>
      {castData.map(({ id, character, name, profile_path }) => (
        <CastItem key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
            width={250}
          />
          <ActorWrap>
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </ActorWrap>
        </CastItem>
      ))}
    </CastUl>
  );
};

export default CastList