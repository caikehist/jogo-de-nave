/* global Phaser */

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
	backgroundColor: 0x5f6e7a,
	scale: {
		mode: Phaser.Scale.FIT,

		// Place to the middle of the page.
		autoCenter: Phaser.Scale.CENTER_BOTH
	}
}

const game = new Phaser.Game(config)