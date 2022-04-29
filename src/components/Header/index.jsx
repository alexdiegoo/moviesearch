import React from 'react';
import { HeaderStyles, Logo, NavLinks, LinkLogin } from './styles';
import { Container } from '../../GlobalStyle';

import logo from '../../logo.svg';
import { MdSearch } from 'react-icons/md';
const Header = () => {
  return (
    <HeaderStyles>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Logo src={logo} alt="Movie" />
        <NavLinks>
          <a>Popular</a>
          <a>Top Rated</a>
          <a>Upcoming</a>
        </NavLinks>
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <MdSearch size={30}/>
          <LinkLogin>Sign in</LinkLogin>
        </div>
      </Container>
    </HeaderStyles>

  );
}

export default Header;