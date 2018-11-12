new Phaser.Game({
    width: 683,   // half of 1366
    height: 384, //half of 768
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 300, x: 400 },
        debug: true 
      },
    },
    scene: {
        preload: function () {
            this.load.image('bg', './assets/plat-bg.png')
            this.load.image('fg', './assets/dylan5.png')
        },
        create() {
            this.add.image(0, 0, 'bg').setOrigin(0,0)
            pl= this.physics.add.sprite(100, 90, 'fg')
            pl.setCollideWorldBounds(true)
            pl.setBounce(1) // 0 to 1
        }
    }
})