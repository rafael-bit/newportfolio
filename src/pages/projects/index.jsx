import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { React, useEffect, useState } from "react";
import Typical from "react-typical";
import Modal from "@/components/Modal";

export default function Projects() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const items = [
    {
      id: 1,
      title: "My Finances",
      text: "O My Finances é uma aplicação web que permite que os usuários registrem e acompanhem suas transações financeiras, mostrando o dinheiro que entra e sai, bem como o saldo total disponível. Ele oferece recursos como painel de controle com resumo financeiro, registro de transações",
      img: "/myfinance.png",
      video: "/myfinance.mp4",
      link: "https://github.com/rafael-bit/Finances",
    },
    {
      id: 2,
      title: "PokeBook",
      text: "O Pokebook é um guia completo que mostra informações importantes sobre os Pokémon, como tamanho, peso e altura. Com páginas dedicadas a cada Pokémon, você pode encontrar seus dados físicos e aprender sobre suas habilidades especiais. É um livro essencial para treinadores, ajudando-os a planejar estratégias de batalha e conhecer melhor seus Pokémon. Com o Pokebook, você terá todas as informações necessárias para se aventurar no mundo Pokémon.",
      img: "/pokemon.png",
      video: "/Pokemon.mp4",
      link: "https://github.com/rafael-bit/pokebook",
    },
    {
      id: 3,
      title: "GREP Coffee",
      text: "Aqui você encontra uma variedade de cafés de qualidade de diferentes partes do mundo. Navegue facilmente e encontre o café perfeito para você, podendo escolher qual café comprar, qual adicional e muito mais.",
      img: "/coffee.png",
      video: "/Coffee.mp4",
      link: "https://rafael-bit.github.io/coffee",
    },
    {
      id: 4,
      title: "AppFlix",
      text: "Um clone da netflix mostrando um slider exibindo a capa de vários filmes através de uma API.",
      img: "/AppFlix.png",
      video: "/AppFlix.mp4",
      link: "https://github.com/rafael-bit/AppFlix",
    },
    {
      id: 5,
      title: "Cotação de moedas",
      text: "Nosso site utiliza PHP para buscar as taxas de câmbio atualizadas em tempo real. Ele se conecta a uma API de cotações financeiras, que fornece os dados necessários para exibição em nosso site. O PHP permite que o site processe esses dados e os apresente de forma clara e organizada para os usuários.",
      img: "/cotacao.png",
      video: "/cotacao.mp4",
      link: "https://github.com/rafael-bit/Cotacao-de-Moedas",
    },
  ];

  const breve = [
    {
      id: 1,
      title: "API de filmes",
    },
    {
      id: 2,
      title: "My-blog",
    },
    {
      id: 3,
      title: "Megan",
    },
    {
      id: 4,
      title: "Finances React-native",
    },
  ];

  return (
    <div className="mx-all mb-7">
      <Head>
        <title>Projects - Rafael A.</title>
      </Head>
      <Header />
      <div className="mt-20">
        {showText && (
          <Typical
            steps={["Meus Projetos ", 2000]}
            wrapper="h1"
            className="text-4xl text-blue-900 font-bold leading-15 tracking-tightz"
          />
        )}
      </div>
      <div className="mt-20">
        <div className="overflow-x-auto">
          <div className="flex">
            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-box h-box mr-4 mb-2 rounded-radius border border-zinc-300 bg-no-repeat bg-contain max-w-full" style={{ backgroundImage: `url(${item.img})`, backgroundSize: "100% 100%", }}>
                <Modal items={[item]} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-project">
        <h1 className="text-4xl text-blue-900 font-bold leading-15 tracking-tightz mb-5">Em breve</h1>
        <div className="overflow-x-auto">
          <div className="flex">
            {breve.map((item) => (
              <div key={item.id} className="flex flex-shrink-0 justify-center items-center w-box h-box mr-4 mb-2 rounded-radius border border-zinc-300 bg-no-repeat bg-contain max-w-full" style={{ backgroundImage: `url(${item.img})`, backgroundSize: "100% 100%", }}>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}
