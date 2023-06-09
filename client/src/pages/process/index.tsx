import { ProcessCards } from "../../components/ProcessCards";
import { ProcessContainer, ProcessContent, ProcessTitle } from "./styles";

export const Process = () => {
  return (
    <ProcessContainer id="Processos">
      <ProcessTitle>
        Processo
      </ProcessTitle>
      <ProcessContent>
        <ProcessCards
          title="LOREM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex justo, porta in imperdiet vel, luctus quis augue."
        />
        <ProcessCards
          title="LOREM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex justo, porta in imperdiet vel, luctus quis augue."
        />
        <ProcessCards
          title="LOREM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex justo, porta in imperdiet vel, luctus quis augue."
        />
        <ProcessCards
          title="LOREM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex justo, porta in imperdiet vel, luctus quis augue."
        />
        <ProcessCards
          title="LOREM"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ex justo, porta in imperdiet vel, luctus quis augue."
        />
      </ProcessContent>
    </ProcessContainer>
  );
}