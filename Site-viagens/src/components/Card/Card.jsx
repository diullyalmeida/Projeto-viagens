import React from "react";
import "./Card.css";

export default function Card({
  imagem,
  titulo,
  preco,
  onConferir,
  botaoTexto = "Conferir",
}) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />
      <div className="balao">
        <div className="balao-texto">
          <h3>{titulo}</h3>
          {preco && <p>{preco}</p>}
        </div>
        <button onClick={onConferir}>{botaoTexto}</button>
      </div>
    </div>
  );
}
