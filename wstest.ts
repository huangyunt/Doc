let ws = require("ws"); //引入websocket模块
let uuid = require("uuid"); //引入创建唯一id模块

let socketServer = ws.Server;

//创建websocketServer实例监听8090端口
let wss = new socketServer({
  port: 8090,
});

let Rooms = {}; //创建客户端列表，用于保存客户端及相关连接信息

/**
 * 广播所有客户端消息
 * @param  {String} type     广播方式(admin为系统消息，user为用户消息)
 * @param  {String} message  消息
 * @param  {String} nickname 用户昵称，广播方式为admin时可以不存在
 */
function broadcastSend(type, message, nickname, roomID) {
  for (let item of Rooms[roomID].user) {
    if (item.ws.readyState === ws.OPEN) {
      item.ws.send(
        JSON.stringify({
          type: type,
          nickname: nickname,
          message: message,
        })
      );
    }
  }
}

//监听连接
wss.on("connection", function (ws, req) {
  let roomID = req.url.slice(2);
  console.log(roomID);
  let user_uuid = uuid.v4();
  Rooms[roomID] = Rooms[roomID] ? Rooms[roomID] : {};
  let clientIndex = Rooms[roomID].user ? Rooms[roomID].user.length : 0;
  Rooms[roomID].user = Rooms[roomID].user ? Rooms[roomID].user : [];
  let nickname = `User_${clientIndex++}`;
  Rooms[roomID].user.push({
    id: user_uuid,
    ws: ws,
    roomID: roomID,
    nickname: nickname,
  });
  /**
   * 关闭服务，从客户端监听列表删除
   */
  function closeSocket() {
    for (let i = 0; i < Rooms.length; i++) {
      if (Rooms[i].id == user_uuid) {
        let disconnect_message = `${nickname} has disconnected`;
        broadcastSend("notification", disconnect_message, nickname, roomID);
        Rooms.splice(i, 1);
      }
    }
  }
  /*监听消息*/
  ws.on("message", function (msg) {
    msg = JSON.parse(msg);
    if (msg.type == "message") {
      broadcastSend("message", msg.message, nickname, roomID);
    }
    if (msg.type == "changeName") {
      let nickname_message = `Client ${nickname} change to ${msg.message}`;
      nickname = msg.message;
      broadcastSend("nick_update", nickname_message, nickname, roomID);
    }
  });
  /*监听断开连接*/
  ws.on("close", function () {
    closeSocket();
  });
});
