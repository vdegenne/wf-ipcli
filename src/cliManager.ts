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

	async getActiveWindow() {
		console.log(await run('get-active-window.py'))
	}

	async getActiveName() {
		console.log(await run('get-active-name.py'))
	}

	async isActiveName(name: string) {
		const activeName = await run('get-active-name.py')
		if (name !== activeName) {
			process.exit(1)
		} else {
			process.exit(0)
		}
	}
}

export const cliManager = new CLIManager()
