const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/databse");
const UserRouter = require("./Router/UserRouter");
const PostRouter = require("./Router/PostRouter");

const port = 8000;

const app = express();
app.use(cors(), express.json);

app.use(UserRouter, PostRouter);

const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(`server is running at localhost:${port}`);
  });
};

startServer();
module.exports = app;
