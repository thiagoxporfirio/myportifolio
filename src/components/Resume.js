import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleIn } from "../variants";
import {
	BsCodeSlash,
	BsServer,
	BsDatabase,
	BsGearFill,
	BsCloudFill,
	BsMortarboardFill,
	BsCheckCircleFill
} from "react-icons/bs";

// ─── DATA ────────────────────────────────────────────────────────────────────

const skills = [
	{
		icon: <BsCodeSlash />,
		label: "Frontend",
		items: ["React", "Next.js", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Zustand", "Redux Toolkit", "TanStack Query"]
	},
	{
		icon: <BsServer />,
		label: "Backend",
		items: ["NestJS", "Node.js", "Prisma", "REST APIs", "GraphQL", "WebSockets"]
	},
	{
		icon: <BsDatabase />,
		label: "Databases",
		items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
	},
	{
		icon: <BsGearFill />,
		label: "Architecture",
		items: ["Microservices", "Serverless", "Clean Architecture", "DDD"]
	},
	{
		icon: <BsCloudFill />,
		label: "Platform & Infra",
		items: ["AWS", "Cloudflare", "Docker", "Kubernetes", "CI/CD"]
	}
];

const experiences = [
	{
		role: "Senior FullStack Developer",
		company: "MedicalSan",
		period: "dez 2025 – presente",
		location: "Ribeirão Preto, SP · Remoto",
		highlights: [
			"Projeto MedicalSan Fábrica — Desenvolvimento completo do Frontend com React e seu ecossistema. O sistema visa controlar todos os equipamentos fabricados e fornecidos aos clientes, com mapeamento por GPS e acompanhamento desde a criação do equipamento."
		],
		stack: ["React", "TypeScript", "Node.js", "Python", "Kafka", "Redis", "PostgreSQL", "Amazon S3"]
	},
	{
		role: "Mid Front-End Developer III",
		company: "CI&T",
		period: "jul 2024 – presente · 1a 10m",
		location: "Ribeirão Preto, SP · Remoto",
		highlights: [
			"Projeto Nestlé Nesplenish — App de apoio a mercados na aquisição de produtos Nestlé. React + TypeScript, integração com microserviços, Kafka, EventHub, MongoDB e Azure.",
			"Projeto Vivo — Novo e-commerce B2B/B2C. APIs, mocks, libs de tipos e integrações com Live APIs. Frontend em React, BFF em Node.js/TypeScript com filas e webhooks."
		],
		stack: ["React", "TypeScript", "Node.js", "Kafka", "MongoDB", "Azure"]
	},
	{
		role: "Mid Full-Stack Engineer",
		company: "BBI.Solutions",
		period: "dez 2023 – nov 2024 · 1 ano",
		location: "São Paulo, SP · Remoto",
		highlights: [
			"Plataforma de matching entre advogados e causas trabalhistas com triagem por IA.",
			"Backend principal em Node.js, TypeScript, PostgreSQL e Docker. Otimização de banco e integrações de APIs."
		],
		stack: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "PHP"]
	},
	{
		role: "Mid Full-Stack Developer",
		company: "LOOP3",
		period: "ago 2022 – jun 2024 · 1a 11m",
		location: "Ribeirão Preto, SP · Remoto",
		highlights: [
			"Desenvolvimento e manutenção de aplicações com JavaScript, TypeScript e React Native.",
			"Soluções eficientes em frontend e backend, incluindo mobile com Expo."
		],
		stack: ["React Native", "TypeScript", "JavaScript", "Expo"]
	},
	{
		role: "Full-Stack Developer Junior",
		company: "Zanini Renk",
		period: "abr 2022 – ago 2022 · 5 meses",
		location: "Cravinhos, SP · Presencial",
		highlights: [
			"Sistemas internos para Indústria 4.0 com React e TypeScript.",
			"Interfaces de usuário com ReactJS e otimização de bancos MySQL."
		],
		stack: ["React", "TypeScript", "MySQL"]
	},
	{
		role: "Analista de TI",
		company: "Bennu",
		period: "jun 2021 – jan 2022 · 8 meses",
		location: "Remoto",
		highlights: [
			"Suporte e análise de sistemas em ambiente remoto."
		],
		stack: []
	}
];

const education = [
	{
		title: "Full Stack Training",
		institution: "JStack",
		period: "Concluído",
		description: "Foco em JavaScript avançado, ReactJS e tecnologias do ecossistema: NodeJS, TypeScript, Docker, PostgreSQL, Next.js, AWS, testes unitários e de integração."
	},
	{
		title: "Bacharelado em Engenharia de Software",
		institution: "Estácio",
		period: "jul 2021 – jul 2024",
		description: "Desenvolvimento de software, Algoritmos e Estrutura de Dados."
	},
	{
		title: "Carreira Ignite",
		institution: "Rocketseat",
		period: "jan 2023 – jan 2024",
		description: "Programa de especialização com foco em Node.js, Next.js, React e ecossistema avançado."
	},
	{
		title: "Bacharelado em Engenharia Mecânica",
		institution: "Anhanguera Educacional",
		period: "jan 2015 – dez 2020",
		description: "Engenharia mecânica — base sólida em raciocínio analítico e resolução de problemas."
	}
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

const TabButton = ({ label, active, onClick }) => (
	<button
		type="button"
		onClick={onClick}
		className={`font-primary text-sm uppercase tracking-widest px-5 py-2 rounded-full border transition-all duration-300
			${active
				? "border-accent bg-accent/15 text-accent shadow-neon-sm"
				: "border-white/20 text-white/50 hover:border-accent/50 hover:text-white/80"
			}`}
	>
		{label}
	</button>
);

const SkillCard = ({ icon, label, items }) => (
	<motion.div
		variants={scaleIn(0)}
		className="cyber-card p-5 flex flex-col gap-3"
	>
		<div className="flex items-center gap-2 text-accent text-lg">
			{icon}
			<span className="font-primary text-xs uppercase tracking-widest text-white/80">{label}</span>
		</div>
		<div className="flex flex-wrap gap-2">
			{items.map(item => (
				<span
					key={item}
					className="text-xs font-secondary bg-white/5 border border-white/10 
					           hover:border-accent/50 hover:text-accent transition-colors duration-200
					           px-3 py-1 rounded-full text-white/70 cursor-default"
				>
					{item}
				</span>
			))}
		</div>
	</motion.div>
);

const ExperienceCard = ({ role, company, period, location, highlights, stack, index }) => (
	<motion.div
		variants={fadeIn("up", index * 0.08)}
		className="relative pl-8 pb-10 last:pb-0"
	>
		{/* Timeline line */}
		<div className="absolute left-[11px] top-5 bottom-0 w-px bg-gradient-to-b from-accent/60 to-transparent last:hidden" />
		{/* Dot */}
		<div className="absolute left-0 top-2 w-[22px] h-[22px] rounded-full border-2 border-accent bg-cyber-dark 
		                shadow-[0_0_12px_rgba(184,9,195,0.7)] flex items-center justify-center">
			<div className="w-2 h-2 rounded-full bg-accent animate-pulse-neon" />
		</div>

		<div className="cyber-card p-5">
			<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
				<div>
					<h4 className="font-primary text-white text-[15px] tracking-wide">{role}</h4>
					<p className="text-accent text-sm font-semibold mt-0.5">{company}</p>
				</div>
				<div className="text-right shrink-0">
					<p className="text-white/50 text-xs font-secondary">{period}</p>
					<p className="text-white/35 text-xs font-secondary mt-0.5">{location}</p>
				</div>
			</div>

			<ul className="space-y-1.5 mb-4">
				{highlights.map((h, i) => (
					<li key={i} className="flex gap-2 text-white/65 text-sm font-secondary leading-relaxed">
						<BsCheckCircleFill className="text-accent/70 mt-1 shrink-0 text-[10px]" />
						{h}
					</li>
				))}
			</ul>

			{stack.length > 0 && (
				<div className="flex flex-wrap gap-1.5">
					{stack.map(s => (
						<span key={s} className="text-[10px] font-primary uppercase tracking-widest 
						                         px-2.5 py-0.5 rounded-full border border-accent/30 text-accent/80
						                         bg-accent/5">
							{s}
						</span>
					))}
				</div>
			)}
		</div>
	</motion.div>
);

const EducationCard = ({ title, institution, period, description, index }) => (
	<motion.div variants={fadeIn("up", index * 0.1)} className="cyber-card p-5">
		<div className="flex items-start gap-3">
			<div className="text-accent text-2xl mt-1 shrink-0">
				<BsMortarboardFill />
			</div>
			<div>
				<h4 className="font-primary text-white text-[14px] tracking-wide leading-snug">{title}</h4>
				<p className="text-accent text-sm font-semibold mt-0.5">{institution}</p>
				<p className="text-white/40 text-xs font-secondary mt-0.5 mb-2">{period}</p>
				<p className="text-white/60 text-sm font-secondary leading-relaxed">{description}</p>
			</div>
		</div>
	</motion.div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Resume = () => {
	const [tab, setTab] = useState("skills");

	return (
		<section className="section py-16 lg:py-24 !h-auto" id="resume">
			<div className="container mx-auto">
				{/* Header */}
				<motion.div
					variants={staggerContainer(0.1, 0.1)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: false, amount: 0.2 }}
					className="mb-12"
				>
					<motion.h2 variants={fadeIn("up", 0)} className="h2 text-accent neon-text">
						Currículo.
					</motion.h2>
					<motion.p variants={fadeIn("up", 0.1)} className="max-w-2xl text-white/70 leading-relaxed font-secondary">
						Engenheiro de Software com duas graduações. Crio apps e webApps há{" "}
						<span className="text-white font-semibold">5+ anos</span>, atuando majoritariamente com{" "}
						<span className="text-accent">React e ecossistema JS/TS</span>, mas com vivência sólida em
						APIs, integrações de pagamentos com Node.js, Next.js e NestJS. Confortável em contextos
						Fullstack com SQL, NoSQL, Docker e arquitetura de microsserviços em ambientes com CI/CD.
					</motion.p>

					{/* Tabs */}
					<motion.div variants={fadeIn("up", 0.15)} className="flex flex-wrap gap-3 mt-8">
						{["skills", "experiência", "formação"].map(t => (
							<TabButton key={t} label={t} active={tab === t} onClick={() => setTab(t)} />
						))}
					</motion.div>
				</motion.div>

				{/* ── SKILLS ── */}
				{tab === "skills" && (
					<motion.div
						key="skills"
						variants={staggerContainer(0.08, 0)}
						initial="hidden"
						animate="show"
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
					>
						{skills.map((s, i) => (
							<SkillCard key={i} {...s} />
						))}
					</motion.div>
				)}

				{/* ── EXPERIENCE ── */}
				{tab === "experiência" && (
					<motion.div
						key="exp"
						variants={staggerContainer(0.06, 0)}
						initial="hidden"
						animate="show"
						className="max-w-3xl"
					>
						{experiences.map((e, i) => (
							<ExperienceCard key={i} {...e} index={i} />
						))}
					</motion.div>
				)}

				{/* ── EDUCATION ── */}
				{tab === "formação" && (
					<motion.div
						key="edu"
						variants={staggerContainer(0.09, 0)}
						initial="hidden"
						animate="show"
						className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl"
					>
						{education.map((e, i) => (
							<EducationCard key={i} {...e} index={i} />
						))}
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default Resume;
