const postSchema = require("../models/post.mdl");
const commentSchema = require("../models/comment.mdl");
const userSchema = require("../models/user.mdl");
const { post } = require("../routes/post.route");

exports.getAllPosts = async function (req, res) {
  try {
    const posts = await postSchema.find().lean();
    for (const post of posts) {
      const author = await userSchema.findById(post.owner._id);
      const comments = await commentSchema.find({ post: post._id });
      post.author = author;
      post.comments = comments;
    }
    return res.send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
};
