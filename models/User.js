import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" }); // User model에 passport-local-mongoose plugin을 추가해주기.

const model = mongoose.model("User", UserSchema);

export default model;
