const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    url: { type: String },
    filename: { type: String },
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
