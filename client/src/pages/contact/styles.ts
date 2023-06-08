import styled from "styled-components";
import { PhoneContactImage } from "../../assets";

export const Container = styled.div`
  width: 100%;
  height: 1000px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-image: url(${PhoneContactImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;

  text-align: center;
  color: #FFF;
`; 