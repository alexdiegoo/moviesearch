import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSearchMovies } from '../movieApi';

import { Container, Loading, Grid } from '../GlobalStyle';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const [movies, setMovies] = useState(null);
  const { query } = useParams();
  
  useEffect(() => {
    (async () => {
      const data = await getSearchMovies(query);
      setMovies(data);
    })();
  }, []);
  
  return (
    <Container>
      {
        !movies && <Loading />
      }
      <Grid>
        {
          movies && movies.results.map(movie => <MovieCard key={movie.id} movie={movie} />)
        }
      </Grid>
      
    </Container>

  );
}

export default Search;