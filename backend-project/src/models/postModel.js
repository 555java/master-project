const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String },
  description: { type: String },
  authorId: { type: String, required: true },
});

PostSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    description: this.description,
    authorId: this.authorId,
  };
};

module.exports = mongoose.model("Post", PostSchema);
