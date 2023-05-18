// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    // container_bg
    const container_bg = this.add.container(0, 0);

    // txt_turn
    const txt_turn = this.add.text(620, 180, "", {});
    txt_turn.setOrigin(0.5, 0.5);
    txt_turn.text = "Turn";
    txt_turn.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "84px",
    });
    container_bg.add(txt_turn);

    // txt_game
    const txt_game = this.add.text(540, 51, "", {});
    txt_game.setOrigin(0.5, 0.5);
    txt_game.text = "Tic Tac Toe";
    txt_game.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "84px",
    });
    container_bg.add(txt_game);

    // turn_img
    const turn_img = this.add.image(460, 180, "zero");
    turn_img.scaleX = 0.4;
    turn_img.scaleY = 0.4;
    container_bg.add(turn_img);

    // container_map
    const container_map = this.add.container(540, 859);

    // map_0
    const map_0 = this.add.image(-320, -320, "map");
    map_0.name = "map_0";
    container_map.add(map_0);

    // map_1
    const map_1 = this.add.image(0, -320, "map");
    map_1.name = "map_1";
    container_map.add(map_1);

    // map_2
    const map_2 = this.add.image(320, -320, "map");
    map_2.name = "map_2";
    container_map.add(map_2);

    // map_3
    const map_3 = this.add.image(-320, 0, "map");
    map_3.name = "map_3";
    container_map.add(map_3);

    // map_4
    const map_4 = this.add.image(0, 0, "map");
    map_4.name = "map_4";
    container_map.add(map_4);

    // map_5
    const map_5 = this.add.image(320, 0, "map");
    map_5.name = "map_5";
    container_map.add(map_5);

    // map_6
    const map_6 = this.add.image(-320, 320, "map");
    map_6.name = "map_6";
    container_map.add(map_6);

    // map_7
    const map_7 = this.add.image(0, 320, "map");
    map_7.name = "map_7";
    container_map.add(map_7);

    // map_8
    const map_8 = this.add.image(320, 320, "map");
    map_8.name = "map_8";
    container_map.add(map_8);

    // container_board
    const container_board = this.add.container(540, 859);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(160, 0, 10, 900);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 0;
    container_board.add(rectangle_1);

    // rectangle
    const rectangle = this.add.rectangle(-160, 0, 10, 900);
    rectangle.isFilled = true;
    rectangle.fillColor = 0;
    container_board.add(rectangle);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(0, -160, 900, 10);
    rectangle_2.isFilled = true;
    rectangle_2.fillColor = 0;
    container_board.add(rectangle_2);

    // rectangle_3
    const rectangle_3 = this.add.rectangle(0, 160, 900, 10);
    rectangle_3.isFilled = true;
    rectangle_3.fillColor = 0;
    container_board.add(rectangle_3);

    // line
    const line = this.add.rectangle(0, 0, 940, 10);
    line.visible = false;
    line.isFilled = true;
    line.fillColor = 16711680;
    container_board.add(line);

    // container_btn_restart
    const container_btn_restart = this.add.container(540, 1593);
    container_btn_restart.visible = false;

    // btn_restart
    const btn_restart = this.add.rectangle(0, 0, 512, 128);
    btn_restart.isFilled = true;
    btn_restart.fillColor = 0;
    container_btn_restart.add(btn_restart);

    // text_1
    const text_1 = this.add.text(0, 0, "", {});
    text_1.setOrigin(0.5, 0.5);
    text_1.text = "Restart";
    text_1.setStyle({ fontFamily: "Verdana", fontSize: "84px" });
    container_btn_restart.add(text_1);

    // map_0 (components)
    new PushOnClick(map_0);

    // map_1 (components)
    new PushOnClick(map_1);

    // map_2 (components)
    new PushOnClick(map_2);

    // map_3 (components)
    new PushOnClick(map_3);

    // map_4 (components)
    new PushOnClick(map_4);

    // map_5 (components)
    new PushOnClick(map_5);

    // map_6 (components)
    new PushOnClick(map_6);

    // map_7 (components)
    new PushOnClick(map_7);

    // map_8 (components)
    new PushOnClick(map_8);

    this.txt_turn = txt_turn;
    this.turn_img = turn_img;
    this.container_map = container_map;
    this.line = line;
    this.container_btn_restart = container_btn_restart;
    this.btn_restart = btn_restart;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Text} */
  txt_turn;
  /** @type {Phaser.GameObjects.Image} */
  turn_img;
  /** @type {Phaser.GameObjects.Container} */
  container_map;
  /** @type {Phaser.GameObjects.Rectangle} */
  line;
  /** @type {Phaser.GameObjects.Container} */
  container_btn_restart;
  /** @type {Phaser.GameObjects.Rectangle} */
  btn_restart;

  /* START-USER-CODE */

  // Write more your code here

  create() {
    this.editorCreate();
    this.oBot = new Bot(this);
    this.isGameOver = false;
    this.isBot = true;
    this.btn_restart.setInteractive().on("pointerup", () => {
      console.clear();
      this.scene.restart();
    });
    this.bPlayerTurn = true;
    this.win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.nCountMove = 0;
    this.player1 = "cross";
    this.player2 = "zero";
    this.turn_img.setTexture(this.player1);
  }

  changePlayerTurn() {
    this.bPlayerTurn = !this.bPlayerTurn;
    if (this.isBot && !this.bPlayerTurn && !this.isGameOver) {
      const nIndex = this.oBot.makeMove(this.board);
      setTimeout(() => {
        this.playMove(nIndex);
      }, 1000);
    }
    this.turn_img.setTexture(this.bPlayerTurn ? this.player1 : this.player2);
  }
  playMove(nIndex) {
    if (this.container_map.list[nIndex].texture.key == "map") {
      this.container_map.list[nIndex].setTexture(
        this.bPlayerTurn ? this.player1 : this.player2
      );
      this.board[nIndex] = this.bPlayerTurn ? this.player1 : this.player2;
      this.nCountMove++;
      if (this.nCountMove > 4) {
        const nWinner = this.checkWinner(this.board);
        if (this.nCountMove == 9 && nWinner == "tie") {
          this.showResult("tie");
        }
        if (nWinner != "tie") {
          this.showResult(nWinner);
          this.isGameOver = true;
        } else {
          if (this.nCountMove <= 8) this.changePlayerTurn();
        }
      } else {
        if (this.nCountMove <= 8) this.changePlayerTurn();
      }
    }
  }
  checkWinner(board) {
    for (let i = 0; i < this.win.length; i++) {
      const [a, b, c] = this.win[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.drawLine(a, b, c);
        return board[a];
      }
    }
    return "tie";
  }
  showResult(nWinner) {
    this.container_btn_restart.setVisible(true);
    this.disableBoard();
    switch (nWinner) {
      case this.player1:
        this.turn_img.setTexture(nWinner);
        this.txt_turn.setText(" Wins");
        break;
      case this.player2:
        this.turn_img.setTexture(nWinner);
        this.txt_turn.setText(" Wins");
        break;
      case "tie":
        this.turn_img.setVisible(false);
        this.txt_turn.setX(540);
        this.txt_turn.setText("TIE");
        break;
    }
  }
  disableBoard() {
    this.container_map.list.forEach((map) => {
      map.disableInteractive();
    });
  }
  drawLine(nPoint1, nMidPoint, nPoint2) {
    this.line.setPosition(
      this.container_map.list[nMidPoint].x,
      this.container_map.list[nMidPoint].y
    );
    const angle = Phaser.Math.RadToDeg(
      Phaser.Math.Angle.Between(
        this.container_map.list[nPoint1].x,
        this.container_map.list[nPoint1].y,
        this.container_map.list[nPoint2].x,
        this.container_map.list[nPoint2].y
      )
    );
    this.line.setAngle(angle);
    this.line.setVisible(true);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
