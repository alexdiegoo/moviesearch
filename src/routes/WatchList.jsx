import React, { useEffect, useState } from 'react';

import { Container } from '../GlobalStyle';
import MovieWatchList from '../components/MovieWatchList';

const WatchList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('watchlist'));

    if(storage) return setMovies(storage.movies);
  }, []);
  return (
    <Container>
      <h1 style={{ marginBottom: 30 }}>My WatchList</h1>
      {
        movies
          ?  movies.map((id) => <MovieWatchList key={id} movie_id={id} />)
          : <h1>No movies found</h1>
      }
    </Container>
  );
}

export default WatchList;