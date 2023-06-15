import { AboutUsContainer, AboutUsContent, AboutUsText, AboutUsTextContent, AboutUsTextTitle, AboutUsTitle, Image, LogoColisio } from "./styles"
import { AboutUsImage, BlackColisio } from "../../assets"

export const AboutUs = () => {
  return (
    <AboutUsContainer id="SobreNos">
      <AboutUsTitle>Sobre nós</AboutUsTitle>
      <AboutUsContent>
        <Image src={AboutUsImage} alt="About Us" />
        <AboutUsText>
          <AboutUsTextTitle>
            Não somos uma agência.
            Somos um <span>caminho</span>.
          </AboutUsTextTitle>
          <AboutUsTextContent>
            A Colisio é uma startup que se encontra entre a
            colisão e a colaboração. Utilizamos metodologias
            próprias, ferramentas e práticas inovadoras para
            mostrar o caminho para quem não sabe onde ir.
          </AboutUsTextContent>
        </AboutUsText>
        <LogoColisio>
          <img src={BlackColisio} alt="Logo Colisio" />
        </LogoColisio>
      </AboutUsContent>
    </AboutUsContainer>
  )
}