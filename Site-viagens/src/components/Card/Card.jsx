import "./Card.css";

function Card({ imagem, alt, paragrafo, botao }) {
  return (
    <div className="card">
      <img src={imagem} alt={alt} />
      <div className="linha">
        <p>{paragrafo}</p>
        <button>{botao}</button>
      </div>
    </div>
  );
}

export default Card;
