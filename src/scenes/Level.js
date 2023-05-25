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

    // btn_home
    const btn_home = this.add.image(152, 85, "home");
    btn_home.scaleX = 0.2;
    btn_home.scaleY = 0.2;
    container_bg.add(btn_home);

    // container_map
    const container_map = this.add.container(540, 999);

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
    const container_board = this.add.container(540, 999);

    // rectangle
    const rectangle = this.add.rectangle(-160, 0, 10, 900);
    rectangle.scaleX = 0;
    rectangle.scaleY = 0;
    rectangle.isFilled = true;
    rectangle.fillColor = 0;
    container_board.add(rectangle);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(160, 0, 10, 900);
    rectangle_1.scaleX = 0;
    rectangle_1.scaleY = 0;
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 0;
    container_board.add(rectangle_1);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(0, -160, 900, 10);
    rectangle_2.scaleX = 0;
    rectangle_2.scaleY = 0;
    rectangle_2.isFilled = true;
    rectangle_2.fillColor = 0;
    container_board.add(rectangle_2);

    // rectangle_3
    const rectangle_3 = this.add.rectangle(0, 160, 900, 10);
    rectangle_3.scaleX = 0;
    rectangle_3.scaleY = 0;
    rectangle_3.isFilled = true;
    rectangle_3.fillColor = 0;
    container_board.add(rectangle_3);

    // line
    const line = this.add.rectangle(0, 0, 940, 10);
    line.scaleX = 0;
    line.scaleY = 0;
    line.visible = false;
    line.isFilled = true;
    line.fillColor = 16711680;
    container_board.add(line);

    // container_btn_restart
    const container_btn_restart = this.add.container(540, 1733);
    container_btn_restart.visible = false;

    // btn_restart
    const btn_restart = this.add.image(0, 0, "button");
    btn_restart.scaleX = 1.3;
    btn_restart.scaleY = 1.3;
    container_btn_restart.add(btn_restart);

    // text_1
    const text_1 = this.add.text(0, -2, "", {});
    text_1.setOrigin(0.5, 0.5);
    text_1.text = "Restart";
    text_1.setStyle({
      color: "#137821ff",
      fontFamily: "Verdana",
      fontSize: "70px",
    });
    container_btn_restart.add(text_1);

    // container_score
    const container_score = this.add.container(540, 371);

    // txt_player_1
    const txt_player_1 = this.add.text(-350, 0, "", {});
    txt_player_1.setOrigin(0.5, 0.5);
    txt_player_1.text = "Player 1:";
    txt_player_1.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "40px",
    });
    container_score.add(txt_player_1);

    // txt_player_2
    const txt_player_2 = this.add.text(294, 0, "", {});
    txt_player_2.setOrigin(0.5, 0.5);
    txt_player_2.text = "Player 2:";
    txt_player_2.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "40px",
    });
    container_score.add(txt_player_2);

    // txt_draw
    const txt_draw = this.add.text(-31, 0, "", {});
    txt_draw.setOrigin(0.5, 0.5);
    txt_draw.text = "Draw:";
    txt_draw.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "40px",
    });
    container_score.add(txt_draw);

    // txt_player_1_win
    const txt_player_1_win = this.add.text(-248, 0, "", {});
    txt_player_1_win.setOrigin(0, 0.5);
    txt_player_1_win.text = "0";
    txt_player_1_win.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "40px",
    });
    container_score.add(txt_player_1_win);

    // txt_player_2_win
    const txt_player_2_win = this.add.text(392, 0, "", {});
    txt_player_2_win.setOrigin(0, 0.5);
    txt_player_2_win.text = "0";
    txt_player_2_win.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "40px",
    });
    container_score.add(txt_player_2_win);

    // txt_draw_win
    const txt_draw_win = this.add.text(43, 0, "", {});
    txt_draw_win.setOrigin(0, 0.5);
    txt_draw_win.text = "0";
    txt_draw_win.setStyle({
      color: "#000",
      fontFamily: "Verdana",
      fontSize: "40px",
    });
    container_score.add(txt_draw_win);

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
    this.btn_home = btn_home;
    this.container_map = container_map;
    this.container_board = container_board;
    this.line = line;
    this.container_btn_restart = container_btn_restart;
    this.btn_restart = btn_restart;
    this.txt_player_1_win = txt_player_1_win;
    this.txt_player_2_win = txt_player_2_win;
    this.txt_draw_win = txt_draw_win;

    this.events.emit("scene-awake");
  }

  /** @type {Phaser.GameObjects.Text} */
  txt_turn;
  /** @type {Phaser.GameObjects.Image} */
  turn_img;
  /** @type {Phaser.GameObjects.Image} */
  btn_home;
  /** @type {Phaser.GameObjects.Container} */
  container_map;
  /** @type {Phaser.GameObjects.Container} */
  container_board;
  /** @type {Phaser.GameObjects.Rectangle} */
  line;
  /** @type {Phaser.GameObjects.Container} */
  container_btn_restart;
  /** @type {Phaser.GameObjects.Image} */
  btn_restart;
  /** @type {Phaser.GameObjects.Text} */
  txt_player_1_win;
  /** @type {Phaser.GameObjects.Text} */
  txt_player_2_win;
  /** @type {Phaser.GameObjects.Text} */
  txt_draw_win;

  /* START-USER-CODE */

  // Write more your code here

  init(data) {
    this.isBot = data.isBot;
  }

  create() {
    this.editorCreate();
    this.oSocket = new SocketManager(this);

    this.setScore();

    this.btn_home.setInteractive().on("pointerover", () => {
      this.tweens.add({
        targets: this.btn_home,
        scaleX: "*=1.2",
        scaleY: "*=1.2",
        duration: 80,
      });
    });
    this.btn_home.setInteractive().on("pointerout", () => {
      this.tweens.add({
        targets: this.btn_home,
        scaleX: 0.2,
        scaleY: 0.2,
        duration: 80,
      });
    });

    this.btn_home.setInteractive().on("pointerdown", () => {
      this.scene.stop("Level");
      this.scene.start("Home");
    });

    let shape = this.make.graphics();
    shape.fillRect(0, 0, 300, 300);
    const mask = shape.createGeometryMask();
    this.container_map.list.forEach((map) => {
      map.setMask(mask);
    });

    this.animateBoard();
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.nCountMove = 0;
    this.player1 = "cross";
    this.player2 = "zero";
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
    this.turn_img.setTexture(this.player1);
    this.oBot = new Bot(this);
    this.btn_restart.setInteractive().on("pointerup", () => {
      console.clear();
      this.scene.restart();
    });
  }
  animateBoard() {
    this.container_board.list.forEach((line) => {
      this.tweens.add({
        targets: line,
        ease: "Power3",
        scaleX: 1,
        scaleY: 1,
        duration: 1000,
      });
    });
  }

  changePlayerTurn() {
    this.bPlayerTurn = !this.bPlayerTurn;
    if (this.isBot && !this.bPlayerTurn) {
      const nIndex = this.oBot.makeMove(this.board);
      setTimeout(() => {
        this.playMove(nIndex);
      }, 1000);
    }
    this.turn_img.setTexture(this.bPlayerTurn ? this.player1 : this.player2);
  }
  reqMove(nIndex) {
    this.oSocket.emit("reqMove", { nIndex: nIndex });
  }
  playMove(nIndex) {
    if (this.container_map.list[nIndex].texture.key == "map") {
      this.container_map.list[nIndex].setScale(0, 0);
      this.container_map.list[nIndex].clearMask();
      this.container_map.list[nIndex].disableInteractive();
      this.container_map.list[nIndex].setTexture(
        this.bPlayerTurn ? this.player1 : this.player2
      );
      this.tweens.add({
        targets: this.container_map.list[nIndex],
        ease: "Power3",
        scaleX: 1,
        scaleY: 1,
        duration: 500,
      });
      this.board[nIndex] = this.bPlayerTurn ? this.player1 : this.player2;
      this.nCountMove++;
      if (this.nCountMove > 4) {
        const nWinner = this.checkWinner(this.board);
        if (this.nCountMove == 9 && nWinner == "draw") {
          this.showResult("draw");
        }
        if (nWinner != "draw") {
          this.showResult(nWinner);
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
    return "draw";
  }
  showResult(nWinner) {
    this.container_btn_restart.setVisible(true);
    this.disableBoard();
    switch (nWinner) {
      case this.player1:
        this.showConfetti();
        this.turn_img.setTexture(nWinner);
        this.txt_turn.setText(" Wins");
        nCountPLayer1Win++;
        break;
      case this.player2:
        this.showConfetti();
        this.turn_img.setTexture(nWinner);
        this.txt_turn.setText(" Wins");
        nCountPLayer2Win++;
        break;
      case "draw":
        this.turn_img.setVisible(false);
        this.txt_turn.setX(540);
        this.txt_turn.setText("DRAW");
        nCountDraw++;
        break;
    }
    this.setScore();
  }
  disableBoard() {
    this.container_map.list.forEach((map) => {
      map.disableInteractive();
    });
  }
  drawLine(nPoint1, nMidPoint, nPoint2) {
    this.line.setScale(0, 0);
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
    this.tweens.add({
      targets: this.line,
      ease: "Power3",
      scaleX: 1,
      scaleY: 1,
      duration: 500,
    });
  }
  showConfetti() {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };
    function shoot() {
      confetti({
        ...defaults,
        particleCount: 40,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }
  setScore() {
    this.txt_player_1_win.setText(nCountPLayer1Win);
    this.txt_player_2_win.setText(nCountPLayer2Win);
    this.txt_draw_win.setText(nCountDraw);
  }
  // arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // playWinAnimation(nPoint1, nMidPoint, nPoint2) {
  //   this.arr.splice(this.arr.indexOf(nPoint1), 1);
  //   this.arr.splice(this.arr.indexOf(nMidPoint), 1);
  //   this.arr.splice(this.arr.indexOf(nPoint2), 1);
  //   for (let i = 0; i < this.arr.length; i++) {
  //     this.container_map.list[this.arr[i]].setVisible(false);
  //   }
  //   this.tweens.add({
  //     targets: [
  //       this.container_map.list[nPoint1],
  //       this.container_map.list[nMidPoint],
  //       this.container_map.list[nPoint2],
  //     ],
  //     x: 0,
  //     y: 0,
  //     duration: 500,
  //     onComplete: () => {
  //       this.container_map.list[nPoint1].setVisible(false);
  //       this.container_map.list[nPoint2].setVisible(false);
  //       this.tweens.add({
  //         targets: this.container_map.list[nMidPoint],
  //         scaleX: 3,
  //         scaleY: 3,
  //         duration: 500,
  //       });
  //       this.tweens.add({
  //         targets: this.container_board,
  //         scaleX: 0,
  //         scaleY: 0,
  //         duration: 500,
  //       });
  //     },
  //   });
  // }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
