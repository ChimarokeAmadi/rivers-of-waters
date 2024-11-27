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
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					lg: "2.5rem",
				},
				screens: {
					sm: "100%",
					lg: "1728px",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
