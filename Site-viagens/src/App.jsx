import { useState } from "react";
import "./App.css";
import Primeira from "./components/Primeira";
import Segunda from "./components/Segunda";
import Terceira from "./components/Terceira";

function App() {
  const [pagina, setPagina] = useState(0);

  return (
    <div className="app">
      <h1>Viagens nalidi</h1>
      <p>Não é apenas uma viagem, mas sim uma experiência!</p>
      <hr />
      <nav>
        {" "}
        <div className="botoes">
          <button onClick={() => setPagina(0)}></button>
          <button onClick={() => setPagina(1)}></button>
          <button onClick={() => setPagina(2)}></button>
        </div>
      </nav>
      {pagina == 0 && <Primeira />}
      {pagina == 1 && <Segunda />}
      {pagina == 2 && <Terceira />}
    </div>
  );
}

export default App;
