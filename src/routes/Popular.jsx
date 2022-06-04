import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';
import { getMovies } from '../movieApi';

import { Container, Grid, Loading } from '../GlobalStyle';

const Popular = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const movies = await getMovies('popular', 1);
      setData(movies);
    })()
    

  }, []);

  return (
    <Container>
      <Grid>
        {
          data
            ? data.map(movie => <MovieCard key={movie.id} movie={movie} />) 
            : <Loading />
        }
      </Grid>
    </Container>
  );
}

export default Popular;