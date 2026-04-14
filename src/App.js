import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const SectionDivider = () => (
	<div className="section-divider opacity-60" />
);

const App = () => {
	return (
		<AnimatePresence>
			<motion.div
				className="bg-site bg-no-repeat bg-cover overflow-hidden scanlines"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<Header />
				<Banner />
				<SectionDivider />
				<Nav />
				<About />
				<SectionDivider />
				<Resume />
				<SectionDivider />
				<Contact />
			</motion.div>
		</AnimatePresence>
	);
};

export default App;
