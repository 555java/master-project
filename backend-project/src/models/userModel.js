const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true, required: true },
});

// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);

UserSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    username: this.username,
    email: this.email,
  };
};

// export userschema
module.exports = mongoose.model("User", UserSchema);
