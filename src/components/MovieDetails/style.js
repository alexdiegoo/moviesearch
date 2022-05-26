import styled from 'styled-components';

export const Details = styled.div`
  display: flex;
  gap: 60px;
`;

export const MoviePoster = styled.div`
  width: 300px;

  & > img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
`;

export const SmallText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`;

export const Overview = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 600px;
  text-align: justify;
  margin: 22px 0;

`;

export const Genres = styled.p`
  font-size: 2rem;
  margin: 20px 0;
`;