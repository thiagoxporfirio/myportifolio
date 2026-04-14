import React from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
	return (
		<section
			className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
			id="home"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* txt */}
					<motion.div
						variants={staggerContainer(0.1, 0.2)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 text-center font-secondary lg:text-left mt-8"
					>
					

						<motion.h1
							variants={fadeIn("up", 0.35)}
							className="text-[55px] font-bold leading-[0.8] lg:text-[110px] glitch-text mb-6"
						>
							THIAGO <span className="text-accent">PORFIRIO</span>
						</motion.h1>
	<motion.div
							variants={fadeIn("up", 0.2)}
							className="mb-4 text-[22px] lg:text-[32px] font-secondary
							font-semibold uppercase leading-none whitespace-nowrap"
						>
							<span className="text-white/70 mr-3">Eu sou um</span>
							<TypeAnimation
								sequence={[
									"Desenvolvedor Front-end",
									2000,
									"Desenvolvedor Back-end",
									2000,
									"Streamer",
									2000
								]}
								speed={50}
								className="text-accent neon-text"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.div
							variants={fadeIn("up", 0.65)}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
						>
							<motion.button
								className="btn btn-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.97 }}
								transition={{ type: "spring", stiffness: 300, damping: 18 }}
							>
								<Link
									to="contact"
									activeClass="active"
									smooth={true}
									spy={true}
								>
									Contato
								</Link>
							</motion.button>
						<button
							type="button"
							className="text-gradient btn-link hover:opacity-90 transition-opacity bg-transparent border-none cursor-pointer"
						>
							Meu Portfólio
						</button>
						</motion.div>

						<motion.div
							variants={fadeIn("up", 0.8)}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
						>
							{[
								{ href: "https://github.com/thiagoxporfirio", icon: <FaGithub /> },
								{ href: "#", icon: <FaYoutube /> },
								{ href: "https://www.linkedin.com/in/thiagoxporfirio/", icon: <FaLinkedin /> }
							].map(({ href, icon }, i) => (
								<motion.a
									key={i}
									href={href}
									target={href !== "#" ? "_blank" : undefined}
									rel="noreferrer"
									className="hover:text-accent transition-colors duration-300"
									whileHover={{ scale: 1.3, y: -3 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 300, damping: 15 }}
								>
									{icon}
								</motion.a>
							))}
						</motion.div>
					</motion.div>

					{/* image */}
					<motion.div
						variants={fadeIn("down", 0.5)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: false, amount: 0.3 }}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
					>
						<img className="" alt="" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
