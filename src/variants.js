// fadeIn: slides + fades from a direction
export const fadeIn = (direction, delay) => {
	return {
		hidden: {
			y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
			opacity: 0,
			x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
			scale: 0.98
		},
		show: {
			y: 0,
			x: 0,
			opacity: 1,
			scale: 1,
			transition: {
				type: "tween",
				duration: 1.1,
				delay: delay,
				ease: [0.16, 1, 0.3, 1]
			}
		}
	};
};

// scaleIn: zoom-in reveal
export const scaleIn = (delay = 0) => ({
	hidden: { scale: 0.6, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: { type: "spring", stiffness: 80, damping: 14, delay }
	}
});

// staggerContainer: parent that staggers children
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren
		}
	}
});

// textVariant: text word-reveal with slight Y
export const textVariant = (delay = 0) => ({
	hidden: { y: 30, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			damping: 20,
			stiffness: 100,
			delay
		}
	}
});

// slideIn: strong directional slide
export const slideIn = (direction, type = "tween", delay = 0, duration = 0.9) => ({
	hidden: {
		x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
		y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0
	},
	show: {
		x: 0,
		y: 0,
		transition: { type, delay, duration, ease: [0.16, 1, 0.3, 1] }
	}
});

// glowPulse: pulsing neon glow for accent elements
export const glowPulse = {
	hidden: { opacity: 0.4, scale: 0.97 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			repeat: Infinity,
			repeatType: "reverse",
			duration: 2.2,
			ease: "easeInOut"
		}
	}
};

// cardHover: interactive hover state for cards
export const cardHover = {
	rest: { scale: 1, boxShadow: "0 0 0px rgba(0,0,0,0)" },
	hover: {
		scale: 1.03,
		boxShadow: "0 0 30px rgba(184, 9, 195, 0.45)",
		transition: { type: "spring", stiffness: 200, damping: 20 }
	}
};
