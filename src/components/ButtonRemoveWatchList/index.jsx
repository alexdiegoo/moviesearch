import React from 'react';

import { MdBookmarkRemove } from 'react-icons/md';
import { ButtonStyles } from './styles';

const ButtonRemoveWatchList = ({ movie_id, setWatchList }) => {

  const handleClick = () => {
   let watchlist = JSON.parse(localStorage.getItem('watchlist'));

   const newWatchList = watchlist.movies.filter((movie) => movie !== movie_id);

   localStorage.setItem('watchlist', JSON.stringify({ movies: newWatchList}));
   setWatchList(newWatchList);
  }

  return (
    <ButtonStyles onClick={handleClick}>
      <MdBookmarkRemove size={20} />
      Remove from list
    </ButtonStyles>
  );
}

export default ButtonRemoveWatchList;