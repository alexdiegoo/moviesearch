import styled, { createGlobalStyle } from 'styled-components';

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

export default GlobalStyle;