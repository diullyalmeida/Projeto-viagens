import { useState } from "react";
import "./App.css";
import Primeira from "./components/Primeira";
import Segunda from "./components/Segunda";
import Terceira from "./components/Terceira";

function App() {
  const [pagina, setPagina] = useState(0);
  const [viagem, setViagem] = useState("");

  return (
    <div className="app">
      <h1>Viagens nalidi</h1>
      <p>Não é apenas uma viagem, mas sim uma experiência!</p>
      <hr />

      <nav>
        <div className="botoes">
          <button onClick={() => setPagina(0)}></button>
          <button onClick={() => setPagina(1)}></button>
          <button onClick={() => setPagina(2)}></button>
        </div>
      </nav>

      {pagina === 0 && (
        <Primeira
          onConferir={(destino) => {
            setViagem(destino);
            setPagina(1);
          }}
        />
      )}

      {pagina === 1 && (
        <Segunda
          viagem={viagem}
          voltar={() => setPagina(0)}
          finalizar={() => setPagina(2)}
        />
      )}

      {pagina === 2 && <Terceira viagem={viagem} voltar={() => setPagina(1)} />}
    </div>
  );
}

export default App;
