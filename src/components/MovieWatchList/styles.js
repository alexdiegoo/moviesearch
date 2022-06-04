import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const MovieWatchListStyles = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const MoviePoster = styled.div`
  width: 100px;
  margin-right: 20px;
  & > img {
    width: 100%;
  }
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

export const Overview = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 600px;
  text-align: justify;
  margin: 22px 0;
  display: -webkit-box; 
  text-overflow: ellipsis; 
  overflow: hidden; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;

`;