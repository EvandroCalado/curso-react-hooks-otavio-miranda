import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClickInc = () => {
    return setCount(count => count + 1); // Forma 1 de return
  };

  const handleClickDec = () => {
    return setCount(count - 1); // Forma 2 de return
  };

  // // componentDidUpadate - Executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpadate')
  // })

  // // componentDidMount - Executa quando carrega a página
  // useEffect(() => { 
  //   console.log('componentDidMount')
  // }, [])

  // com dependêcia - Executa sempre que a dependência mudar
  useEffect(() => { 
    console.log('mudou para', count)
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Contador: {count}</h3>
        <button onClick={handleClickInc}>+1</button>
        <button onClick={handleClickDec}>-1</button>
      </header>
    </div>
  );
}

export default App;

