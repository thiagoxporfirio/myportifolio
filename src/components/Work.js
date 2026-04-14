import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import Img1 from "../assets/portfolio-img3.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img1.png";
import Img4 from "../assets/portfolio-img4.png";

const projects = [
	{ src: Img1, tag: "Front-End", title: "Layout Responsive Photos" },
	{ src: Img2, tag: "Desenvolvedor Front-End", title: "Search Films" },
	{ src: Img3, tag: "Desenvolvedor Fullstack", title: "Pizza Controller" },
	{ src: Img4, tag: "Desenvolvedor Fullstack", title: "Busca Tesouro" }
];

const WorkCard = ({ src, tag, title }) => (
	<div className="group relative overflow-hidden cyber-card">
		{/* Overlay */}
		<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer" />
		{/* Img */}
		<img
			className="group-hover:scale-125 transition-all duration-500 w-full object-cover"
			src={src}
			alt={title}
		/>
		{/* Tag */}
		<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
			<span className="text-gradient text-sm font-primary tracking-widest uppercase">{tag}</span>
		</div>
		{/* Title */}
		<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
			<span className="text-2xl text-white font-primary">{title}</span>
		</div>
	</div>
);

const Work = () => {
	return (
		<section className="section" id="work">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-x-10">
					{/* Left column: header + first image */}
					<motion.div
						variants={staggerContainer(0.12, 0.1)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
					>
						<motion.div variants={fadeIn("right", 0)}>
							<h2 className="h2 leading-tight text-accent neon-text">
								Meus trabalhos
								<br />
								mais recentes.
							</h2>
							<p className="max-w-sm mb-16 text-white/70">
								Nesta aba você verá todos os meus trabalhos feitos como Desenvolvedor.
							</p>
							<motion.button
								className="btn btn-sm"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: "spring", stiffness: 300, damping: 18 }}
							>
								<a href="https://github.com/thiagoxporfirio" target="_blank" rel="noreferrer">
									Ver todos os projetos
								</a>
							</motion.button>
						</motion.div>

						<motion.div variants={fadeIn("right", 0.15)}>
							<WorkCard {...projects[0]} />
						</motion.div>
					</motion.div>

					{/* Right column: three images */}
					<motion.div
						variants={staggerContainer(0.12, 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10"
					>
						{projects.slice(1).map((p, i) => (
							<motion.div key={i} variants={fadeIn("left", i * 0.1)}>
								<WorkCard {...p} />
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
