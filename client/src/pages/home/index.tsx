import React from "react";
import { HomeContainerdiv, HomeH1, HomeImg, HomeP, Contato, ButtonH, Link, Button } from './styles';

import { ImgHome } from '../../assets';


export const Home: React.FC = () => {
    return (
        <HomeContainerdiv id="start">
            <HomeH1>Construa times de Marketing sob demanda</HomeH1>
            <HomeP>Concentre-se na sua estratégia e colabore com profissionais testados e selecionados com as habilidades específicas que seu negócio precisa.</HomeP>
            <ButtonH>
                <Link href="#Contact">
                    <Button>
                        <Contato>Comece agora</Contato>
                    </Button>
                </Link>
            </ButtonH>
            <HomeImg
                src={ImgHome}
                alt=''
            />
        </HomeContainerdiv>
    )

};