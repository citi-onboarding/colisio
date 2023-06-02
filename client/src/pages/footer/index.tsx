import { FacebookIcon, InstagramIcon, LinkedinIcon, LogoColisio } from "../../assets"
import { FooterContainer, FooterContent, FooterContentText, FooterContentTitle, FooterLogo, FooterSocialMedia, FooterSocialMediaContainer } from "./styles"

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={LogoColisio} alt="Logo" />
      <FooterContent>
        <FooterContentTitle>
          Endereço
        </FooterContentTitle>
        <FooterContentText>
          Lorem, ipsum dolor.
          <br />
          <br />
          Lorem, ipsum dolor.
        </FooterContentText>
      </FooterContent>
      <FooterContent>
        <FooterContentTitle>
          Contato
        </FooterContentTitle>
        <FooterContentText>
          +55 (12) 91234-5678
          <br />
          <br />
          loremipsum@gmail.com
        </FooterContentText>
      </FooterContent>
      <FooterContent>
        <FooterContentTitle>
          Redes
        </FooterContentTitle>
        <FooterSocialMediaContainer>
          <FooterSocialMedia href="https://www.facebook.com" target="_blank">
            <img src={FacebookIcon} alt="Ícone do facebook" />
          </FooterSocialMedia>
          <FooterSocialMedia href="https://www.instagram.com" target="_blank">
            <img src={InstagramIcon} alt="Ícone do instagram" />
          </FooterSocialMedia>
          <FooterSocialMedia href="https://www.linkedin.com" target="_blank">
            <img src={LinkedinIcon} alt="Ícone do linkedin" />
          </FooterSocialMedia>
        </FooterSocialMediaContainer>
      </FooterContent>
    </FooterContainer>
  )
}