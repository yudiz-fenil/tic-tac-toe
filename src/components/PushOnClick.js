// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class PushOnClick extends UserComponent {
  constructor(gameObject) {
    super(gameObject);

    this.gameObject = gameObject;
    gameObject["__PushOnClick"] = this;

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {PushOnClick} */
  static getComponent(gameObject) {
    return gameObject["__PushOnClick"];
  }

  /** @type {Phaser.GameObjects.Image} */
  gameObject;

  /* START-USER-CODE */

  awake() {
    this.gameObject.setInteractive().on("pointerdown", () => {
      const nIndex = parseInt(this.gameObject.name.match(/\d+/)[0]);
      if (this.scene.isBot) {
        if (this.scene.bPlayerTurn) {
          this.scene.playMove(nIndex);
        }
      } else {
        this.scene.playMove(nIndex);
        this.scene.reqMove(nIndex);
      }
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
