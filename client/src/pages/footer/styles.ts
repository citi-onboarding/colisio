import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FooterContainer = styled.div`
  width: 100%;
  height: 360px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: linear-gradient(0deg, rgba(25,25,25,1) 0%, rgba(55,55,55,1) 100%);
`; 

export const FooterLogo = styled.img`
  width: 400px;
  height: 91px;
`;

export const FooterContent = styled.div`
  width: auto;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 20px;
`;

export const FooterContentTitle = styled.h1`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: ${theme.colors.background};
`; 

export const FooterContentText = styled.p`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${theme.colors.background};
`; 

export const FooterSocialMediaContainer = styled.div`
  width: auto;
  height: 100px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  gap: 20px;
`; 

export const FooterSocialMedia = styled.a`
  width: auto;
  height: 25px;
`;