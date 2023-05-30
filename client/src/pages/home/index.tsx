import React from "react";
import Anchor from "react-anchor-link-smooth-scroll"
import { HomeContainerdiv, HomeH1, HomeImg, HomeP, Contact, ButtonH, AnchorH } from './styles';
import { RandonHomeImg } from '../../assets';


export const Home: React.FC = () => {
    return (
        <HomeContainerdiv>
            <HomeH1>Construa times de Marketing sob demanda</HomeH1>
            <HomeP>Concentre-se na sua estratégia e colabore com profissionais testados e selecionados com as habilidades específicas que seu negócio precisa.</HomeP>
            <ButtonH>
                <Anchor href='#Contact' offset='100'>ComeceAgora</Anchor>
            </ButtonH>
            <HomeImg
                src={RandonHomeImg}
                alt=''
            />
            <div id="Contact"></div>
        </HomeContainerdiv>
    )

};