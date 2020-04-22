import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const { name } = pkg

export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true,
			name,
		},
		{
			file: pkg.main,
			format: 'umd',
			sourcemap: true,
			name,
		},
	],
	plugins: [svelte(), resolve(), terser()],
}
