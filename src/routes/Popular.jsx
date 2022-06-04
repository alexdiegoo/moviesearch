import React, { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';
import { getMovies } from '../movieApi';

import { Container, Grid, Loading } from '../GlobalStyle';

const Popular = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      const movies = await getMovies('popular', currentPage);
      setData((prevState) => [...prevState, ...movies] );
    })()
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some(entrie => entrie.isIntersecting)) {
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      }
    });

    intersectionObserver.observe(document.getElementById('endScroll'));

    return () => {
      intersectionObserver.disconnect();
    }
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
      <div id="endScroll"></div>
    </Container>
  );
}

export default Popular;