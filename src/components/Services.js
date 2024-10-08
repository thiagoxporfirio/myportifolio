import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowUpRight } from "react-icons/bs";

const services = [
	{
		name: "Desenvolvedor Front-End",
		description:
			"Criação de interfaces de usuário atraentes e responsivas, com foco na experiência do usuário e na otimização de desempenho. Usando tecnologias como React, React-Native, Next.js, TailwindCSS.",
		link: "Saiba mais"
	},
	{
		name: "Desenvolvedor Back-End",
		description:
			"Desenvolvimento de servidores e APIs robustos e escaláveis, com foco na segurança e na eficiência. Usando tecnologias como Node.js, Express, MongoDB, PostgreSQL, Docker.",
		link: "Saiba mais"
	}
];

const Services = () => {
	return (
		<section className="section " id="services">
			<div className="container mx-auto">
				<div className=" flex flex-col lg:flex-row">
					{/*Text */}
					<motion.div
						variants={fadeIn("rigth", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
					>
						<h2 className="h2 text-accent mb-6">Oque eu faço?</h2>
						<h3 className="h3 max-w-[455pc] mb-16">
							Desenvolvedor Fullstack com 3 anos de experiencia.
						</h3>
						<button className="btn btn-sm ">Veja meu trabalho</button>
					</motion.div>
					{/*Services */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 "
					>
						{/*Services e list */}
						<div>
							{services.map((service, index) => {
								const { name, description, link } = service;
								return (
									<div
										className="border-b border-white/20 h-[146px] mb-[38px] flex "
										key={index}
									>
										<div className="max-w-[476px]">
											<h4 className="text-[20px] tracking-wide font-primary font-semibold mb-6">
												{name}
											</h4>
											<p className="font-secondary leading-tight">
												{description}
											</p>
										</div>
										<div className="flex flex-col flex-1 items-end">
											<a
												href="https://github.com/thiagoxporfirio"
												className="btn w-9 h-9 mb[42px] flex justify-center items-center "
											>
												<BsArrowUpRight />
											</a>
											<a href="" className="text-gradient text-sm">
												{link}
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
