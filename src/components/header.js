import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const router = useRouter();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="mt-5">
			<div className="flex justify-between items-center shadow-lg rounded-full border border-1 border-zinc md:hidden">
				<p className="font-semibold text-blue-600 p-2 px-4">Rafael Áquila</p>
				<div className="relative">
					<p
						className="text-blue-600 font-semibold mr-3 hover:text-blue-800 hover:border-blue-600 hover:border-b-2 transition-all ease-in-out flex items-end cursor-pointer"
						onClick={toggleMenu}
					>
						Menu
						<img
							src="/arrow.svg"
							width="20"
							height="20"
							alt="Hamburguer"
							className="ml-1"
						/>
					</p>
					{isOpen && (
						<ul
							ref={menuRef}
							className="absolute top-9 right-1 text-blue-600 bg-white p-3 shadow-lg rounded-1 border border-1 border-zinc"
						>
							<li
								className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out hover:border-b-2 ${router.pathname === "/" ? "border-b-2" : ""
									}`}
							>
								<Link href="/">Home</Link>
							</li>
							<li
								className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/skills" ? "border-b-2" : ""
									}`}
							>
								<Link href="/skills">Skills</Link>
							</li>
							<li
								className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/projects" ? "border-b-2" : ""
									}`}
							>
								<Link href="/projects">Projects</Link>
							</li>
							<li
								className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/contact" ? "border-b-2" : ""
									}`}
							>
								<Link href="https://rafael-bit.github.io/Links">Contact</Link>
							</li>
						</ul>
					)}
				</div>
			</div>

			<div className="hidden md:flex justify-between items-center">
				<p className="font-semibold text-blue-600 p-2 px-4 shadow-lg rounded-full border border-1 border-zinc">
					Rafael Áquila
				</p>
				<nav className="p-2 px-4 shadow-lg rounded-full border border-1 border-zinc">
					<ul className="text-blue-600 flex justify-around w-full">
						<li
							className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/" ? "border-b-2" : ""
								}`}
						>
							<Link href="/">Home</Link>
						</li>
						<li
							className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/skills" ? "border-b-2" : ""
								}`}
						>
							<Link href="/skills">Skills</Link>
						</li>
						<li
							className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/projects" ? "border-b-2" : ""
								}`}
						>
							<Link href="/projects">Projects</Link>
						</li>
						<li
							className={`mr-3 hover:text-blue-800 hover:border-blue-600 transition-all ease-in-out ${router.pathname === "/contact" ? "border-b-2" : ""
								}`}
						>
							<Link href="https://rafael-bit.github.io/Links">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
