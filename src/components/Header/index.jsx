import React, { useState } from 'react';
import { HeaderStyles, Logo, NavLinks, LinkLogin } from './styles';
import { Container } from '../../GlobalStyle';
import CustomLink from '../CustomLink';
import logo from '../../logo.svg';
import { MdSearch } from 'react-icons/md';
import SearchInput from '../SearchInput';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(prevState => !prevState);
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
          <div style={{ display: 'flex', alignItems: 'center'}}>
            {isVisible && <SearchInput />}
            <MdSearch size={30} onClick={handleClick} />
          </div>
          <LinkLogin>Sign in</LinkLogin>
        </div>
      </Container>
    </HeaderStyles>

  );
}

export default Header;