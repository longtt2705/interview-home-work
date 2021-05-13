const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: String, required: true },
  created_at: { type: Number, required: true },
});

module.exports = mongoose.model("users", userSchema, "users");
