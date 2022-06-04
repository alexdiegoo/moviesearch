import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getMovieDetails } from '../../movieApi';

import { IMAGE_URL } from '../../movieApi';
import { MovieWatchListStyles, Title, ButtonMovieDetails, MoviePoster, Overview } from './styles';

const MovieWatchList = ({ movie_id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getMovieDetails(movie_id);
      setMovie(data)
    })();
  }, []);
  return (
    <MovieWatchListStyles>
      { !movie && <h1>Carregando</h1>}
      { movie && <React.Fragment>
        <MoviePoster>
          <img src={`${IMAGE_URL}/${movie.poster_path}`} alt={movie.title} />
        </MoviePoster>
        <div>
          <Title>{movie.title}</Title>
          <ButtonMovieDetails>
            <Link to={`/movie/${movie.id}`}>More Details</Link>
          </ButtonMovieDetails>
          <Overview>{movie.overview}</Overview>
        </div>
        </React.Fragment>}
    </MovieWatchListStyles>
  );
}

export default MovieWatchList;