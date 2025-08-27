import {cjs, config, nodeResolve, terser} from '@vdegenne/rollup'

const plugins = [nodeResolve(), terser(), cjs()]

export default config([
	{
		input: './lib/index.js',
		output: {file: './cli.js', format: 'es'},
		plugins,
	},
])
