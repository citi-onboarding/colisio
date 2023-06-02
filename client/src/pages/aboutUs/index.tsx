import { AboutUsContainer, AboutUsContent, AboutUsText, AboutUsTextTitle, AboutUsTitle, Image } from "./styles"
import { AboutUsImage } from "../../assets"

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>Sobre nós</AboutUsTitle>
      <AboutUsContent>
        <Image src={AboutUsImage} alt="About Us" />
        <AboutUsText>
          <AboutUsTextTitle>
            Não somos uma agência.
            Somos um <span>caminho</span>.
          </AboutUsTextTitle>
          <AboutUsContent>
            A Colisio é uma startup que se encontra entre a
            colisão e a colaboração. Utilizamos metodologias
            próprias, ferramentas e práticas inovadoras para
            mostrar o caminho para quem não sabe onde ir.
          </AboutUsContent>
        </AboutUsText>
      </AboutUsContent>
    </AboutUsContainer>
  )
}