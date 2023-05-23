// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {
  constructor() {
    super("Home");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // log
    const log = this.add.image(540, 660, "log");
    log.scaleX = 0.5;
    log.scaleY = 0.5;

    // btn_computer
    const btn_computer = this.add.image(540, 1323, "button1");

    // btn_pvp
    const btn_pvp = this.add.image(540, 1146, "button2");

    // title
    const title = this.add.text(540, 200, "", {});
    title.setOrigin(0.5, 0.5);
    title.text = "Tic Tac Toe";
    title.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "100px",
      fontStyle: "bold",
    });

    // pvp
    const pvp = this.add.text(540, 1146, "", {});
    pvp.setOrigin(0.5, 0.5);
    pvp.text = "PvP";
    pvp.setStyle({
      fontFamily: "Verdana",
      fontSize: "40px",
      fontStyle: "bold",
    });

    // computer
    const computer = this.add.text(540, 1323, "", {});
    computer.setOrigin(0.5, 0.5);
    computer.text = "Computer";
    computer.setStyle({
      fontFamily: "Verdana",
      fontSize: "40px",
      fontStyle: "bold",
    });

    // title (components)
    new PreloadText(title);

    // pvp (components)
    new PreloadText(pvp);

    // computer (components)
    new PreloadText(computer);

    this.btn_computer = btn_computer;
    this.btn_pvp = btn_pvp;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Image} */
  btn_computer;
  /** @type {Phaser.GameObjects.Image} */
  btn_pvp;

  /* START-USER-CODE */

  // Write your code here
  pointerOverAnimation(btn) {
    btn.setInteractive().on("pointerover", () => {
      this.tweens.add({
        targets: btn,
        scaleX: "*=1.2",
        scaleY: "*=1.2",
        duration: 80,
      });
    });
  }
  pointerOutAnimation(btn) {
    btn.setInteractive().on("pointerout", () => {
      this.tweens.add({
        targets: btn,
        scaleX: 1,
        scaleY: 1,
        duration: 80,
      });
    });
  }

  create() {
    this.editorCreate();

    nCountPLayer1Win = 0;
    nCountPLayer2Win = 0;
    nCountDraw = 0;

    this.pointerOverAnimation(this.btn_computer);
    this.pointerOverAnimation(this.btn_pvp);
    this.pointerOutAnimation(this.btn_computer);
    this.pointerOutAnimation(this.btn_pvp);

    this.btn_pvp.setInteractive().on("pointerdown", () => {
      this.tweens.add({
        targets: this.btn_pvp,
        scaleX: "*=0.8",
        scaleY: "*=0.8",
        duration: 80,
        yoyo: true,
      });
      this.scene.stop("Home");
      this.scene.start("Level", { isBot: false });
    });
    this.btn_computer.setInteractive().on("pointerdown", () => {
      this.tweens.add({
        targets: this.btn_computer,
        scaleX: "*=0.8",
        scaleY: "*=0.8",
        duration: 80,
        yoyo: true,
      });
      this.scene.stop();
      this.scene.start("Level", { isBot: true });
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
