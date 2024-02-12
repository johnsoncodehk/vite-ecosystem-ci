import path from 'path'
import fs from 'fs'
import { runInRepo } from '../utils.ts'
import type { RunOptions } from '../types.d.ts'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'volarjs/ecosystem-ci',
		branch: 'main',
		build: async () => {
			const dir = path.resolve(options.workspace, 'ecosystem-ci')
			const pkgFile = path.join(dir, 'package.json')
			const pkg = JSON.parse(await fs.promises.readFile(pkgFile, 'utf-8'))
			if (pkg.name !== 'volar-ecosystem-ci') {
				throw new Error(
					`invalid checkout, expected package.json with "name":"volar-ecosystem-ci" in ${dir}`,
				)
			}
			pkg.scripts.selftestscript =
				"[ -f ../../volar/packages/language-core/index.js ] || (echo 'volar build failed' && exit 1)"
			await fs.promises.writeFile(
				pkgFile,
				JSON.stringify(pkg, null, 2),
				'utf-8',
			)
		},
		test: 'pnpm run selftestscript',
		verify: false,
	})
}
