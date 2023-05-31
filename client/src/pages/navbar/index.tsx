import { LogoNavbar } from "../../assets";
import { NavbarButton, NavbarContainer, NavbarLogo, NavbarMenu, NavbarMenuItem } from "./styles";


export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo src={LogoNavbar} alt="Logo da colisio" />
      <NavbarMenu>
        <NavbarMenuItem href="/#SobreNos">
          Sobre nós
        </NavbarMenuItem>
        <NavbarMenuItem href="/#Processos">
          Processos
        </NavbarMenuItem>
        <NavbarMenuItem href="/#Servicos">
          Serviços
        </NavbarMenuItem>
        <NavbarMenuItem href="/#Clientes">
          Clientes
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarButton href="/#contato">Contato</NavbarButton>
    </NavbarContainer>
  );
}