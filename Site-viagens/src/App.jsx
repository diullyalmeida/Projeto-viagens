import React, { useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

export default function App() {
  const [destinoSelecionado, setDestinoSelecionado] = useState(null);
  const [etapaCheckout, setEtapaCheckout] = useState(false);

  const destinos = [
    {
      id: "rio",
      titulo: "Rio de Janeiro",
      preco: "A partir de R$ 1.500",
      img: "https://www.carpemundi.com.br/wp-content/uploads/2021/09/o-que-fazer-riode-janeiro-rj.jpg.webp",
      descricao:
        "Conheça a Cidade Maravilhosa! Desfrute das praias de Copacabana e Ipanema, visite o Cristo Redentor e o Pão de Açúcar com nossos pacotes exclusivos.",
      atracoes: [
        "Cristo Redentor",
        "Pão de Açúcar",
        "Praia de Copacabana",
        "Jardim Botânico",
      ],
    },
    {
      id: "porto-seguro",
      titulo: "Porto Seguro",
      preco: "A partir de R$ 1.200",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2f/8e/porto-seguro.jpg?w=1400&h=-1&s=1",
      descricao:
        "O berço do Brasil! Muito sol, praias paradisíacas, cabanas animadas e a histórica Passarela do Descobrimento.",
      atracoes: [
        "Arraial d’Ajuda",
        "Trancoso",
        "Passarela do Descobrimento",
        "Praia de Taperapuã",
      ],
    },
    {
      id: "salvador",
      titulo: "Salvador",
      preco: "A partir de R$ 1.350",
      img: "https://content.r9cdn.net/rimg/dimg/bb/88/f4456027-city-26168-1672c373b61.jpg?width=1366&height=768&crop=true",
      descricao:
        "Cultura, história e gastronomia única no Pelourinho, Farol da Barra e muito mais na capital baiana.",
      atracoes: [
        "Pelourinho",
        "Farol da Barra",
        "Elevador Lacerda",
        "Igreja do Bonfim",
      ],
    },
    {
      id: "floripa",
      titulo: "Florianópolis",
      preco: "A partir de R$ 980",
      img: "https://piramides.com.br/media/piramides/2023/09/pontos-turisticos-em-florianopolis.jpg",
      descricao:
        "A Ilha da Magia conta com mais de 40 praias incríveis, dunas, lagoas e uma excelente infraestrutura.",
      atracoes: [
        "Lagoa da Conceição",
        "Praia da Joaquina",
        "Ilha do Campeche",
        "Ponte Hercílio Luz",
      ],
    },
    {
      id: "gramado",
      titulo: "Gramado",
      preco: "A partir de R$ 1.850",
      img: "https://viladamonica.com.br/wp-content/uploads/2023/10/creditos-Cleiton-Thiele-1241-Copia-1024x683.jpg",
      descricao:
        "Um charme europeu na Serra Gaúcha com gastronomia de ponta, parques temáticos e frio aconchegante.",
      atracoes: ["Mini Mundo", "Rua Coberta", "Lago Negro", "Snowland"],
    },
    {
      id: "iguacu",
      titulo: "Foz do Iguaçu",
      preco: "A partir de R$ 1.100",
      img: "https://media.staticontent.com/media/pictures/ac4a9c58-7273-40b2-a278-be52e6777cf8",
      descricao:
        "Uma das Sete Maravilhas da Natureza! Veja a imponência das Cataratas do Iguaçu e o Parque das Aves.",
      atracoes: [
        "Cataratas do Iguaçu",
        "Parque das Aves",
        "Usina de Itaipu",
        "Marco das Três Fronteiras",
      ],
    },
    {
      id: "maragogi",
      titulo: "Maragogi",
      preco: "A partir de R$ 1.700",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/98/63/8e/caption.jpg?w=1200&h=-1&s=1",
      descricao:
        "O Caribe Brasileiro! Piscinas naturais com águas cristalinas perfeitas para mergulho e relaxamento.",
      atracoes: [
        "Galés de Maragogi",
        "Praia de Antunes",
        "Passeio de Buggy",
        "Caminho de Moisés",
      ],
    },
    {
      id: "noronha",
      titulo: "Fernando de Noronha",
      preco: "A partir de R$ 3.200",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/91/EDUARDO_MURUCI_-_BAIA_DOS_PORCOS-%28recorte%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
      descricao:
        "O destino dos sonhos com preservação ambiental, mergulho com tartarugas e vida marinha exótica.",
      atracoes: [
        "Baía do Sancho",
        "Baía dos Porcos",
        "Mirante do Boldró",
        "Mergulho com Cilindro",
      ],
    },
    {
      id: "lencois",
      titulo: "Lençóis Maranhenses",
      preco: "A partir de R$ 2.100",
      img: "https://mcbtur.com.br/wp-content/uploads/2025/01/Pequenos-Lencois-Maranhenses.webp",
      descricao:
        "Um deserto de dunas brancas repleto de lagoas de água doce azuis e verdes.",
      atracoes: ["Lagoa Azul", "Lagoa Bonita", "Atins", "Rio Preguiças"],
    },
    {
      id: "natal",
      titulo: "Natal",
      preco: "A partir de R$ 1.400",
      img: "https://esmeraldapraiahotel.com.br/wp-content/uploads/2025/02/shutterstock_2297889873.jpg",
      descricao:
        "A Cidade do Sol! Dunas gigantescas em Genipabu, passeios de buggy inesquecíveis e praias quentes.",
      atracoes: [
        "Dunas de Genipabu",
        "Praia de Ponta Negra",
        "Maior Cajueiro do Mundo",
        "Parrachos de Maracajaú",
      ],
    },
  ];

  const resetarNavegacao = () => {
    setDestinoSelecionado(null);
    setEtapaCheckout(false);
  };

  return (
    <div className="site-wrapper">
      <header className="top-bar">
        <div className="top-bar-left">
          <span className="contact-item">0800 700 8080</span>
          <span className="contact-item">suporte@viagensnalidi.com</span>
        </div>
        <div className="top-bar-right">
          <span className="top-link">Central de Ajuda</span>
          <span className="top-link">Atendimento 24h</span>
        </div>
      </header>

      <main className="app-container">
        {etapaCheckout ? (
          <section className="checkout-section">
            <button
              className="btn-voltar"
              onClick={() => setEtapaCheckout(false)}
            >
              ← Voltar para detalhes
            </button>

            <div className="checkout-card">
              <div className="checkout-hero-banner">
                <img
                  src={destinoSelecionado.img}
                  alt={destinoSelecionado.titulo}
                />
                <div className="checkout-banner-overlay">
                  <span className="badge-white">Finalização de Reserva</span>
                  <h2>{destinoSelecionado.titulo}</h2>
                  <p className="checkout-preco-tag">
                    {destinoSelecionado.preco}
                  </p>
                </div>
              </div>

              <div className="checkout-body">
                <h3>Preencha seus dados para garantir a viagem</h3>

                <form
                  className="checkout-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Reserva solicitada com sucesso!");
                    resetarNavegacao();
                  }}
                >
                  <div className="form-group">
                    <label>Nome Completo</label>
                    <input
                      type="text"
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>

                  <div className="form-group-row">
                    <div className="form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Data desejada da viagem</label>
                    <input type="date" required />
                  </div>

                  <button type="submit" className="btn-confirmar">
                    Confirmar Reserva
                  </button>
                </form>
              </div>
            </div>
          </section>
        ) : destinoSelecionado ? (
          <section className="destino-detalhes">
            <button
              className="btn-voltar"
              onClick={() => setDestinoSelecionado(null)}
            >
              ← Voltar para todos os destinos
            </button>

            <div className="detalhes-container">
              <img
                src={destinoSelecionado.img}
                alt={destinoSelecionado.titulo}
                className="detalhes-img"
              />
              <div className="detalhes-info">
                <span className="badge">Destino Selecionado</span>
                <h1>{destinoSelecionado.titulo}</h1>
                <p className="detalhes-preco">{destinoSelecionado.preco}</p>
                <p className="detalhes-descricao">
                  {destinoSelecionado.descricao}
                </p>

                <h3>Principais Atrações:</h3>
                <ul>
                  {destinoSelecionado.atracoes.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>

                <button
                  className="btn-reservar"
                  onClick={() => setEtapaCheckout(true)}
                >
                  Garantir esta viagem
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="hero-header">
              <span className="badge">Explore o Mundo</span>
              <h1>
                Colecione momentos, <span>não coisas.</span>
              </h1>
              <p className="subtitulo">
                A vida é curta demais para ficar no mesmo lugar. Descubra
                destinos incríveis, viva novas experiências e crie memórias que
                durarão para sempre.
              </p>
            </section>

            <section className="cards-grid">
              {destinos.map((destino) => (
                <Card
                  key={destino.id}
                  imagem={destino.img}
                  titulo={destino.titulo}
                  preco={destino.preco}
                  onConferir={() => setDestinoSelecionado(destino)}
                />
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
