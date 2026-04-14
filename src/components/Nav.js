import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
	{ to: "home", icon: <BiHomeAlt />, offset: -200 },
	{ to: "about", icon: <BiUser /> },
	{ to: "services", icon: <BsClipboardData /> },
	{ to: "work", icon: <BsBriefcase /> },
	{ to: "contact", icon: <BsChatSquareText /> }
];

const Nav = () => {
	return (
		<motion.nav
			className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50"
			initial={{ y: 80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 70, damping: 16, delay: 0.5 }}
		>
			<div className="container mx-auto">
				<div
					className="glass-nav w-full h-[66px] rounded-full max-w-[460px]
					mx-auto px-5 flex justify-between text-2xl text-white/50 items-center"
				>
					{navLinks.map(({ to, icon, offset }) => (
						<Link
							key={to}
							to={to}
							className="cursor-pointer w-[60px] h-[60px] flex justify-center 
							           items-center hover:text-accent transition-colors duration-300
							           relative group"
							activeClass="active"
							smooth={true}
							spy={true}
							offset={offset}
						>
							{/* Hover glow ring */}
							<span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
							                 transition-opacity duration-300
							                 shadow-[0_0_16px_rgba(184,9,195,0.5)]" />
							<motion.span
								whileHover={{ scale: 1.25 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: "spring", stiffness: 300, damping: 18 }}
								className="relative z-10"
							>
								{icon}
							</motion.span>
						</Link>
					))}
				</div>
			</div>
		</motion.nav>
	);
};

export default Nav;
