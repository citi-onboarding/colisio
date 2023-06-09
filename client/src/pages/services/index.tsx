import { Arrow } from "../../assets"
import { CarouselCards } from "../../components/CarouselCards"
import { CarouselContainer, CarouselStyled, Container, LeftArrowContainer, RightArrowContainer, Title } from "./styles"

export const Services = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '275px',
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    accessibility: true,
    arrows: true,
  }

  const content = [
    {
      image: 'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2023/03/Naruto.webp?fit=1200%2C675&ssl=1',
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
    {
      image: 'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2023/03/Naruto.webp?fit=1200%2C675&ssl=1',
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
    {
      image: 'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2023/03/Naruto.webp?fit=1200%2C675&ssl=1',
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
  ]

  return (
    <Container id="Servicos">
      <Title>
        Serviços
      </Title>
      <CarouselContainer>
        <LeftArrowContainer>
          <img src={Arrow} alt="Seta para esquerda" />
        </LeftArrowContainer>
        <CarouselStyled {...settings}>
          {content.map((service, index) => (
            <CarouselCards
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </CarouselStyled>
        <RightArrowContainer>
          <img src={Arrow} alt="Seta para direita" />
        </RightArrowContainer>
      </CarouselContainer>
    </Container >
  )
}