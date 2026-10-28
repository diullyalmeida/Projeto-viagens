import React, { useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

export default function App() {
  const [destinoSelecionado, setDestinoSelecionado] = useState(null);
  const [etapaCheckout, setEtapaCheckout] = useState(false);

  const destinos = [
    {
      id: "rota",
      titulo: "Rota dos Milagres",
      precoTotal: "R$ 3.000",
      diaria: "R$ 600 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Praia do Patacho",
        "Piscinas Naturais de Japaratinga",
        "Santuário do Peixe-Boi",
      ],
      img: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2020/12/Sao-Miguel-dos-Milagres-AL-Capa.jpg",
      descricao:
        "Praias desertas de água morna protegidas por uma gigantesca barreira de corais. Substitui o agito das grandes capitais por calmaria, passeios de jangada rústica até piscinas naturais cristalinas e pousadas charmosas integradas à natureza.",
      atracoes: [
        "Cachoeira Véu de Noiva",
        "Circuito das Cachoeiras",
        " Caverna Aroe Jari",
        "Mirante Geodésico",
      ],
    },
    {
      id: "chapada",
      titulo: "Chapada dos Guimarães",
      precoTotal: "R$ 2.250",
      diaria: "R$ 450 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hospedagem com Café",
        "Traslado Aeroporto",
        "Passeio com Guia",
      ],
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d4/44/b8/mirante-morro-dos-ventos.jpg?w=1400&h=-1&s=1",
      descricao:
        "Uma chapada imponente com a logística mais fácil do Brasil, colada em um aeroporto. O cenário traz mirantes com vistas infinitas, cavernas de arenito e cachoeiras de cor avermelhada que exigem pouca caminhada, oferecendo conforto e contemplação sem perrengues.",
      atracoes: [
        "Cachoeira Véu de Noiva",
        "Circuito das Cachoeiras",
        " Caverna Aroe Jari",
        "Mirante Geodésico",
      ],
    },
    {
      id: "capitola",
      titulo: "Capitólio (MG) — Canyons e Cachoeiras",
      precoTotal: "2.100",
      diaria: "R$ 420 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hospedagem com Café",
        "Traslado Aeroporto",
        "Passeio com Guia",
      ],
      img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/3d/0f/1e/cachoeira-do-canyon.jpg",
      descricao:
        "O Mar de Minas mistura paredões de pedra gigantes com águas esmeralda. É um destino com excelente infraestrutura de lazer, ideal para navegar de lancha rápida, banhar-se em quedas d'água acessíveis e comer peixes de água doce na beira do lago.",
      atracoes: [
        "Mirante dos Canyons",
        "passeio de lancha no Lago de Furnas",
        "Trilha do Sol",
      ],
    },
    {
      id: "bento",
      titulo: "Bento Gonçalves",
      precoTotal: "R$ 2.900",
      diaria: "R$ 580 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hospedagem com Café",
        "Traslado Aeroporto",
        "Passeio com Guia",
      ],
      img: "https://irp.cdn-website.com/d47b88dc/dms3rep/multi/265673-x-atracoes-incriveis-da-regiao-dos-vinhedos-em-bento-goncalves-4b167240.jpg",
      descricao:
        "A Toscana Brasileira combina estradas de pedra e vinícolas premiadas. Um destino sofisticado e romântico focado em enoturismo, onde você caminha por rotas históricas de imigrantes italianos e desfruta de jantares coloniais fartos e degustações exclusivas.",
      atracoes: [
        "Vale dos Vinhedos",
        "Caminhos de Pedra",
        "passeio de Maria Fumaça",
      ],
    },

    {
      id: "parana",
      titulo: "Paraná",
      precoTotal: "R$ 1.500",
      diaria: "R$ 300 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hospedagem com Café",
        "Traslado Aeroporto",
        "Passeio com Guia",
      ],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CBZekTlljO5ARey-fl9_WZBx3GCkazp9MyrZ5F9gyOJ6xeclYN65hOY&s=10",
      descricao:
        "Conheça o Paraná! Aproveite as belezas naturais, história e obras de engenharia espalhadas pelo estado.",
      atracoes: [
        "Cataratas do Iguaçu",
        "Jardim botânico de Curitiba",
        "Centro histórico (Largo da Ordem)",
        "Ilha do Mel",
      ],
    },

    {
      id: "rio",
      titulo: "Rio de Janeiro",
      precoTotal: "R$ 1.500",
      diaria: "R$ 300 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hospedagem com Café",
        "Traslado Aeroporto",
        "Passeio com Guia",
      ],
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
      precoTotal: "R$ 1.200",
      diaria: "R$ 240 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Resort All Inclusive",
        "Traslado",
        "Seguro Viagem",
      ],
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
      precoTotal: "R$ 1.350",
      diaria: "R$ 270 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hotel Beira-Mar com Café",
        "Passeio Histórico",
        "Traslado",
      ],
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
      precoTotal: "R$ 980",
      diaria: "R$ 245 / dia",
      duracao: "4 dias / 3 noites",
      incluso: [
        "Hospedagem",
        "Café da Manhã",
        "Passeio de Barco",
        "Seguro Viagem",
      ],
      img: "https://piramides.com.br/media/piramides/2023/09/pontos-turisticos-em-florianopolis.jpg",
      descricao:
        "A Ilha da Magia conta com mais de 40 praias incríveis, dunas, lagoas e uma excelente infraestrutura.",
      atracoes: [
        "Lagoa da Conceição",
        "Praia da Joaquina",
        "Praia de Canasvieiras",
        "Ponte Hercílio Luz",
      ],
    },
    {
      id: "gramado",
      titulo: "Gramado",
      precoTotal: "R$ 1.850",
      diaria: "R$ 370 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hotel Centro com Café",
        "Tour de Chocolate",
        "Ingresso Snowland",
      ],
      img: "https://viladamonica.com.br/wp-content/uploads/2023/10/creditos-Cleiton-Thiele-1241-Copia-1024x683.jpg",
      descricao:
        "Um charme europeu na Serra Gaúcha com gastronomia de ponta, parques temáticos e frio aconchegante.",
      atracoes: ["Mini Mundo", "Rua Coberta", "Lago Negro", "Snowland"],
    },
    {
      id: "iguacu",
      titulo: "Foz do Iguaçu",
      precoTotal: "R$ 1.100",
      diaria: "R$ 275 / dia",
      duracao: "4 dias / 3 noites",
      incluso: [
        "Passagem Aérea",
        "Hotel com Café",
        "Ingresso Cataratas",
        "Traslado",
      ],
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
      precoTotal: "R$ 1.700",
      diaria: "R$ 340 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Pousada Beira-Mar",
        "Passeio às Galés",
        "Traslado",
      ],
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
      precoTotal: "R$ 3.200",
      diaria: "R$ 640 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Pousada Exclusiva",
        "Taxa TPA Inclusa",
        "Tour Ilha de Buggy",
      ],
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
      precoTotal: "R$ 2.100",
      diaria: "R$ 420 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hospedagem em Barreirinhas",
        "Tour de 4x4 nas Dunas",
        "Traslado",
      ],
      img: "https://mcbtur.com.br/wp-content/uploads/2025/01/Pequenos-Lencois-Maranhenses.webp",
      descricao:
        "Um deserto de dunas brancas repleto de lagoas de água doce azuis e verdes.",
      atracoes: ["Lagoa Azul", "Lagoa Bonita", "Atins", "Rio Preguiças"],
    },
    {
      id: "natal",
      titulo: "Natal",
      precoTotal: "R$ 1.400",
      diaria: "R$ 280 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        "Passagem Aérea",
        "Hotel Beira-Mar",
        "Passeio de Buggy Genipabu",
        "Traslado",
      ],
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
    {
      id: "domingos",
      titulo: " Domingos Martins",
      precoTotal: "R$  1.950 ",
      diaria: "R$ 390 / dia",
      duracao: "5 dias / 4 noites",
      incluso: [
        ": Quarto privativo para casal ",
        "viajante solo com café da manhã colonia",
        "Passeios",
      ],
      img: "https://imgmd.net/images/v1/guia/1703355/domingos-martins-pedra-azul.jpg",
      descricao:
        "Uma vila alemã e italiana cercada por montanhas e florestas tropicais. ",
      atracoes: [
        "Parque Estadual da Pedra Azul,",
        "Rota do Lagarto",
        "Piscinas Naturais da Pedra Azul",
        "Quadrado de São Paulinho.",
      ],
    },
    {
      id: "rota pirenópolis",
      titulo: "Pirenópolis ",
      precoTotal: " R$ 2.050 ",
      diaria: "R$ • 410/ dia",
      duracao: "5 dias / 4 noites",
      incluso: ["Hospedagem  ", "Alimentação ", "Transporte Local"],
      img: "https://www.gov.br/sudeco/pt-br/municipios/goias/outubro/pirenopolis-go/@@images/image-1660-04502441c061b8e0505a6fb6459cf3b5.jpeg",
      descricao:
        "O refúgio serrano de Dom Pedro II combina palácios históricos e alta gastronomia",
      atracoes: [
        "Centro Histórico (Igreja Matriz.) ",
        " Cachoeira do Lázaro.",
        " Pico dos Pireneus.",
      ],
    },
    {
      id: "rota Petrópolis",
      titulo: " Petrópolis ",
      precoTotal: " R$ 2.800 ",
      diaria: "R$ • 560/ dia",
      duracao: "5 dias / 4 noites",
      incluso: ["Hospedagem  ", "Alimentação ", "Transporte Local"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErspLxDLY1UfDwXoROqiEZUsavr3B4kiKFoUb3pgWNg&s=10",
      descricao:
        "O refúgio serrano de Dom Pedro II combina palácios históricos e alta gastronomia",
      atracoes: [
        "Museu Imperial",
        " Palácio de Cristal",
        "Casa de Santos Dumont",
        "• Palácio Quitandinha.",
      ],
    },
    {
      id: "rota ibicoara",
      titulo: "Ibicoara",
      precoTotal: " R$ 2.115 ",
      diaria: "R$ • 430/ dia",
      duracao: "5 dias / 4 noites",
      incluso: ["Hospedagem  ", "Passeios ", "Transporte Local"],
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZJjc0T1Jj2-8MvxCiDRMG4ccbPzHWkJ3lQBl8jA80A&s=10",
      descricao:
        "A face sul e menos explorada da Chapada Diamantina guarda as cachoeiras mais imponentes do país.",
      atracoes: [
        "Cachoeira do Buracão ",
        "Cachoeira da Fumacinha",
        " Campo do Gado ",
        " Cânion do Espalhado",
      ],
    },
    {
      id: "rota  canindé de São Francisco ",
      titulo: " Canindé de São Francisco ",
      precoTotal: " R$ 1900 ",
      diaria: "R$ • 380/ dia",
      duracao: "5 dias / 4 noites",
      incluso: ["Hospedagem  ", "Alimentação ", "Transporte Local"],
      img: "https://www.sergipetradetour.com.br/webroot/ckfinder/userfiles/files/WhatsApp%20Image%202021-06-26%20at%2011_21_52.jpeg",
      descricao:
        "Uma surpreendente base à beira-rio que combina a história do Cangaço com águas espetaculares. ",
      atracoes: [
        " Cânion de Xingó",
        " Vale dos Mestres",
        "  Trilha do Angico ",
        "  Complexo Turístico de Xingó.",
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
                  <div className="checkout-precos-resumo">
                    <span className="preco-destaque">
                      Total: {destinoSelecionado.precoTotal}
                    </span>
                    <span className="diaria-tag">
                      ({destinoSelecionado.diaria})
                    </span>
                  </div>
                </div>
              </div>

              <div className="checkout-body">
                <div className="resumo-pacote-box">
                  <p>
                    <strong>Duração:</strong> {destinoSelecionado.duracao}
                  </p>
                  <p>
                    <strong>O pacote inclui:</strong>{" "}
                    {destinoSelecionado.incluso.join(", ")}
                  </p>
                </div>

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

                  <div className="form-group-row">
                    <div className="form-group">
                      <label>Data da Viagem</label>
                      <input type="date" required />
                    </div>
                    <div className="form-group">
                      <label>Número de Hóspedes</label>
                      <select required defaultValue="2">
                        <option value="1">1 Pessoa (Individual)</option>
                        <option value="2">2 Pessoas (Casal / Dupla)</option>
                        <option value="3">3 Pessoas</option>
                        <option value="4">4+ Pessoas (Família)</option>
                      </select>
                    </div>
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

                <div className="valores-bloco">
                  <span className="detalhes-preco">
                    {destinoSelecionado.precoTotal}{" "}
                    <small>/ pacote total</small>
                  </span>
                  <span className="detalhes-diaria">
                    Diária a partir de{" "}
                    <strong>{destinoSelecionado.diaria}</strong>
                  </span>
                  <span className="detalhes-duracao">
                    Duração: <strong>{destinoSelecionado.duracao}</strong>
                  </span>
                </div>

                <p className="detalhes-descricao">
                  {destinoSelecionado.descricao}
                </p>

                <div className="incluso-bloco">
                  <h3>O que está incluso no pacote:</h3>
                  <div className="incluso-grid">
                    {destinoSelecionado.incluso.map((item, idx) => (
                      <span key={idx} className="incluso-item">
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>

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
                  preco={`A partir de ${destino.precoTotal}`}
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
