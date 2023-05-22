class Bot {
  constructor(oScene) {
    this.oScene = oScene;
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
    this.nBotLevel = 1;
    this.sPlayerSymbol = this.oScene.player1;
    this.sBotSymbol = this.oScene.player2;
  }
  makeMove(board) {
    switch (this.nBotLevel) {
      case 1:
        return this.level1Move(board);
      case 2:
        return this.level2Move(board);
    }
  }
  level1Move(board) {
    const aMoves = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] == "") aMoves.push(i);
    }
    const nIndex = Math.ceil(Math.random() * aMoves.length - 1);
    return aMoves[nIndex];
  }
  // const move = board[j];
  // if (move == this.sPlayerSymbol) {
  //   if (aMoves.includes(j)) {
  //     // console.log(aMoves, aMoves.indexOf(j), j);
  //     aMoves.splice(aMoves.indexOf(j), 1);
  //     // return aMoves[Math.ceil(Math.random() * aMoves.length - 1)];
  //   }
  // }
  level2Move(board) {
    const aMoves = [];
    const aCombination = [];
    for (let i = 0; i < this.win.length; i++) {
      const aMoves = this.win[i];
      let countSign = 0;
      for (let j = 0; j < board.length; j++) {
        const move = board[j];
        if (move == this.sPlayerSymbol) {
          countSign++;
        }
      }
      console.log("countSign", countSign);
    }
    const nIndex = Math.ceil(Math.random() * aMoves.length - 1);
    return this.level1Move(board);
  }
}
