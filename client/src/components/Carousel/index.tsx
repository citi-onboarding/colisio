import { useEffect, useState } from "react"
import { CardContent, CardDescription, CardImage, CardTitle, CarouselStyled, ContainerCard } from "./styles"
import axios from 'axios'
import image from "antd/es/image"
import { title } from "process"

interface Card {
  id: number
  title: string
  description: string
  image: string
}

export const Carousel = () => {
  // const [cards, setCards] = useState<Card[]>([])

  // const getCards = async () => {
  //   await axios.get('http://localhost:3001/service')
  //     .then((values) => {
  //       setCards(values.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getCards();
  // }, [])

  const cards = [
    {
      image: 'https://picsum.photos/200/300',
      title: 'Titulo 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      image: 'https://picsum.photos/200/100',
      title: 'Titulo 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
    {
      image: 'https://picsum.photos/200/400',
      title: 'Titulo 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.',
    },
  ];


  return (
    <CarouselStyled>
      {cards.map((items, index) => (
        <ContainerCard key={index}>
          <CardImage
            src={items.image}
            alt='Imagem gerada'
          />
          <CardContent>
            <CardTitle>
              {items.title}
            </CardTitle>
            <CardDescription>
              {items.description}
            </CardDescription>
          </CardContent>
        </ContainerCard>
      ))}
    </CarouselStyled>
  )
}