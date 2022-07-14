const { Schema, model } = require("mongoose");

const Commentschema = new Schema({
  writtenBy: {
    type: String,
  },
  commentBody: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", Commentschema);

module.exports = Comment;
