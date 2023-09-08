const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const cors = require("cors");
const createRouter = require("./helpers/create_router.js");
const MongoClient = require("mongodb").MongoClient;

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
}).then((client) => {
  server.listen(9000, "192.168.1.245", function () {
    console.log(`Listening on port ${this.address().port}`);
  });
  const db = client.db("GitBash");
  const charactersCollection = db.collection("characters");
  const arenasCollection = db.collection("arenas");
  const charactersRouter = createRouter(charactersCollection);
  const arenasRouter = createRouter(arenasCollection);
  app.use("/api/characters", charactersRouter);
  app.use("/api/arenas", arenasRouter);
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User Joined Room: ${room}`);
  });

  socket.on("send_character", (character) => {
    console.log(character);
    socket.to(character.room).emit("receive_character", character);
  });

  socket.on("send_move", (move) => {
    console.log(move)
    socket.to(move.room).emit("receive_move", move);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});
