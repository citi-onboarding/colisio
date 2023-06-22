import styled from "styled-components";
import { GreenCircle } from "../../assets";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 100px 0;

  gap: 50px;

  background: url(${GreenCircle});
  background-repeat: no-repeat;
  background-position: 0 50%;
`;

export const Title = styled.h1`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
`;

export const Subtitle = styled.h2`
  max-width: 950px;
  width: 75%;
  height: auto;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  span {
    color: ${theme.colors.green};
  }
`;

export const BeAColiser = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

export const BeAColiserTitle = styled.h3`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;

  margin-bottom: 30px;
`;

export const Requirements = styled.div`
  width: 45%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

export const Benefits = styled.div`
  width: 45%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

export const ContactButton = styled.a`
  width: 300px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  justify-self: flex-end;
  align-self: flex-end;

  background-color: ${theme.colors.green};
  
  border-radius: 20px;
  
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  
  cursor: pointer;
  
  margin-top: 40px;
  
  transition: 0.5s;

  &:hover {
    background-color: ${theme.colors.lightGreen};
    
    transition: 0.5s;
  }
  
  a {
    text-decoration: none;
    
    color: ${theme.colors.background};
  }
`;
