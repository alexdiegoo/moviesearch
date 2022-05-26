import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const HeaderStyles = styled.header`
  width: 100%;
  height: 80px;
  padding: 16px 0;
  margin-bottom: 20px;
  background-color: ${colors.secondary};
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const LinkLogin = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: ${colors.primary};
  cursor: pointer;
  color: ${colors.text};
  font-family: 'Barlow', sans-serif;
  font-size: 2rem;
  font-weight: bold;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    & {
      display: none;
    }
  }
`;

export const MenuIconContainer = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;