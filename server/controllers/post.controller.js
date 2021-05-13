const postSchema = require("../models/post.mdl");
const commentSchema = require("../models/comment.mdl");
const userSchema = require("../models/user.mdl");

exports.getAllPosts = async function (req, res) {
  try {
    const { limit, offset } = req.query;
    const postsCount = await postSchema.countDocuments();
    const posts = await postSchema
      .find()
      .limit(+offset + +limit)
      .lean()
      .sort({ title: 0 });
    for (const post of posts) {
      const author = await userSchema.findById(post.owner._id);
      post.author = author;

      const comments = await commentSchema.find({ post: post._id }).lean();
      post.comments = comments;
      for (const comment of comments) {
        const user = await userSchema.findById(post.owner._id);
        comment.owner = user;
      }
    }
    return res.send({ posts: posts, hasMore: postsCount > posts.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
      error: error.message,
    });
  }
};
