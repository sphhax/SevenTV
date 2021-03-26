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
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:json/recommended', 'prettier/prettier'],
	plugins: ['prettier', 'json'],
	// add your custom rules here
	rules: {
		indent: ['error', 'tab'],
		'prettier/prettier': ['error', { singleQuote: true, semi: true, tabWidth: 4, useTabs: true, printWidth: 140 }],
		'@typescript-eslint/no-namespace': 0,
		'@typescript-eslint/no-explicit-any': 0,
	},
};
