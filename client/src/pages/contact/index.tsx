import { Container, Title, Text, ContactButton } from "./styles"

export const Contact = () => {
  return (
    <Container id="Contato">
      <Title>
        Contato
      </Title>
      <Text>
        Veja como a Colisio pode transformar o seu jeito de
        fazer marketing!
      </Text>
      <ContactButton
        href="https://wa.me/558198839119"
        target="_blank"
      >
        Falar com um analista
      </ContactButton>
    </Container>
  )
}