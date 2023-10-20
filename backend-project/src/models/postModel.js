const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const root = "http://localhost:8080/images/";

const ImageSchema = new Schema(
  {
    filename: { type: String, get: (v) => `${root}${v}` },
  },
  { toJSON: { getters: true } }
);

const PostSchema = new Schema({
  title: { type: String },
  description: { type: String },
  image: [ImageSchema],
  authorUsername: { type: String },
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", PostSchema);
