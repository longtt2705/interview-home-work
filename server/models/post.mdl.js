const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: Schema.Types.ObjectId,
  owner: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Number, required: true },
  tags: [String],
});

module.exports = mongoose.model("posts", postSchema, "posts");
