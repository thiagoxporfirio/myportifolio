import React from "react";
import ImaegeMe from "../assets/me.jpeg";

const Card = ({ title, subtitle, description, imageUrl }) => {
	return (
		<div className="max-w-sm mx-auto bg-[#121017] rounded-lg overflow-hidden shadow-lg my-8">
			<img
				className="w-full object-cover object-center w-48 h-48 rounded-full mx-auto mt-4"
				src={ImaegeMe}
				alt="profile"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2 text-white">Thiago Porfirio</div>
				<p className="text-gray-300 text-base">Desenvolvedor FullStack</p>
				<p className="text-gray-500 text-sm">
					Engenheiro de Software com duas graduações e uma profunda paixão pela
					programação, dedico-me intensamente aos estudos no campo da
					tecnologia. Com um foco em desenvolvimento Fullstack, tenho aprimorado
					minhas habilidades em tecnologias chave, incluindo React, TypeScript e
					NodeJS. Através de uma abordagem autodidata, habilitando-me a criar
					soluções eficazes e de alto impacto no universo do desenvolvimento de
					software.
				</p>
			</div>
			<div className="px-6 py-4">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Follow Me
				</button>
			</div>
		</div>
	);
};

export default Card;
