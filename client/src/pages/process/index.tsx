import { ProcessCards } from "../../components/ProcessCards";
import { ProcessContainer, ProcessContent, ProcessTitle } from "./styles";

interface Process {
  id: number;
  title: string;
  description: string;
}

export const Process = () => {
  // const [process, setProcess] = useState<Process[]>([])

  // const getProcess = async () => {
  //   await axios.get('http://localhost:3001/process')
  //     .then((values) => {
  //       setProcess(values.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // useEffect(() => {
  //   getProcess();
  // }, [])

  return (
    <ProcessContainer id="Processo">
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