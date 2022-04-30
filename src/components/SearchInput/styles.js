import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const Input = styled.input`
  width: 140px;
  height: 30px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: ${colors.text};
  background-color: ${colors.background};
  font-size: 1.4rem;
  margin-right: 5px;
`;