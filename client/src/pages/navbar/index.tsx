import { LogoNavbar } from "../../assets";
import { NavbarButton, NavbarContainer, NavbarLogo, NavbarMenu, NavbarMenuItem } from "./styles";


export const Navbar = () => {
  return (
    <NavbarContainer>
      <a href="#Home">
        <NavbarLogo src={LogoNavbar} alt="Logo da colisio" />
      </a>
      <NavbarMenu>
        <NavbarMenuItem href="/#SobreNos">
          Sobre nós
        </NavbarMenuItem>
        <NavbarMenuItem href="/#Processo">
          Processo
        </NavbarMenuItem>
        <NavbarMenuItem href="/#Servicos">
          Serviços
        </NavbarMenuItem>
        <NavbarMenuItem href="/#SejaUmColiser">
          Seja um coliser
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarButton href="/#Contato">Contato</NavbarButton>
    </NavbarContainer>
  );
}