class SocketManager {
  constructor(oScene) {
    this.oScene = oScene;
    this.sRoot = "http://192.168.11.112:3001";
    this.socket = io.connect(this.sRoot);
    this.iPlayerId = "";
    this.socket.on("connect", () => {
      console.log("socket-id: ", this.socket.id);
      this.iPlayerId = this.socket.id;
    });

    this.socket.emit("reqJoinBoard", { sBoard });
    this.emit = (sEventName, oData = {}, callback) => {
      this.socket.emit(sBoard, { sEventName, oData }, callback);
    };
    console.log("sBoard", sBoard);

    this.socket.on(sBoard, (data) => {
      this.onReveiveData(data);
    });
  }

  onReveiveData(data) {
    console.log(data.sEventName, data);
    switch (data.sEventName) {
      case "resMove":
        this.oScene.playMove(data.oData.nIndex);
        break;
    }
  }
}
