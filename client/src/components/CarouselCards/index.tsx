import { CardContent, CardDescription, CardImage, CardTitle, ContainerCard } from "./styles"

interface CardProps {
  title: string
  description: string
  image: string
}

export const CarouselCards = ({ title, description, image }: CardProps) => {

  return (
    <ContainerCard>
      <CardImage src={image} alt='Imagem' />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </ContainerCard>
  )
}