const express = require("express");
const {
  PostGetController,
  PostDeleteController,
  PostCreateController,
} = require("../Controller/PostController");

const PostRouter = express.Router();

PostRouter.get("/POST", PostGetController)
  .delete("/POST", PostDeleteController)
  .post("/POST", PostCreateController);

module.exports = PostRouter;
