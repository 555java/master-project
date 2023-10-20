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
  authorId: { type: String, required: true },
});

PostSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    description: this.description,
    authorId: this.authorId,
    image: this.image,
    title: this.title,
  };
};

module.exports = mongoose.model("Post", PostSchema);
