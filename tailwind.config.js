/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts}'],
	theme: {
		screens: {
			xs: "392px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			minHeight: {
				desktop: "calc(100vh - 140px)",
				mobile: "calc(100vh - 142px)",
			},
			colors: {
				primary: {
					100: "#414654",
					200: "#292e3b",
					300: "#2c2e30",
					400: "#1D1F21",
				},
				accent: "#1640D6",
				subAccent: "#FF4C29",
				darkMode: "#040D12",
				txt: {
					100: "#d6d3d1",
					200: "#e0e0e0",
					300: "#FFFFFF",
				},
			},
			width: {
				experienceRightSided: "calc(50% + 4px)",
				experienceLeftSided: "50%",
				inherit: 'inherit'
			},
			maxWidth: {
				inherit: 'inherit'
			}
			
		},
	},
  darkMode: ["class"],
	plugins: [require("@tailwindcss/typography")],
};
