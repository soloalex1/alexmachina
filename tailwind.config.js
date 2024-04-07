/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				main: "1fr min(120ch, 100%) 1fr",
				responsive: "1fr 1fr 30ch",
			},
		},
	},
	plugins: [],
};
