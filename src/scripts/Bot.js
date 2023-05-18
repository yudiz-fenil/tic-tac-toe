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
    this.sBotSymbol = "zero";
  }
  makeMove(board) {
    this.sBotSymbol = this.oScene.player2;
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
  level2Move(board) {
    const aMoves = [];
    const aCombination = [];
    for (let i = 0; i < this.win.length; i++) {
      const aComb = this.win[i];
      console.log(board);
      for (let j = 0; j < board.length; j++) {
        console.log(board);
        if (board[j] == this.sBotSymbol) {
          if (aComb.includes(j)) {
            aCombination.push(i);
          }
        }
      }
    }
    const nIndex = Math.ceil(Math.random() * aMoves.length - 1);
    return this.level1Move(board);
  }
}
