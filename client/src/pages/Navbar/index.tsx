import React from "react";
import { LogoColisio } from '../../assets';
import {Navbardiv, Logo, Imagelink, Image, Sections, Section, Contactdiv, Contact, Button, Link} from './style'

export const Navbar: React.FC = () => {
    return(
        <Navbardiv id = "start">
            <Logo>
                <Imagelink href="#start"><Image src={LogoColisio}/></Imagelink>
            </Logo>
            <Sections>
                <Section href="#">Sobre nós</Section>
                <Section href="#">Processo</Section>
                <Section href="#">Serviços</Section>
                <Section href="#">Clientes</Section>
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