let pl, curs

new Phaser.Game({
    width: 683,   // half of 1366
    height: 384, //half of 768
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {y: 500},
        debug: false 
      },
    },
    scene: {
        preload: function () {
            this.load.image('bg', './assets/city.sprite.png')
            this.load.image('fg', './assets/lambo.png')
        },
        create() {
            this.add.image(0, 0, 'bg').setOrigin(0,0)
            pl = this.physics.add.sprite(100, 90, 'fg')
            pl.setCollideWorldBounds(true)
            pl.setBounce(.1) // 0 to 1
            pl.setDragX(900)

            curs = this.input.keyboard.createCursorKeys()
      },

      

        update() {

            if (curs.left.isDown) {
                pl.setVelocityX(-200)
            }   else if (curs.right.isDown) {
                pl.setVelocityX(200)
            }
            
            if (! pl.body.onFloor())  {
                pl.setDragX(900)
           } else {
               pl.setDragX(0)

                if (curs.space.isDown || curs.up.isDown) {
                    pl.setVelocityY(-600)
                }
            }
        }
   }
}) 

