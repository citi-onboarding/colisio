import { CardBorder, CardContainer, CardDescription, CardTitle } from "./styles"

interface ProcessCardsProps {
  title: string
  description: string
}

export const ProcessCards = (props: ProcessCardsProps) => {
  return (
    <CardBorder>
      <CardContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardContainer>
    </CardBorder>
  )
}