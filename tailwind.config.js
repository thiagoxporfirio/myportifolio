module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			primary: "Orbitron",
			secondary: "Rajdhani",
			tertiary: "Aldrich"
		},
		container: {
			padding: {
				DEFAULT: "15px"
			}
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px"
		},
		extend: {
			colors: {
				primary: "#070710",
				accent: "#B809C3",
				"neon-pink": "#FF56F6",
				"neon-blue": "#3BACE2",
				"neon-purple": "#6226B6",
				"electric": "#406AFF",
				"cyber-dark": "#0a0a1a",
				"cyber-mid": "#111128"
			},
			backgroundImage: {
				site: "url('./assets/site-bg.jpg')",
				about: "url('./assets/about.png')",
				// services: "url('./assets/services.png')"
				"cyber-grid":
					"linear-gradient(rgba(184,9,195,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,9,195,0.06) 1px, transparent 1px)"
			},
			backgroundSize: {
				"cyber-grid": "40px 40px"
			},
			boxShadow: {
				neon: "0 0 20px rgba(184, 9, 195, 0.6), 0 0 60px rgba(184, 9, 195, 0.25)",
				"neon-blue": "0 0 20px rgba(59, 172, 226, 0.6), 0 0 60px rgba(59, 172, 226, 0.25)",
				"neon-sm": "0 0 10px rgba(184, 9, 195, 0.5)"
			},
			animation: {
				"pulse-neon": "pulse-neon 2.5s ease-in-out infinite",
				"scan": "scan 4s linear infinite"
			},
			keyframes: {
				"pulse-neon": {
					"0%, 100%": { boxShadow: "0 0 12px rgba(184,9,195,0.5), 0 0 30px rgba(184,9,195,0.2)" },
					"50%": { boxShadow: "0 0 24px rgba(184,9,195,0.9), 0 0 60px rgba(184,9,195,0.4)" }
				},
				scan: {
					"0%": { backgroundPosition: "0 0" },
					"100%": { backgroundPosition: "0 100%" }
				}
			}
		}
	},
	plugins: []
};
