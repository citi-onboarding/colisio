import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardBorder = styled.div`
  padding-bottom: 8px;
  border-radius: 8px 8px 8px 16px;
  background: linear-gradient(0deg, rgba(42,42,42,1) 0%, rgba(5,176,85,1) 3%);
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;

  padding: 35px 25px;

  background-color: ${theme.colors.background};

  box-shadow: 0px 0.8px 4.75px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 8px;
`; 

export const CardTitle = styled.h1`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #333333;
`; 

export const CardDescription = styled.p`
  width: 100%;
  height: auto;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;

  color: #333333;

`; 