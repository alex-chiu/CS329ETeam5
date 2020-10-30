/*  SCENE WHEN PLAYER DIES IN BOSS 1 SCENE

    Scene that appears when the player dies in Boss1.
    Has options for returning to the menu or trying the stage again.
*/

class Stage1BossDie extends Phaser.Scene {
    constructor() {
        super({ key: 'Stage1BossDie' });
    }

    preload() {

    }

    create() {
      this.background = this.add.graphics()
      this.background.fillRoundedRect(150, 175, 500, 250, 25)
      this.background.fillStyle('#9ba3a0')

      this.add.text(game.config.width/2, 220,'YOU DIED', { fontSize: '75px', fill: '#ffffff' }).setOrigin(0.5);

      const tryAgainButton = this.add.text(game.config.width/2, 360, 'TRY AGAIN', { fontSize: '40px', fill: '#b5dbf7' }).setOrigin(0.5);
      tryAgainButton.setInteractive();
      tryAgainButton.on('pointerdown', () => {
        this.scene.restart('Stage1Boss');
        this.scene.start('Stage1Boss');
      });

      const menuButton = this.add.text(game.config.width/2, 290, 'MENU', { fontSize: '40px', fill: '#8db9d9' }).setOrigin(0.5);
      menuButton.setInteractive();
      menuButton.on('pointerdown', () => {
        this.scene.restart('Stage1Boss');
        this.scene.stop('Stage1Boss');
        this.scene.start('Menu');
      });
    }

    update() {

    }
}
