/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
	],
	rules: {
		semi: ['error', 'never'],
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				trailingComma: 'es5',
				jsxBracketSameLine: true,
				useTabs: true,
				semi: false,
			},
		],
	},
}
