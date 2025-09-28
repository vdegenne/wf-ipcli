import {Command} from 'commander'
import {readFile} from 'fs/promises'
import path from 'path'
import {cliManager} from './cliManager.js'
const __dirname = import.meta.dirname

export async function cli() {
	const program = new Command()

	const packageContent = await readFile(path.resolve(__dirname, 'package.json'))
	const packageInfo = JSON.parse(packageContent.toString())

	program
		.name('wf-cli')
		.description('Wrapper CLI for Wayfire IPC')
		.version(packageInfo.version)

	program
		.command('config')
		.description('Get the current configuration')
		.action(cliManager.getConfiguration)

	program
		.command('kb-layout')
		.description('Get the current keyboard state')
		.action(cliManager.getKeyboardLayout)

	program
		.command('touch-state [switch]')
		.description('Get or set the current touch state (enabled|disabled)')
		.action(async (switchArg?: string) => {
			if (!switchArg) {
				await cliManager.getTouchState()
			} else {
				if (switchArg !== 'enabled' && switchArg !== 'disabled') {
					console.error('Error: switch must be "enabled" or "disabled"')
					process.exit(1)
				}
				await cliManager.setTouchState(switchArg)
			}
		})

	program
		.command('active-window')
		.description('Get information of the active window (focused view)')
		.action(cliManager.getActiveWindow)

	program.parse(process.argv)
}
