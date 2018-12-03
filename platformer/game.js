const keys = 'W,A,S,D,SPACE,LEFT,RIGHT,UP,DOWN'

let pl, k, plats

function preload() {
    this.load.image('bg', './assets/city.sprite.png')
    this.load.image('fg', './assets/lambo.png')

}

function create() {
    this.add.image(0, 0, 'bg').setOrigin(0,0)
            
    pl = this.physics.add.sprite(100, 90, 'fg')
    pl.setCollideWorldBounds(true)
    pl.setScale(10)
    pl.setDragX(900)
    pl.setBounce(1)

    k = this.input.keyboard.addKeys(keys)

}

function update() {
    
    if (k.LEFT.isDown || k.A.isDown){
      pl.setVelocityX(-400)
    } 
    
    else if ( k.RIGHT.isDown || k.D.isDown) {
      pl.setVelocityX(400)
    }

    if (pl.body.onFloor()) {

        if (k.UP.isDown || k.SPACE.isDown  || k.W.isDown) {
            pl.setVelocityY(-400)
        }

    }

}

let config = {
    width: 683,
    height: 384,
    pixelArt: true,
    scene: {preload, create, update},
    physics: {
        default: 'arcade',
        arcade: {
          gravity: {y: 500},
          debug: false 
        },
      },
}

new Phaser.Game( config )