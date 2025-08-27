import {run} from './utils.js'

class CLIManager {
	async getConfiguration() {
		console.log(await run('get-configuration.py'))
	}

	async getKeyboardLayout() {
		console.log(await run('get-keyboard-layout.py'))
	}

	setKeyboardLayout(index: number) {}

	async getTouchState() {
		console.log(await run('get-touch-state.py'))
	}

	async setTouchState(switchArg: 'enabled' | 'disabled') {
		await run('set-touch-state.py', [switchArg])
	}
}

export const cliManager = new CLIManager()
