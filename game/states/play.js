
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.player = this.game.add.sprite(80, this.game.world.centerY, 'ship');
      this.player.anchor.setTo(0.5, 0.5);
      this.player.inputEnabled = true;
      this.player.angle = 90;

      this.game.physics.arcade.enable(this.player);
      this.player.body.collideWorldBounds = true;


      this.enemy = this.game.add.sprite(1300, this.game.world.centerY, 'enemy1');
      this.enemy.angle = -90;
      this.enemy.anchor.setTo(0.5, 0.5);
    },
    update: function() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) && (this.player.body.position.y > 50))
      {
        this.player.y -= 5;
      } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && (this.player.body.position.y < 270))
      {
        this.player.y += 5;
      }

      this.enemy.x -= 3;
    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
