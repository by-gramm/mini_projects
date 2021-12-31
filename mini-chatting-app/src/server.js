import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const io = SocketIO(httpServer);

io.on("connection", (socket) => {
  socket["nickname"] = "익명";

  socket.on("change_nickname", (nickname) => {
    socket["nickname"] = nickname;
  });

  socket.on("leave_room", (roomName) => {
    socket.to(roomName).emit("bye", socket.nickname);
    socket.leave(roomName);
  })

  socket.on("enter_room", (roomName) => {
    socket.join(roomName);
    socket.to(roomName).emit("welcome", socket.nickname);
  });

  socket.on("disconnecting", () => {
    socket.rooms.forEach((room) => {
      socket.to(room).emit("bye", socket.nickname);
    });
  });

  socket.on("send_message", (message, roomName) => {
    socket.to(roomName).emit("send_message", `${socket.nickname}: ${message}`);
  });
});

httpServer.listen(3000, () => {
  console.log('server listening on port : 3000');
});
