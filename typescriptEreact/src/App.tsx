import "./index.css";

function App() {
  // 1 - Variáveis
  const name: string = "Uilian Rocha";
  const age: number = 26;
  const isWorking: boolean = true;

  // 2 - Funções em componentes

  function userGreeting(name: string): string {
    return `Olá ${name}`;
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name} </h2>
      <p>Idade: {age}</p>
      {isWorking ? <p>Está trabalhando!</p> : <p>Esta estudando!</p>}
      <hr />
      <h3>{`${userGreeting(name)}!`}</h3>
    </div>
  );
}

export default App;
