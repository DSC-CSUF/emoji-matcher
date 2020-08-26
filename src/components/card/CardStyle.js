import styled from 'styled-components';

export const CardBody = styled.div`
  background-color: transparent;
  perspective: 1000px;
  height: 200px;
  width: 130px;
  margin: 5px;
  cursor: pointer;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${props => props.animate ? "rotateY(-180deg)" : "0"};
`;

export const CardFront = styled.div`
  position: absolute;
  font-size: 50px;
  color: #14110F;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
              0 2px 2px rgba(0, 0, 0, 0.12),
              0 4px 4px rgba(0, 0, 0, 0.12),
              0 8px 8px rgba(0, 0, 0, 0.12),
              0 16px 16px rgba(0, 0, 0, 0.12);
  background-color: #FFFCF9;
`;

export const CardBack = styled.div`
  position: absolute;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: #FFFCF9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12),
              0 2px 2px rgba(0, 0, 0, 0.12),
              0 4px 4px rgba(0, 0, 0, 0.12),
              0 8px 8px rgba(0, 0, 0, 0.12),
              0 16px 16px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  transform: rotateY(180deg);
`;