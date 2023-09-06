const express = require("express");
const app = express();

const cors = require("cors");
const createRouter = require("./helpers/create_router.js");
const MongoClient = require("mongodb").MongoClient;

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
}).then((client) => {
  const db = client.db("GitBash");
  const charactersCollection = db.collection("characters");
  const arenasCollection = db.collection("arenas");
  const charactersRouter = createRouter(charactersCollection);
  const arenasRouter = createRouter(arenasCollection);
  app.use("/api/characters", charactersRouter);
  app.use("/api/arenas", arenasRouter);
});

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
