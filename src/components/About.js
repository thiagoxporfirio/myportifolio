import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../variants";
import { Link } from "react-scroll";

const stats = [
	{ end: 5, duration: 4, suffix: "", label: "Anos de\nExperiência" },
	{ end: 15, duration: 8, suffix: "K+", label: "Views em\nProjetos" },
	{ end: 12, duration: 6, suffix: "", label: "Projetos\nRealizados" }
];

const About = () => {
	const [ref, inView] = useInView({ threshold: 0.5 });

	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
					{/* img */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
					/>
					{/* txt */}
					<motion.div
						variants={staggerContainer(0.12, 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<motion.h2 variants={fadeIn("left", 0)} className="h2 text-accent neon-text">
							Sobre mim.
						</motion.h2>
						<motion.h3 variants={fadeIn("left", 0)} className="h3 mb-4">
							Um Entusiasta Curioso e Apaixonado pela Vida
						</motion.h3>
						<motion.p variants={fadeIn("left", 0)} className="mb-6 text-white/75 leading-relaxed">
							Sou apaixonado por explorar o mundo e estou sempre em busca de
							novas experiências. Adoro viajar, conhecer culturas diferentes e
							experimentar comidas típicas dos lugares que visito. Além disso,
							sou um grande admirador de carros esportivos, apreciando a beleza
							e a potência dessas máquinas. Tenho um carinho especial pelos
							animais e me conecto profundamente com a natureza.
						</motion.p>

						{/* Stats */}
						<motion.div variants={fadeIn("left", 0)} className="flex gap-x-6 lg:gap-x-10 mb-12">
							{stats.map(({ end, duration, suffix, label }, i) => (
								<motion.div
									key={i}
									variants={scaleIn(i * 0.1)}
									className="cyber-card p-4 text-center min-w-[90px]"
								>
									<div className="text-[40px] font-tertiary text-gradient mb-1 leading-none">
										{inView ? <CountUp start={0} end={end} duration={duration} /> : null}
										{suffix}
									</div>
									<div className="font-primary text-xs tracking-widest text-white/60 whitespace-pre-line">
										{label}
									</div>
								</motion.div>
							))}
						</motion.div>

						<motion.div variants={fadeIn("left", 0)} className="flex gap-x-8 items-center mt-9">
							<motion.button
								className="btn btn-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: "spring", stiffness: 300, damping: 18 }}
							>
								<Link to="contact" activeClass="active" smooth={true} spy={true}>
									Entre em contato
								</Link>
							</motion.button>
						<button
							type="button"
							className="text-gradient btn-link hover:opacity-90 transition-opacity bg-transparent border-none cursor-pointer"
						>
							Meu Portfólio
						</button>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
