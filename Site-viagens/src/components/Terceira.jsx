import React from "react";

const precos = {
  "Rio de Janeiro": 1899,
  "São Paulo": 1499,
  Bahia: 2199,
  "Porto Alegre": 1299,
  Manaus: 2499,
  Pará: 1999,
};

function Terceira({ viagem, voltar }) {
  const preco = precos[viagem];

  if (preco === undefined) {
    return <p>Nenhuma viagem selecionada.</p>;
  }

  return (
    <div className="compra">
      <h1>Finalizar compra</h1>

      <p>Confira os detalhes do seu pacote:</p>

      <h2>Viagem para {viagem}</h2>

      <h1>
        {preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h1>

      <p>Valor ilustrativo por pessoa.</p>

      <hr />

      <p>Deseja continuar com esta viagem?</p>

      <button onClick={voltar}>Voltar</button>
      <button
        onClick={() =>
          alert("Esta é uma demonstração. A compra não foi realizada.")
        }
      >
        Confirmar pedido
      </button>
    </div>
  );
}

export default Terceira;
