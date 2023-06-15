import { ProcessCards } from "../../components/ProcessCards";
import { ProcessContainer, ProcessContent, ProcessTitle } from "./styles";

// interface Process {
//   id: number;
//   title: string;
//   description: string;
// }

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

  const content = [
    {
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
    {
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
    {
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
    {
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
    {
      title: 'Naruto',
      description: 'Naruto é um menino que vive em Konoha no Sato, a vila ninja do País do Fogo.',
    },
  ]

  return (
    <ProcessContainer id="Processo">
      <ProcessTitle>
        Processo
      </ProcessTitle>
      <ProcessContent>
        {content.map((item, index) => (
          <ProcessCards key={index} title={item.title} description={item.description} />
        ))}
      </ProcessContent>
    </ProcessContainer>
  );
}