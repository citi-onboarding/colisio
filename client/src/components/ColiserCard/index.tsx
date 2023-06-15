import { Container, Text } from "./styles"

interface ColiserCardProps {
  text: string
}

export const ColiserCard = ({ text }: ColiserCardProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}