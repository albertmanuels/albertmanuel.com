/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./components/**/*.{ts,tsx,mdx}',
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
	],
	theme: {
		minHeight: {
			desktop: "calc(100vh - 127px)",
			mobile: "calc(100vh - 154px)",
		},

		screens: {
			xs: "392px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			colors: {
				primary: {
					100: "#414654",
					200: "#292e3b",
					300: "#2c2e30",
					400: "#1D1F21",
				},
				accent: "#06b6d4",

				txt: {
					100: "#d6d3d1",
					200: "#e0e0e0",
					300: "#FFFFFF",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [require("@tailwindcss/typography")],
};
