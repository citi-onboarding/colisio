import React from "react";
import { SobreNos, LogoColisio2 } from "../../assets";
import { Foto, SobreNosContainer, Titulo, Slogan, Logo, Texto, Conteudo, Parte_Escrita, Caminho } from "./styles";


export const Sobre_Nos: React.FC = () => {
    return(

        <SobreNosContainer>
            <Titulo>
                Sobre nós
            </Titulo>
            <Conteudo>
                <Foto>
                    <img src={SobreNos} width={400} height={516.63}/>
                </Foto>
                <Parte_Escrita>
                    <Slogan>
                        Não somos uma agência.
                        Somos um <Caminho>caminho.</Caminho>
                    </Slogan>
                    <Texto>
                        A Colisio é uma startup que se encontra entre a colisão e a colaboração. Utilizamos metodologias próprias, ferramentas e práticas inovadoras para mostrar o caminho para quem não sabe onde ir.
                    </Texto>
                </Parte_Escrita>
                <Logo>
                    <img src={LogoColisio2} width={675} height={165}/>
                </Logo>
            </Conteudo>
        </SobreNosContainer>

    )
    }