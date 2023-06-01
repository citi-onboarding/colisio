import styled from "styled-components";
import { ColisioS } from "../../assets";

export const ProcessContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 100px;
`;

export const ProcessTitle = styled.h1`
  width: 100%;
  height: auto;

  margin-bottom: 100px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;

  text-align: center;
`; 

export const ProcessContent = styled.div`
  width: 100%;
  height: 680px;

  padding: 80px 30px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 100px;

  background-image: url(${ColisioS});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`; 
