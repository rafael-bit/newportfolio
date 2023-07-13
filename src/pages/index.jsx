import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typical from "react-typical";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  const downloadFile = () => {
    const fileUrl = '/curriculo.pdf';

    const fileName = 'curriculo';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.style.display = 'none';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="mx-all mb-10">
      <Head>
        <title>Home - Rafael A.</title>
      </Head>
      <Header />
      <div className="mt-title">
        <div className="hidden md:block">
            {showText && (
              <Typical
                steps={["Olá, meu nome é Rafael Áquila. ", 2000]}
                wrapper="h1" className="text-7xl text-blue-900 font-bold leading-15  tracking-tightz"
              />
            )}

          {showText && (
            <Typical
              steps={["Desenvolvedor de software. ", 2000]}
              wrapper="h6" className="text-3xl text-blue-900 mt-3"
            />  
          )}
          <div className="flex mt-5">
            <Link href="https://www.github.com/rafael-bit" className="flex items-center justify-center text-white bg-blue-900 px-7 p-2 mr-10 rounded-full hover:bg-blue-800"><Image src="/github.svg" width="30" height="30" className="mr-2"/> GitHub</Link>
            <Link href="https://www.linkedin.com/in/rafael-aquila/" className="flex items-center justify-center text-white bg-blue-900 px-7 rounded-full hover:bg-blue-800"><Image src="/linkedin.svg" width="30" height="30" className="pr-1"/> LinkedIn</Link>
          </div>
        </div>
        <div className="block md:hidden">
            {showText && (
              <Typical
                steps={["Olá, meu nome é Rafael Áquila. ", 2000]}
                wrapper="h1" className="text-2xl text-blue-900 font-bold leading-15  tracking-tightz"
              />
            )}

          {showText && (
            <Typical
              steps={["Desenvolvedor de software. ", 2000]}
              wrapper="h6" className="text-md text-blue-900 mt-3"
            />  
          )}
          <div className="flex items-center mt-10">
            <Link href="https://www.github.com/rafael-bit" className="flex items-center justify-center text-white bg-blue-900 px-5 mr-5 p-1 rounded-full hover:bg-blue-800"><Image src="/github.svg" width="20" height="20" /> GitHub</Link>
            <Link href="https://www.linkedin.com/in/rafael-aquila/" className="flex items-center justify-center text-white bg-blue-900 px-5 p-1 rounded-full hover:bg-blue-800"><Image src="/linkedin.svg" width="20" height="20" /> LinkedIn</Link>
          </div>
        </div>
        <div className="hidden md:flex mt-40 justify-end">
            <Link href="#about" className="flex items-center mt-20 border border-1 border-blue-600 px-4 p-2 rounded-full">
              <span className="text-blue-600 font-bold pr-2">Scroll Down</span>
              <Image src="/mouse.svg" width="20" height="20" alt="Scroll" />
            </Link>
        </div>
        <div className="flex md:hidden mt-20 justify-end">
            <Link href="#about1" className="flex items-center mt-20 border border-1 border-blue-600 px-3 p-2 rounded-full">
              <span className="text-blue-600 font-bold text-xs pr-2">Scroll Down</span>
              <Image src="/mouse.svg" width="15" height="15" alt="Scroll" />
            </Link>
        </div>
      </div>
      <div className="hidden md:block mt-about mb-20">
        <h1 id="about" className="text-4xl font-bold leading-15 text-blue-900">Sobre Mim</h1>
        <div className="flex items-start mt-10">
          <div className="block mr-20">
            <Image src="/Perfil.jpeg" width="600" height="600" />
          </div>
          <div>
            <p className="w-70">A programação se tornou minha paixão ardente desde o momento em que descobri que ela tem o poder transformador de converter ideias abstratas em ações concretas, capacitando-me a criar soluções inovadoras que impactam positivamente o mundo ao meu redor.<br />Ao longo da minha jornada, estou incansavelmente comprometido em buscar conhecimento constantemente, mergulhando em cursos especializados e me envolvendo em projetos desafiadores, para expandir minhas habilidades e aprimorar minha compreensão das nuances dessa arte digital.</p>
            <div className="w-50 flex justify-end">
              <button onClick={downloadFile} className="flex items-center bg-blue-800 text-white p-3 px-7 mt-7 rounded-full hover:bg-blue-700">Curriculo <Image src="download-arrow.svg" width="20" height="20" className="pl-2" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden mt-about">
        <h1 id="about1" className="text-4xl font-bold leading-15 text-blue-900">Sobre Mim</h1>
        <div className="block items-start justify-center mt-10">
            <Image src="/Perfil.jpeg" width="600" height="600" />
          <div>
            <p className="mt-10 w-full text-justify">A programação se tornou minha paixão ardente desde o momento em que descobri que ela tem o poder transformador de converter ideias abstratas em ações concretas, capacitando-me a criar soluções inovadoras que impactam positivamente o mundo ao meu redor.<br />Ao longo da minha jornada, estou incansavelmente comprometido em buscar conhecimento constantemente, mergulhando em cursos especializados e me envolvendo em projetos desafiadores, para expandir minhas habilidades e aprimorar minha compreensão das nuances dessa arte digital.</p>
            <div className="mt-10 flex justify-center">
              <button onClick={downloadFile} className="flex items-center bg-blue-800 text-white p-3 px-7 mt-3 rounded-full hover:bg-blue-700">Curriculo <Image src="download-arrow.svg" width="20" height="20" className="pl-2" /></button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
