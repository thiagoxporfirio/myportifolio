import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../variants";
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
		<section className="section" id="services">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* Text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
					>
						<h2 className="h2 text-accent mb-6 neon-text">O que eu faço?</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							Desenvolvedor Fullstack com 3 anos de experiência.
						</h3>
						<motion.button
							className="btn btn-sm"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.97 }}
							transition={{ type: "spring", stiffness: 300, damping: 18 }}
						>
							Veja meu trabalho
						</motion.button>
					</motion.div>

					{/* Services list */}
					<motion.div
						variants={staggerContainer(0.15, 0.4)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						{services.map((service, index) => {
							const { name, description, link } = service;
							return (
								<motion.div
									variants={scaleIn(0)}
									key={index}
									className="cyber-card p-6 mb-6 flex group cursor-default"
								>
									<div className="max-w-[476px]">
										<h4 className="text-[20px] tracking-widest font-primary font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">
											{name}
										</h4>
										<p className="font-secondary leading-relaxed text-white/70 text-sm">
											{description}
										</p>
									</div>
									<div className="flex flex-col flex-1 items-end justify-between">
										<motion.a
											href="https://github.com/thiagoxporfirio"
											target="_blank"
											rel="noreferrer"
											className="btn w-9 h-9 flex justify-center items-center"
											whileHover={{ scale: 1.15, rotate: 45 }}
											whileTap={{ scale: 0.9 }}
											transition={{ type: "spring", stiffness: 300, damping: 15 }}
										>
											<BsArrowUpRight />
										</motion.a>
										<button
											type="button"
											className="text-gradient text-sm hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer"
										>
											{link}
										</button>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
