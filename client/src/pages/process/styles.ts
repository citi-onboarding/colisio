import styled from "styled-components";
import { ColisioS } from "../../assets";

export const ProcessContainer = styled.div`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 150px 90px 0 90px;
`;

export const ProcessTitle = styled.h1`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;

  text-align: center;
`; 

export const ProcessContent = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  background-image: url(${ColisioS});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`; 
