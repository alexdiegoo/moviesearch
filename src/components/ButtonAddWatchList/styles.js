import styled from 'styled-components';

import { colors } from '../../GlobalStyle';

export const ButtonStyles = styled.button`
  width: 140px;
  padding: 0 5px;
  height: 40px;
  margin: 30px 0;
  border-radius: 4px;
  background-color: ${colors.primary};
  cursor: pointer;
  color: ${colors.text};
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;