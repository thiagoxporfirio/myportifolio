import React from "react";
import { Link } from "react-scroll";

const Header = () => {
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<a href="#">{/*<img src={Logo} alt="" /> */}</a>
					<button className="btn btn-sm">
						<Link to="contact" activeClass="active" smooth={true} spy={true}>
							Trabalhe comigo
						</Link>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
