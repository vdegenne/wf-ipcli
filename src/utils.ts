import {spawn} from 'child_process'
import path from 'path'
const __dirname = import.meta.dirname

export function run(scriptName: string, args: string[] = []): Promise<string> {
	return new Promise((resolve, reject) => {
		const scriptPath = path.join(__dirname, 'scripts', scriptName)
		const process = spawn(scriptPath, args, {stdio: 'pipe'})

		let output = ''
		let errorOutput = ''

		process.stdout.on('data', (data) => (output += data.toString()))
		process.stderr.on('data', (data) => (errorOutput += data.toString()))

		process.on('close', (code) => {
			if (code === 0) resolve(output.trim())
			else reject(new Error(`Error ${code}: ${errorOutput}`))
		})
	})
}
