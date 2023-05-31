import styled from 'styled-components'; 
import { theme } from '../../styles/theme';


export const HomeContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  padding: 150px 90px 0 90px;
`;

export const HomeTitle = styled.h1`
  width: 885px;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  text-align: center;
`;

export const HomeDescription = styled.p`
  width: 950px;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: ${theme.colors.gray};
`;

export const HomeButton = styled.a`
  width: 230px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  background-color: ${theme.colors.green};
  color: ${theme.colors.background};

  border-radius: 20px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  transition: 0.5s;
  &:hover {
    background-color: ${theme.colors.lightGreen};

    transition: 0.5s;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`; 
