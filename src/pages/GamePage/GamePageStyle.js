import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const GameGrid = styled.div`
  display: grid;
  grid-template-areas: ". . . . ." ". . . . ." ". . . . ." ". . . . .";
`;

export const Header = styled.div`
  font-size: 50px;
  color: white;
`;

export const Reset = styled.div`
  position: absolute;
  font-size: 35px;
  color: white;
  opacity: .5;
  top:0;
  right:0;
  margin:5px;
  cursor: pointer;
`;