/* global Phaser */
class SplashScene extends Phaser.Scene{
	constructor(){
		super({key: 'splashScene'})
	}

	init(data){
		this.cameras.main.setBackgroundColor('#ffffff')
	}

	preload() {
		console.log('SplashScene')
		this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
	}

	create(data){
		this.splashSceneBackGroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
		this.splashSceneBackGroundImage.x = 1360 /2
		this.splashSceneBackGroundImage.y = 768 /2
	}

	update(time, delta){

		if(time > 3000){
			this.scene.switch('titleScene')	
		}
		
	}
}

export default SplashScene