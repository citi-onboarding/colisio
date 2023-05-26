import React from "react";
import { LogoColisio } from '../../assets';
import {Navbardiv, Logo, Imagelink, Image, Sections, Section1, Section2, Section3, Section4, Contactdiv, Contact, Button, Link} from './style'

export const Navbar: React.FC = () => {
    return(
        <Navbardiv id = "start">
            <Logo>
                <Imagelink href="#start"><Image src={LogoColisio}/></Imagelink>
            </Logo>
            <Sections>
                <Section1 href="#">Sobre nós</Section1>
                <Section2 href="#">Processo</Section2>
                <Section3 href="#">Serviços</Section3>
                <Section4 href="#">Clientes</Section4>
            </Sections>
            <Contactdiv>    
                <Link href="#contato">
                    <Button>
                    <Contact>Contato</Contact>
                    </Button>
                </Link>
            </Contactdiv>
        </Navbardiv>
    )
}