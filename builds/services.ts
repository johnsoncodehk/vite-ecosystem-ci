import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function build(options: RunOptions) {
	return runInRepo({
		...options,
		repo: 'volarjs/services',
		build: 'build',
	})
}

export const packages = {
	'volar-service-css': 'packages/css',
	'volar-service-emmet': 'packages/emmet',
	'volar-service-html': 'packages/html',
	'volar-service-json': 'packages/json',
	'volar-service-markdown': 'packages/markdown',
	'volar-service-prettier': 'packages/prettier',
	'volar-service-pretty-ts-errors': 'packages/pretty-ts-errors',
	'volar-service-prettyhtml': 'packages/prettyhtml',
	'volar-service-pug-beautify': 'packages/pug-beautify',
	'volar-service-pug': 'packages/pug',
	'volar-service-sass-formatter': 'packages/sass-formatter',
	'volar-service-tsconfig': 'packages/tsconfig',
	'volar-service-typescript-twoslash-queries':
		'packages/typescript-twoslash-queries',
	'volar-service-typescript': 'packages/typescript',
	'volar-service-vetur': 'packages/vetur',
	'volar-service-yaml': 'packages/yaml',
}
