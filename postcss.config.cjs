module.exports = {
	plugins: [require("autoprefixer"), require("cssnano")],
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
	},
};
