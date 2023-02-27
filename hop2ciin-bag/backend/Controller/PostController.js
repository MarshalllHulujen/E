const Post = require("../database/model/post");
const User = require("../database/model/post");
const mongoose = require("mongoose");

exports.PostGetController = async (req, res) => {
  const result = await Post.find();
  res.status(200).send({ data: result });
};

exports.PostDeleteController = async (req, res) => {
  const result = await Post.deleteMany();
  res.status(200).send({ data: result });
};

exports.PostCreateController = async (req, res) => {
  console.log("ohh");
  res.send("hi");
  // try {
  //   const {
  //     userid,
  //     category,
  //     title,
  //     description,
  //     imageUrl,
  //     videoUrl,
  //     keywords,
  //   } = req.body;

  //   const result = await Post({
  //     userid: userid,
  //     imageUrl: imageUrl,
  //     videoUrl: videoUrl,
  //     category: [category],
  //     title: title,
  //     description: description,
  //     keywords: [keywords],
  //   }).save();
  //   const Dost = { data: result };
  //   res.status(200).send(Dost);
  //   console.log("hello");
  // } catch (err) {
  //   res.send(err.message);
  //   console.log("hi");
  // }
};
