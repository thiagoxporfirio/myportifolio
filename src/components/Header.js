import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<motion.header
			className="py-8"
			initial={{ y: -60, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
		>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Brand / Logo */}
					<motion.a
						href="#"
						className="font-primary text-white font-bold tracking-widest uppercase text-xl 
						           glitch-text neon-text select-none"
						whileHover={{ scale: 1.04 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						TP<span className="text-accent">.</span>DEV
					</motion.a>

					{/* CTA button */}
					<motion.button
						className="btn btn-sm"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						transition={{ type: "spring", stiffness: 300, damping: 18 }}
					>
						<Link to="contact" activeClass="active" smooth={true} spy={true}>
							Trabalhe comigo
						</Link>
					</motion.button>
				</div>
			</div>
		</motion.header>
	);
};

export default Header;
