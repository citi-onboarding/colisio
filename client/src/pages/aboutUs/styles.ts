import styled from "styled-components";
import { theme } from "../../styles/theme";

export const AboutUsContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 90px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 

export const AboutUsTitle = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 50px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;

  text-align: center;
`;

export const AboutUsContent = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;

`;

export const Image = styled.img`
  width: 400px;
  height: auto;
`;

export const AboutUsText = styled.div`
  width: 400px;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`; 

export const AboutUsTextTitle = styled.h1`
  width: 100%;
  height: 100px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  span {
    color: ${theme.colors.green};
  }
`; 

export const AboutUsTextContent = styled.p`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;

`;
