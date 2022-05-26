import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../movieApi';

import { Container } from '../GlobalStyle';
import MovieDetails from '../components/MovieDetails';

const Movie = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const movieDetails = await getMovieDetails(id);
      setData(movieDetails);
    })()
  }, []);

  return (
    <Container>
      {data && <MovieDetails data={data} />}
    </Container>
  );
}

export default Movie;