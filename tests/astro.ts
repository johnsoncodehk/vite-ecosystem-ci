import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'withastro/language-tools',
		branch: 'main',
		build: 'build',
		test: 'test:skip-vs',
	})
}
