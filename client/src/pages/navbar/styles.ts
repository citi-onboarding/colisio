import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #f5f5f5;

  border-bottom: 1px solid #545454;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const NavbarLogo = styled.img`
  width: 105px;
  height: 38px;
`;

export const NavbarMenu = styled.div`
  width: 40%;
  height: 100%;

  min-width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarMenuItem = styled.a`
  color: ${theme.colors.text};

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  text-decoration: none;

  transition: 0.25s;
  &:hover {
    color: ${theme.colors.green};

    transition: 0.25s;
  }
`;

export const NavbarButton = styled.a`
  width: 150px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: ${theme.colors.green};

  border: 1px solid ${theme.colors.green};
  border-radius: 20px;

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  transition: 0.5s;
  &:hover {
    background-color: ${theme.colors.green};
    color: ${theme.colors.background};

    transition: 0.5s;
  }
`;