import { useState, useRef } from 'react';
import Link from 'next/link';

const Modal = ({ items }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeItem, setActiveItem] = useState(null);
	const modalRef = useRef(null);

	const openModal = (item) => {
		setIsOpen(true);
		setActiveItem(item);
	};

	const closeModal = () => {
		setIsOpen(false);
		setActiveItem(null);
	};

	const handleOutsideClick = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			closeModal();
		}
	};

	return (
		<div className="relative">
			<div className="flex">
				{items.map((item, index) => (
					<div key={index} className="flex-shrink-0 w-40 h-10 bg-blue-600 hover:bg-blue-500 mr-4 cursor-pointer shadow rounded-full flex justify-center items-center relative top-more left-20" onClick={() => openModal(item)}>
						<p className="text-white ">Ver mais</p>
					</div>
				))}
			</div>
			{isOpen && (
				<div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 z-10" onClick={handleOutsideClick}>
					<div ref={modalRef} className="w-80 md:w-45 bg-white rounded p-4 ">
						{activeItem && (
							<>
								<div className="hidden md:block">
									<h2 className="text-xl font-bold mb-4">{activeItem.title}</h2>
									<p>{activeItem.text}</p>
									<video controls className="w-full mt-5 rounded-radius">
										<source src={activeItem.video} type="video/mp4" />
										Seu navegador não suporta o elemento de vídeo.
									</video>
								</div>
								<div className="block md:hidden">
									<h2 className="text-xl font-bold mb-4">{activeItem.title}</h2>
									<p>{activeItem.text}</p>
									<video controls className="w-full mt-5 rounded-radius">
										<source src={activeItem.video} type="video/mp4"/>
										Seu navegador não suporta o elemento de vídeo.
									</video>
								</div>
							</>
						)}
						<Link href={activeItem.link} className="text-white bg-blue-600 px-4 py-2 rounded shadow mr-5 hover:bg-blue-500">Ver mais</Link>
						<button className="px-4 py-2 mt-5 bg-blue-600 text-white rounded shadow hover:bg-blue-500" onClick={closeModal}>Fechar</button>
					</div>
				</div>
				
			)}
		</div>
	);
};

export default Modal;