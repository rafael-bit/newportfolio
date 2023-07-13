import Head from "next/head";
import { useEffect, useState } from "react";
import Typical from "react-typical";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Skills() {
	const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
	}, []);
	
	return (
		<div className="mx-all mb-5">
			<Head>
        <title>Skills - Rafael A.</title>
      </Head>
			<Header />
			<div className="mt-20">
				{showText && (
					<Typical
            steps={["Minhas Skills ", 2000]}
            wrapper="h1" className="text-4xl text-blue-900 font-bold leading-15  tracking-tightz"
          />	
				)}
				<div className=" hidden mt-10 md:flex">
					<div>
						<h1 className="my-5">Tecnologias do meu dia a dia:</h1>
								<div className="flex flex-wrap flex-start gap-4 mr-40">
									<div>
										<Image src="/html-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 " />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/css-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/javascript-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/react-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/nextjs-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 shadow-lg" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/nodejs-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 shadow-lg" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/git-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
								</div>
							<div>
								<h1 className="mt-7 mb-5">Tecnologias que eu estudo:</h1>
								<div className="flex flex-wrap flex-start gap-4 mr-40">
									<div>
										<Image src="/typescript-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 " />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/react-native-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
								</div>
							</div>
					</div>
					<div className="flex w-50 mb-15">
						<div className="w-95">
							<p>HTML</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-95 bg-blue-300 h-full"></div></span>
							<p>CSS</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-90 bg-blue-300 h-full"></div></span>
							<p>JavaScript</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-80 bg-blue-300 h-full"></div></span>
							<p>PHP</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-65 bg-blue-300 h-full"></div></span>
							<p>React.Js</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-70 bg-blue-300 h-full"></div></span>
							<p>Next.Js</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-70 bg-blue-300 h-full"></div></span>
							<p>Node.Js</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-65 bg-blue-300 h-full"></div></span>
							<p>MySQL</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-50 bg-blue-300 h-full"></div></span>
							<p>Git</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-90 bg-blue-300 h-full"></div></span>
						</div>
					</div>
				</div>
				<div className="mt-10 block md:hidden">
						<div>
							<h1 className="my-5">Tecnologias do meu dia a dia:</h1>
								<div className="flex flex-wrap flex-start gap-4">
									<div>
										<Image src="/html-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 " />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/css-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/javascript-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/react-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/nextjs-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 shadow-lg" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/nodejs-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 shadow-lg" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/git-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
								</div>
							<div>
								<h1 className="mt-7 mb-5">Tecnologias que eu estudo:</h1>
								<div className="flex flex-wrap flex-start gap-4">
									<div>
										<Image src="/typescript-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300 " />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
									<div>
										<Image src="/react-native-icon.svg" width="50" height="50" className="mb-2 border-b-9 border-blue-300" />
										<div className="w-15 h-2 bg-blue-300 rounded-full"></div>
									</div>
								</div>
							</div>
					</div>
					<div className="flex w-full mt-10">
						<div className="w-full">
							<p>HTML</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-95 bg-blue-300 h-full"></div></span>
							<p>CSS</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-90 bg-blue-300 h-full"></div></span>
							<p>JavaScript</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-80 bg-blue-300 h-full"></div></span>
							<p>PHP</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-65 bg-blue-300 h-full"></div></span>
							<p>React.Js</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-70 bg-blue-300 h-full"></div></span>
							<p>Next.Js</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-70 bg-blue-300 h-full"></div></span>
							<p>Node.Js</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-65 bg-blue-300 h-full"></div></span>
							<p>MySQL</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-50 bg-blue-300 h-full"></div></span>
							<p>Git</p>
							<span className="block bg-white border border-1 border-zinc-400 w-full h-2 my-2 rounded-full"><div className="w-90 bg-blue-300 h-full"></div></span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}