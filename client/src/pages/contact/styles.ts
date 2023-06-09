import styled from "styled-components";
import { PhoneContactImage } from "../../assets";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-image: url(${PhoneContactImage});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 100px;
`;

export const Title = styled.h1`
  width: 100%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;

  margin-bottom: 100px;

  text-align: center;
  color: #FFF;
`;

export const Text = styled.p`
  width: 40%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;

  margin-bottom: 50px;

  color: #FEFEFE;
`;

export const ContactButton = styled.a`
  width: 300px;
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

  cursor: pointer;

  transition: 0.5s;
  &:hover {
    background-color: ${theme.colors.lightGreen};

    transition: 0.5s;
  }
`;