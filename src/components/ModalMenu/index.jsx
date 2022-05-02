import React from 'react';
import CustomLink from '../CustomLink';

import { ModalMenuStyles, MenuContainer } from './styles';

const ModalMenu = ({ setState }) => {
  return (
    <ModalMenuStyles>
      <MenuContainer>
        <CustomLink onClick={() => setState() } to="/popular">Popular</CustomLink>
        <CustomLink onClick={() => setState() } to="/toprated">Top Rated</CustomLink>
        <CustomLink onClick={() => setState() } to="/upcoming">Upcoming</CustomLink>
        <p onClick={() => setState() }>Return</p>
      </MenuContainer>
    </ModalMenuStyles>
  );
}

export default ModalMenu;