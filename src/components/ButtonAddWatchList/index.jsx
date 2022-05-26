import React from 'react';

import { ButtonStyles } from './styles';
import { MdBookmarkAdd, MdLibraryAdd } from 'react-icons/md';

const ButtonAddWatchList = () => {
  return (
    <ButtonStyles>
      <MdLibraryAdd size={20} />
      Add to my WatchList
    </ButtonStyles>
  );
}

export default ButtonAddWatchList;