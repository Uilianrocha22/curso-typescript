import Destructing, { category } from "./components/Destructing";
import FirstComponent from "./components/FirstComponent";
import State from "./components/State";

import "./index.css";

type textOrNull = string | null;
type textFixed = "isso" | "ou" | "aquilo";

function App() {
  // 1 - Variáveis
  const name: string = "Uilian Rocha";
  const age: number = 26;
  const isWorking: boolean = true;

  // 2 - Funções em componentes

  function userGreeting(name: string): string {
    return `Olá ${name}`;
  }

  // 3 - types

  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  //mySecondText = "Opa!";

  const fixedContent: textFixed = "isso";

  // 4 - Contexts

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name} </h2>
      <p>Idade: {age}</p>
      {isWorking ? <p>Está trabalhando!</p> : <p>Esta estudando!</p>}
      <hr />
      <h3>{userGreeting(name)}</h3>
      <hr />
      <FirstComponent
        title="Meu primeiro componente"
        content="Aprendendo Typescript com react no curso do matheus batisti."
      />
      <hr />
      <Destructing
        title="Primeiro post"
        content="Algum post"
        commentsQty={10}
        tags={["Typescript"]}
        category={category.Ts}
      />

      <Destructing
        title=" Segundo post"
        content="outro post"
        commentsQty={5}
        tags={["Python"]}
        category={category.Py}
      />
      <hr />
      <State />
      <hr />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
      <hr />
    </div>
  );
}

export default App;
