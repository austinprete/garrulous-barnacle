
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.player = this.game.add.sprite(this.game.world.centerX, 530, 'ship');
      this.player.anchor.setTo(0.5, 0.5);
      this.player.inputEnabled = true;

      this.game.physics.arcade.enable(this.player);
      this.player.body.collideWorldBounds = true;


      this.enemy = this.game.add.sprite(this.game.world.centerX, -100, 'enemy1');
      this.enemy.anchor.setTo(0.5, 0.5);
    },
    update: function() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && (this.player.body.position.x > 60))
      {
        this.player.x -= 5;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && (this.player.body.position.x < 650))
      {
        this.player.x += 5;
      }

      this.enemy.y += 5;
    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
