import React from "react";
import Card from "./Card/Card";

function Primeira({ setPagina }) {
  return (
    <>
      <Card
        imagem="https://www.civitatis.com/blog/wp-content/uploads/2026/01/rio-janeiro-portada.jpg"
        alt="Rio de Janeiro"
        paragrafo="Viagem para o Rio de Janeiro"
        botao="Conferir"
        onClick={() => setPagina(1)}
      />
      <Card
        imagem="https://www.zapimoveis.com.br/blog/wp-content/uploads/2023/12/cidade-de-sao-paulo.jpg"
        alt="São Paulo"
        paragrafo="Viagem para São Paulo"
        botao="Conferir"
        onClick={() => setPagina(1)}
      />
      <Card
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOLVzR3sxMfQ9Oao9hh1tXFWrY-C2bWcP-Cl7b89D3TPWl8Dd9angAlw5&s=10"
        alt="Bahia"
        paragrafo="Viagem para Bahia"
        botao="Conferir"
        onClick={() => setPagina(1)}
      />
    </>
  );
}

export default Primeira;
