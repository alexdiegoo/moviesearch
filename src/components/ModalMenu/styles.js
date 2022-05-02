import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const ModalMenuStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${colors.background};
  font-size: 2rem;
  font-weight: bold;
`;

export const MenuContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;