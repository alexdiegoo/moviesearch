import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../movieApi';

import { Container } from '../GlobalStyle';
import MovieDetails from '../components/MovieDetails';
import SliderActors from '../components/SliderActors';
import Galery from '../components/Galery';

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
      <h1 style={{ margin: '20px 0', fontSize: '3rem' }}>Actors</h1>
      <SliderActors id={id} />
      <h1 style={{ margin: '20px 0', fontSize: '3rem' }}>Galery</h1>
      <Galery id={id} />
    </Container>
  );
}

export default Movie;