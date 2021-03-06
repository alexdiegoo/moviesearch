import React, { useEffect, useState } from 'react';
import { IMAGE_URL } from '../../movieApi';

import { Details, MoviePoster, Title, Overview, Genres, SmallText } from './style';
import ButtonAddWatchList from '../ButtonAddWatchList';
import ButtonRemoveWatchList from '../ButtonRemoveWatchList';

const MovieDetails = ({ data }) => {
  const [watchlist, setWatchList] = useState(null);

  useEffect(() => {
    const watchlistStorage = JSON.parse(localStorage.getItem('watchlist'));

    if(watchlistStorage) setWatchList(watchlistStorage.movies);
  }, []);

  const genres = data.genres.reduce((prev, current) => {
    return `${prev} ${current.name},`;
  }, '')

  return (
    <Details>
      <MoviePoster>
        <img src={`${IMAGE_URL}/${data.poster_path}`} alt={data.original_title} />
      </MoviePoster>
      <div>
        <Title>{data.original_title}</Title>
        <Overview>{data.overview}</Overview>
        <Genres><strong>Genres:</strong> {genres}</Genres>
        <Title>{data.vote_average}</Title>
        {
          watchlist && watchlist.find((movie_id) => movie_id === data.id) 
            ? <ButtonRemoveWatchList movie_id={data.id} setWatchList={setWatchList} /> 
            : <ButtonAddWatchList movie_id={data.id} setWatchList={setWatchList} />
        }
        <div style={{ display: 'flex', gap: 30, marginTop: 10 }}>
          <SmallText>Release date: {new Date(data.release_date).toLocaleDateString()}</SmallText>
          <SmallText>Duration: {(data.runtime / 60).toFixed(0)}h{(data.runtime % 60)}min</SmallText>
        </div>
      </div>
    </Details>
  );
}

export default MovieDetails;