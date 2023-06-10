import React from "react";
import { Rodape, Logo, Endereco, Dados_Endereco, Contato, Dados_Contato, Redes, Redes_Sociais, Redes_Container, Texto_Endereco, Texto_Contato, Icones, Conteudo } from './styles';
import { LogoColisio, LogoFacebook, LogoInstagram, LogoLinkedin } from '../../assets';

export const Footer = () => {
    return (

        <Rodape>
            <Logo>
                <img src={LogoColisio} alt="" height={100.1} width={440}/>
            </Logo>
            <Conteudo>
                <Texto_Endereco>
                    <Endereco>
                        <h1> Endereço </h1>
                    </Endereco>
                    <Dados_Endereco>
                        <h1> Lorem ipsum dolor </h1>
                        <br></br>
                        <h1> Lorem ipsum dolor </h1>
                    </Dados_Endereco>
                </Texto_Endereco>
                    <Texto_Contato>
                    <Contato>
                        <h1> Contato </h1>
                    </Contato>
                    <Dados_Contato>
                        <h1> +55 (12) 91234-5678 </h1>
                        <br></br>
                        <h1> loremipsum@gmail.com </h1>
                    </Dados_Contato>
                </Texto_Contato>
                <Redes_Container>
                    <Redes>
                        <h1> Redes </h1>
                    </Redes>
                    <Icones>
                        <Redes_Sociais>
                            <a href="" target="_blank">
                                <img src={LogoFacebook} alt="Logo Facebook" height={40} width={40}/>
                            </a>
                        </Redes_Sociais>
                        <Redes_Sociais>
                            <a href="" target="_blank">
                                <img src={LogoInstagram} alt="Logo Instagram" height={25} width={25}/>
                            </a>
                        </Redes_Sociais>
                        <Redes_Sociais>
                            <a href="" target="_blank">
                                <img src={LogoLinkedin} alt="Logo Linkedin" height={25} width={25}/>
                            </a>
                        </Redes_Sociais>
                    </Icones>
                </Redes_Container>
            </Conteudo>
        </Rodape>

    )
}
