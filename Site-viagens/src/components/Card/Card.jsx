import "./Card.css";

function Card({ imagem, alt, paragrafo, botao, onConferir }) {
  return (
    <div className="card">
      <img src={imagem} alt={alt} />

      <div className="linha">
        <p>{paragrafo}</p>
        <button onClick={onConferir}>{botao}</button>
      </div>
    </div>
  );
}

export default Card;
