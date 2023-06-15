import { ColiserCard } from "../../components/ColiserCard";
import { BeAColiser, Benefits, Container, Requirements, BeAColiserTitle, Subtitle, Title, ContactButton } from "./styles"

export const Colisers = () => {
  const requirements = [
    {
      title: "Experiência em marketing e comunicação",
    },
    {
      title: "Habilidades especializadas",
    },
    {
      title: "Profissionalismo e comprometimento",
    },
    {
      title: "Portifólio de trabalho",
    },
  ];

  const benefits = [
    {
      title: "Oportunidades de trabalho",
    },
    {
      title: "Flexibilidade e autonomia",
    },
    {
      title: "Pagamentos seguros e garantidos",
    },
  ];

  return (
    <Container>
      <Title>Seja um Coliser</Title>
      <Subtitle>
        Na Colisio, valorizamos o talento e a expertise dos
        profissionais de marketing e comunicação. Se você é
        um especialista em acelerar a comunicação colaborativa
        e deseja se juntar a uma plataforma inovadora, você
        está no lugar certo. <span>Torne-se um Coliser e faça parte
          da nossa comunidade de profissionais qualificados.</span>
      </Subtitle>
      <BeAColiser>
        <Requirements>
          <BeAColiserTitle>
            Requisitos para se tornar um coliser
          </BeAColiserTitle>
          {requirements.map((item, index) => (
            <ColiserCard key={index} text={item.title} />
          ))}
        </Requirements>
        <Benefits>
          <BeAColiserTitle>
            Vantagens de ser um coliser
          </BeAColiserTitle>
          {benefits.map((item, index) => (
            <ColiserCard key={index} text={item.title} />
          ))}
          <ContactButton>
            <a href="/#">
              Torne-se um coliser
            </a>
          </ContactButton>
        </Benefits>
      </BeAColiser>
    </Container>
  );
}