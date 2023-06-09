import styled from 'styled-components';
import { Carousel } from 'antd';

export const CarouselStyled = styled(Carousel)`
  width: 100%;
  height: auto;
`;

export const ContainerCard = styled.div`
  width: 60%;
  height: 500px;
`;

export const CardImage = styled.img`
  width: 40%;
  height: 100%;
`;

export const CardContent = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 0;
`; 

export const CardTitle = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
`;

export const CardDescription = styled.p`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
`;