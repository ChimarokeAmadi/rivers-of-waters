import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				Orange: "#FF6A09",
				Blue: "#2E56D9",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "2.5rem",
					lg: "40px",
				},
				screens: {
					sm: "100%",
					lg: "1657px",
				},
			},
		},
	},
} satisfies Config;
