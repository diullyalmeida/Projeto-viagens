import React from "react";
import Card from "./Card/Card";

export default function Primeira({ onConferir }) {
  return (
    <Card
      imagem="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80"
      titulo="Viagem para o Rio de Janeiro"
      preco="A partir de R$ 1.500"
      onConferir={onConferir}
    />
  );
}
