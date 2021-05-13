const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  owner: { type: Schema.Types.ObjectId, required: true },
  post: { type: Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
  created_at: { type: Number, required: true },
});

module.exports = mongoose.model("comments", commentSchema, "comments");
