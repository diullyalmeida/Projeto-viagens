import React from "react";
import Card from "./Card/Card";

function Primeira({ onConferir }) {
  return (
    <>
      <Card
        imagem="https://www.civitatis.com/blog/wp-content/uploads/2026/01/rio-janeiro-portada.jpg"
        alt="Rio de Janeiro"
        paragrafo="Viagem para o Rio de Janeiro"
        botao="Conferir"
        onConferir={() => onConferir("Rio de Janeiro")}
      />

      <Card
        imagem="https://www.zapimoveis.com.br/blog/wp-content/uploads/2023/12/cidade-de-sao-paulo.jpg"
        alt="São Paulo"
        paragrafo="Viagem para São Paulo"
        botao="Conferir"
        onConferir={() => onConferir("São Paulo")}
      />

      <Card
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTOLVzR3sxMfQ9Oao9hh1tXFWrY-C2bWcP-Cl7b89D3TPWl8Dd9angAlw5&s=10"
        alt="Bahia"
        paragrafo="Viagem para Bahia"
        botao="Conferir"
        onConferir={() => onConferir("Bahia")}
      />

      <Card
        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0L4K9fVgH93mPi8IVtuCs6IBuPCMCi0GJZFoiMNKTA&s=10"
        alt="Porto Alegre"
        paragrafo="Viagem para Porto Alegre"
        botao="Conferir"
        onConferir={() => onConferir("Porto Alegre")}
      />

      <Card
        imagem="https://upload.wikimedia.org/wikipedia/commons/7/76/Praia_da_Ponta_Negra_%28Manaus%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original"
        alt="Manaus"
        paragrafo="Viagem para Manaus"
        botao="Conferir"
        onConferir={() => onConferir("Manaus")}
      />

      <Card
        imagem="https://media.istockphoto.com/id/883264796/pt/foto/belem-capital-of-the-state-of-para.jpg?s=612x612&w=0&k=20&c=6F4Sdv8tVh1scN1OdguJmudVEJ06SEScNo_1xgRdr6Y="
        alt="Pará"
        paragrafo="Viagem para o Pará"
        botao="Conferir"
        onConferir={() => onConferir("Pará")}
      />
    </>
  );
}

export default Primeira;
