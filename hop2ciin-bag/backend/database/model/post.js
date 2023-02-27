const mongoose = require("mongoose");

const Post = new mongoose.Schema({
  userid: { type: mongoose.Schema.ObjectId, ref: "User", require: true },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  keywords: { type: Array, required: true },
  category: [{ type: Array, required: true }],
  createdAt: { type: Date, default: Date.now() },
});

const PostModel = mongoose.model("Post", Post);
module.exports = PostModel;
