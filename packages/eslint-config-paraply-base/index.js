
module.exports = {
	extends: [
		"./rules/base",
		"./rules/unsorted",
		"./rules/import",
	].map(require.resolve),
	ignorePatterns: ["dist", "build"],
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		"@typescript-eslint"
	],
	rules: {}
};
