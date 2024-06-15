import React from "react";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5
	});

	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					<motion.div
						variants={fadeIn("rigth", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"
					></motion.div>
					{/* txt */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">Sobre mim.</h2>
						<h3 className="h3 mb-4">
							Eu sou um Desenvolvedor Fullstack com 3 anos de experiencia.
						</h3>
						<p className="mb-6 ">
							Com minha experiência prévia como Dev, adquiri habilidades de
							desenvolvimento de aplicativos web e Mobile usando JavaScript. Sou
							uma pessoa extrovertida que aprecia viajar e capturar momentos de
							paisagens magníficas através de fotografias. Tenho um autêntico
							gosto por me envolver em projetos e executá-los com excelência,
							garantindo que cada trabalho seja feito de forma impecável.
						</p>

						<div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={3} duration={6} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px] ">
									Anos de <br />
									Experiencia
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={15} duration={8} /> : null}
									K+
								</div>
								<div className="font-primary text-sm tracking-[2px] ">
									Views em <br />
									Projetos
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={5} duration={6} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px] ">
									Projetos <br />
									Realizados
								</div>
							</div>
						</div>

						<div className="flex gap-x-8 items-center mt-9">
							<button className="btn btn-lg">
								<Link to="contact" activeClass="active ">
									Entre em contato
								</Link>
							</button>
							<a href="#" className="text-gradient btn-link">
								Meu Portifolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
