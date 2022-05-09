import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const MoviePoster = styled.div`
  width: 230px;

  & > img {
    width: 100%;
  }
`;

export const Details = styled.div`
  padding: 10px 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  max-width: 230px;
`;

export const ButtonMovieDetails = styled.button`
  width: 140px;
  height: 35px;
  padding: 10px;

  border: 1px solid ${colors.primary};
  border-radius: 4px;
  background: none;
  margin-top: 10px;

  & > a {
    color: #fff;
    font-family:'Barlow', sans-serif;
    text-decoration: none;
  }
`;