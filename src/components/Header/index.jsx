import React from 'react';
import { HeaderStyles, Logo, NavLinks, LinkLogin } from './styles';
import { Container } from '../../GlobalStyle';
import CustomLink from '../CustomLink';
import logo from '../../logo.svg';
import { MdSearch } from 'react-icons/md';

const Header = () => {
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
          <MdSearch size={30}/>
          <LinkLogin>Sign in</LinkLogin>
        </div>
      </Container>
    </HeaderStyles>

  );
}

export default Header;