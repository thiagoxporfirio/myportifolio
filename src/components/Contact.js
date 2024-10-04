import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";
import { ClipLoader } from "react-spinners";

const Contact = () => {
	const form = useRef();
	const [loading, setLoading] = useState(false);
	const [sent, setSent] = useState(false);

	const sendEmail = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				"service_a0mm9wl",
				"template_f69gpxi",
				form.current,
				"YXfuoydDqImjYuaoN"
			)
			.then(
				result => {
					console.log(result.text);
					setLoading(false);
					setSent(true);
					alert("Email enviado com sucesso!");
					e.target.reset();

					setTimeout(() => {
						setSent(false);
					}, 3000);
				},
				error => {
					console.log(error.text);
					setLoading(false);
					alert("Ocorreu um erro ao enviar o email.");
				}
			);
	};

	return (
		<section className="section py-16 lg:selection" id="contact">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center"
					>
						<div>
							<h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
								Entrar em contato
							</h4>
							<h2 className=" text-[45px] lg:text-[90px] leading-none mb-12">
								Vamos trabalhar
								<br />
								juntos!
							</h2>
						</div>
					</motion.div>
					{/* form */}
					<motion.form
						ref={form}
						onSubmit={sendEmail}
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 border rounded-md flex flex-col gap-y-6 pb-24 p-6 items-start"
					>
						<input
							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
							type="text"
							name="from_name"
							placeholder="Seu nome"
							required
						/>
						<input
							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
							type="email"
							name="from_email"
							placeholder="Seu email"
							required
						/>
						<textarea
							className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
							name="message"
							placeholder="Sua mensagem"
							required
						></textarea>

						{/* Botão de envio */}
						<button className="btn btn-lg" type="submit" disabled={loading}>
							{loading ? (
								<ClipLoader color="#ffffff" size={24} />
							) : sent ? (
								"Mensagem Enviada!"
							) : (
								"Enviar mensagem"
							)}
						</button>
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
