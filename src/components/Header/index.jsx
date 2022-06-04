import React, { useState } from 'react';

import { HeaderStyles, 
         Logo, 
         NavLinks, 
         SearchInputContainer, 
         MenuIconContainer } from './styles';
import { Container } from '../../GlobalStyle';
import logo from '../../logo.svg';
import { MdSearch, MdMenu } from 'react-icons/md';

import CustomLink from '../CustomLink';
import SearchInput from '../SearchInput';
import ModalMenu from '../ModalMenu';

const Header = () => {
  const [inputIsVisible, setInputIsVisible] = useState(false);
  const  [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleInputClick = () => {
    setInputIsVisible(prevState => !prevState);
  }

  const handleMenuClick = () => {
    setMenuIsVisible(prevState => !prevState);
  }


  return (
    <HeaderStyles>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Logo src={logo} alt="Movie" />
        <NavLinks>
          <CustomLink to="/popular">Popular</CustomLink>
          <CustomLink to="/toprated">Top Rated</CustomLink>
          <CustomLink to="/upcoming">Upcoming</CustomLink>
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <SearchInputContainer>
            {inputIsVisible && <SearchInput />}
            <MdSearch style={{ cursor: 'pointer' }} size={30} onClick={handleInputClick} />
          </SearchInputContainer>
          <MenuIconContainer>
            <MdMenu onClick={handleMenuClick} size={30} />
          </MenuIconContainer>
          <CustomLink to="/watchlist">My WatchList</CustomLink>
        </div>
      </Container>
      {menuIsVisible && <ModalMenu setState={setMenuIsVisible} />}
    </HeaderStyles>

  );
}

export default Header;