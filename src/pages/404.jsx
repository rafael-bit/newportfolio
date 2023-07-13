import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();

  const voltarPaginaAnterior = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center">
			<Image src="/404.svg" width={750} height={750} className="pr-10"/>
			<div className="flex">
      	<button onClick={voltarPaginaAnterior} className="flex items-center justify-center text-white bg-blue-800 px-10 py-3 rounded-full hover:bg-blue-700 mr-5">Voltar</button>
      	<Link href="/" className="flex items-center justify-center text-white bg-blue-800 px-10 py-3 rounded-full hover:bg-blue-700">Home</Link>
			</div>
    </div>
  );
}