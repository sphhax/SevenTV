module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	globals: {
		chrome: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:json/recommended',
	],
	plugins: ['prettier', 'json'],
	// add your custom rules here
	rules: {
		indent: ['error', 'tab'],
		'@typescript-eslint/no-namespace': 0,
		'@typescript-eslint/no-explicit-any': 0,
	},
};
