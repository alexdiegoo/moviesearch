import React from 'react';

import { ButtonStyles } from './styles';
import { MdLibraryAdd } from 'react-icons/md';

const ButtonAddWatchList = ({ movie_id, setWatchList }) => {

  const handleClick = () => {
   let watchlist = JSON.parse(localStorage.getItem('watchlist'));

   if(watchlist) {
     watchlist.movies.push(movie_id)
     localStorage.setItem('watchlist', JSON.stringify(watchlist));
     setWatchList(watchlist.movies);
   } else {
     localStorage.setItem('watchlist', JSON.stringify({ movies: [movie_id]}));
   }
  }

  return (
    <ButtonStyles onClick={handleClick}>
      <MdLibraryAdd size={20} />
      Add to my WatchList
    </ButtonStyles>
  );
}

export default ButtonAddWatchList;