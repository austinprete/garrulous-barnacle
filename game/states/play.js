
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.sprite = this.game.add.sprite(this.game.world.centerX, 530, 'ship');
      this.sprite.anchor.setTo(0.5, 0.5);
      this.sprite.inputEnabled = true;

      this.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;


    },
    update: function() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && (this.sprite.body.position.x > 60))
      {
        this.sprite.x -= 5;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && (this.sprite.body.position.x < 650))
      {
        this.sprite.x += 5;
      }
    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
