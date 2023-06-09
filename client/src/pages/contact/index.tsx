import { Container, Title, Text, ContactButton } from "./styles"

export const Contact = () => {
  return (
    <Container>
      <Title>
        Contato
      </Title>
      <Text>
        Veja como a Colisio pode transformar o seu jeito de
        fazer marketing!
      </Text>
      <ContactButton href="/">
        Falar com um analista
      </ContactButton>
    </Container>
  )
}