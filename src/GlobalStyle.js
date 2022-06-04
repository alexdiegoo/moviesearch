import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const colors = {
  primary: '#F71A2C',
  secondary: '#0D0D0D',
  background: '#000',
  text: '#fff'
}

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }
  
  body {
    width: 100%;
    background-color: ${colors.background};
    color: ${colors.text};
    font-family: 'Barlow', sans-serif;
  }
`;

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 375px) {
    & {
      width: 95%;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (min-width: 900px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid #000;
  border-left: 3px solid ${colors.primary};
  animation: ${rotate} 2s linear infinite;
  margin-top: 40px;
`;

export default GlobalStyle;