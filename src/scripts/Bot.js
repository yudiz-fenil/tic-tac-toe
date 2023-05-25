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
    this.nBotLevel = 2;
    this.board = ["", "", "", "", "", "", "", "", ""];
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
  checkInArray(items, parentArray) {
    return items.every((item) => parentArray.includes(item));
  }
  removeFromArray(items, parentArray) {
    return parentArray.filter((item) => !items.includes(item));
  }
  createCombinations(array) {
    const combinations = [];
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        combinations.push([array[i], array[j]]);
      }
    }
    return combinations;
  }
  checkCombinations(aCheck, board) {
    const aCombination = this.createCombinations(aCheck);
    for (let i = 0; i < aCombination.length; i++) {
      const combination = aCombination[i];
      for (let j = 0; j < this.win.length; j++) {
        const aMoves = this.win[j];
        if (this.checkInArray(combination, aMoves)) {
          const available = this.removeFromArray(aCheck, aMoves)[0];
          if (board[available] == "") {
            return available;
          }
        }
      }
    }
    return null;
  }
  level2Move(board) {
    const aPlayer = [];
    const aBot = [];
    let countPlayer = 0;
    let countBot = 0;
    for (let j = 0; j < board.length; j++) {
      const move = board[j];
      if (move == this.sBotSymbol) {
        countBot++;
        aBot.push(j);
      }
    }
    const nBotValue = this.checkCombinations(aBot, board);
    if (nBotValue != null) {
      return nBotValue;
    }
    for (let j = 0; j < board.length; j++) {
      const move = board[j];
      if (move == this.sPlayerSymbol) {
        countPlayer++;
        aPlayer.push(j);
      }
    }
    const nPlayerValue = this.checkCombinations(aPlayer, board);
    if (nPlayerValue != null) {
      return nPlayerValue;
    }
    return this.level1Move(board);
  }
}
