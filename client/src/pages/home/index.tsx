import { HomeButton, HomeContainer, HomeDescription, Image, HomeTitle } from './styles';
import { HomeImage } from '../../assets';

export const Home = () => {
    return (
        <HomeContainer>
            <HomeTitle>
                Construa times de Marketing sob demanda
            </HomeTitle>
            <HomeDescription>
                Concentre-se na sua estratégia e colabore
                comprofissionais testados e selecionados
                com as habilidades específicas que seu negócio
                precisa
            </HomeDescription>
            <HomeButton href="/#contato">
                Comece agora
            </HomeButton>
            <Image src={HomeImage} />
        </HomeContainer>
    );
}