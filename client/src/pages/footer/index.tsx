import React from "react";
import { Rodape, Logo, Endereco, Dados_Endereco, Contato, Dados_Contato, Redes, Facebook, Instagram, Linkedin } from './styles';
import { LogoColisio, LogoFacebook, LogoInstagram, LogoLinkedin } from '../../assets';

export const Footer = () => {
    return (

        <Rodape>
            <Logo>
                <img src={LogoColisio} alt="" height={100.1} width={440}/>
            </Logo>
            <Endereco>
                <h1> Endereço </h1>
            </Endereco>
            <Dados_Endereco>
                <h1> Lorem ipsum dolor </h1>
                <br></br>
                <h1> Lorem ipsum dolor </h1>
            </Dados_Endereco>
            <Contato>
                <h1> Contato </h1>
            </Contato>
            <Dados_Contato>
                <h1> +55 (12) 91234-5678 </h1>
                <br></br>
                <h1> loremipsum@gmail.com </h1>
            </Dados_Contato>
            <Redes>
                <h1> Redes </h1>
            </Redes>
            <Facebook>
                <a href="" target="_blank">
                    <img src={LogoFacebook} alt="" height={40} width={40}/>
                </a>
            </Facebook>
            <Instagram>
                <a href="" target="_blank">
                <img src={LogoInstagram} alt="" height={25} width={25}/>
                </a>
            </Instagram>
            <Linkedin>
                <a href="" target="_blank">
                <img src={LogoLinkedin} alt="" height={25} width={25}/>
                </a>
            </Linkedin>
        </Rodape>

    )
}
