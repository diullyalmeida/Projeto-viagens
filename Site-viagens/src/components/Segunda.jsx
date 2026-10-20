import React from "react";

const destinos = {
  "Rio de Janeiro": {
    imagem:
      "https://www.civitatis.com/blog/wp-content/uploads/2026/01/rio-janeiro-portada.jpg",
    descricao:
      "Conheça uma das cidades mais famosas do Brasil, com praias incríveis, paisagens naturais e muita cultura.",
    preco: 1899,
    dias: "5 dias e 4 noites",
    hospedagem: "Hotel 3 estrelas com café da manhã",
    passeios: "Cristo Redentor, Pão de Açúcar e praia de Copacabana",
    transporte: "Passagens aéreas de ida e volta",
  },

  "São Paulo": {
    imagem:
      "https://www.zapimoveis.com.br/blog/wp-content/uploads/2023/12/cidade-de-sao-paulo.jpg",
    descricao:
      "Explore uma metrópole cheia de cultura, gastronomia, parques, museus e entretenimento.",
    preco: 1499,
    dias: "4 dias e 3 noites",
    hospedagem: "Hotel 3 estrelas com café da manhã",
    passeios: "Avenida Paulista, Parque Ibirapuera e MASP",
    transporte: "Passagens aéreas de ida e volta",
  },

  Bahia: {
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOLVzR3sxMfQ9Oao9hh1tXFWrY-C2bWcP-Cl7b89D3TPWl8Dd9angAlw5&s=10",
    descricao:
      "Aproveite praias paradisíacas, culinária típica, música e a história da cultura baiana.",
    preco: 2199,
    dias: "6 dias e 5 noites",
    hospedagem: "Hotel próximo à praia com café da manhã",
    passeios: "Pelourinho, Farol da Barra e praias",
    transporte: "Passagens aéreas de ida e volta",
  },

  "Porto Alegre": {
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0L4K9fVgH93mPi8IVtuCs6IBuPCMCi0GJZFoiMNKTA&s=10",
    descricao:
      "Descubra parques, gastronomia regional, cultura gaúcha e o famoso pôr do sol do Guaíba.",
    preco: 1299,
    dias: "4 dias e 3 noites",
    hospedagem: "Hotel 3 estrelas com café da manhã",
    passeios: "Orla do Guaíba, parques e centro histórico",
    transporte: "Passagens aéreas de ida e volta",
  },

  Manaus: {
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Praia_da_Ponta_Negra_%28Manaus%29.jpg",
    descricao:
      "Explore a Amazônia, conheça a natureza e descubra a cultura da região Norte.",
    preco: 2499,
    dias: "5 dias e 4 noites",
    hospedagem: "Hotel com café da manhã",
    passeios: "Encontro das Águas e passeio de barco",
    transporte: "Passagens aéreas de ida e volta",
  },

  Pará: {
    imagem:
      "https://media.istockphoto.com/id/883264796/pt/foto/belem-capital-of-the-state-of-para.jpg?s=612x612&w=0&k=20&c=6F4Sdv8tVh1scN1OdguJmudVEJ06SEScNo_1xgRdr6Y=",
    descricao:
      "Conheça Belém, experimente sabores amazônicos e descubra mercados e atrações históricas.",
    preco: 1999,
    dias: "5 dias e 4 noites",
    hospedagem: "Hotel 3 estrelas com café da manhã",
    passeios: "Ver-o-Peso, Estação das Docas e Mangal das Garças",
    transporte: "Passagens aéreas de ida e volta",
  },
};

function Segunda({ viagem, voltar, finalizar }) {
  const destino = destinos[viagem];

  if (!destino) {
    return <p>Viagem não encontrada.</p>;
  }

  return (
    <div className="detalhes-viagem">
      <img src={destino.imagem} alt={viagem} className="imagem-destino" />
      <h1>Viagem para {viagem}</h1>
      <p>{destino.descricao}</p>
      <h2>O que está incluído?</h2>
      <p>
        <strong>Duração:</strong> {destino.dias}
      </p>
      <p>
        <strong>Hospedagem:</strong> {destino.hospedagem}
      </p>
      <p>
        <strong>Transporte:</strong> {destino.transporte}
      </p>
      <p>
        <strong>Passeios:</strong> {destino.passeios}
      </p>
      <h2>Valor do pacote</h2>
      <h1>
        {destino.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h1>
      <p>Preço ilustrativo por pessoa.</p>
      <button onClick={voltar}>Voltar às viagens</button>{" "}
      <button onClick={finalizar}>Finalizar compra</button>
    </div>
  );
}

export default Segunda;
