import React from "react";
import { SobreNos, LogoColisio2 } from "../../assets";
import { Foto, SobreNosContainer, Titulo, Slogan } from "./styles";


export const Sobre_Nos: React.FC = () => {
    return(
        <SobreNosContainer>
            <Titulo>
                Sobre nós
            </Titulo>
            <Foto>
                <img src={SobreNos} width={400} height={516.63}/>
            </Foto>
            <Slogan>
                Não somos uma agência.
                Somos um caminho.
            </Slogan>
            <Logo>
                <img src={LogoColisio2} width={499} height={79}/>
            </Logo>
        </SobreNosContainer>

    )
    }