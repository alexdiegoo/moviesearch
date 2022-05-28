import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

export const SliderActorsStyles = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 10px;

  &::-webkit-scrollbar {
  width: 10px;
  height: 5px;          
}

&::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0);       
}

&::-webkit-scrollbar-thumb {
  background-color: ${colors.primary};    
  border-radius: 20px; 
}
`;

export const ActorCard = styled.div`
  width: 180px;
`;

export const ActorImg = styled.img`
  width: 180px;
`;


export const Name = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 5px;
`;