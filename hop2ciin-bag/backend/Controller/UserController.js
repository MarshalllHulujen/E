const User = require("../database/model/user");
const mongoose = require("mongoose");
const { TokenGenerator } = require("../helper/helper");

exports.userPostController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await new User({
      username: username,
      password: password,
      email: email,
    }).save();
    const Post = { post: result };
    console.log(result);
    res.status(200).send(Post);
  } catch (err) {
    console.log(err.message);
  }
};

exports.userGetController = async (req, res) => {
  const result = await User.find();
  res.send({ data: result });
};

exports.userIdController = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await User.findById({ _id: objId });
  res.send({ data: result });
};

exports.userDeleteController = async (req, res) => {
  const result = await User.deleteMany();
  res.status(200).send(result);
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.findOne({ email: email, password: password });
    const token = await TokenGenerator({ uid: result._id, expires: "1d" });
    res.send({ token: token, _id: result._id });
  } catch (err) {
    res.send(err.message);
  }
};

//userlogin -> useremail, password => findone useremail, password ===> user found | user not found => front -> home | email and password isn
