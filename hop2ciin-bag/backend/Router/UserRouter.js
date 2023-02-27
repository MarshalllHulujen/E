const express = require("express");
const {
  userPostController,
  userGetController,
  userIdController,
  userLogin,
  userDeleteController,
} = require("../controller/UserController");

const UserRouter = express.Router();

UserRouter.get("/user", userGetController)
  .get("/user/:id", userIdController)
  .post("/user", userPostController)
  .delete("/user", userDeleteController)
  .get("/userlogin", userLogin);

module.exports = UserRouter;
