/* global Phaser */

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

const splashScene = new SplashScene()
const titleScene = new TitleScene()

const config = {
	type: Phaser.AUTO,
	width: 1360,
	height: 768,
	physics:{
		default: 'arcade',
		arcade:{
			debug: true
		}
	},
	backgroundColor: '#ffffff',
	scale: {
		mode: Phaser.Scale.FIT,

		// Place to the middle of the page.
		autoCenter: Phaser.Scale.CENTER_BOTH
	}
}

const game = new Phaser.Game(config)

// load scenes (key)
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// start
game.scene.start('splashScene')
