import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		agent: 'npm',
		repo: 'mdx-js/mdx-analyzer',
		branch: 'main',
		test: 'test',
	})
}
