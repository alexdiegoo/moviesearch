import React from 'react';
import { Link } from 'react-router-dom';
import useGenre from '../../hooks/useGenre';
import { IMAGE_URL } from '../../movieApi';

import { MoviePoster, Details, Title, ButtonMovieDetails } from './styles';



const MovieCard = ({ movie }) => {
  const genres = useGenre(movie.genre_ids);
  
  return (
    <div>
      <MoviePoster>
        <img src={`${IMAGE_URL}/${movie.poster_path}`} alt={movie.title} />
      </MoviePoster>
      <Details>
        <Title>{movie.title}</Title>
        <p style={{ fontSize: 14, fontWeight: 'lighter' }}>{genres}</p>
        <ButtonMovieDetails>
          <Link to={`/movie/${movie.id}`}>More Details</Link>
        </ButtonMovieDetails>
      </Details>
    </div>
  );
}

export default MovieCard;