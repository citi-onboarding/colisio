import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 880px;
  height: 500px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  background: #FFFFFF;

  border-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;

export const CardImage = styled.img`
  width: 40%;
  height: 100%;

  border-radius: 10px 0 0 10px;

  object-fit: cover;

  background: #C4C4C4;
`;

export const CardContent = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 100px 50px;
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