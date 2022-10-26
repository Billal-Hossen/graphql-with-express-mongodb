const { Schema, model } = require("mongoose");

const userSchema = Schema({
  username: {
    type: String,
    required: [true, "User name is required!"],
    minLength: [3, "User name at least 3 character!"],
    maxLength: [100, "User name is too long!"],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "User email is required!"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "User password is required!"],
    minLength: [3, "User password at least 3 character!"],
    maxLength: [50, "User password is too long!"],
    trim: true,
    select: false
  },
  displayName: {
    type: String,
    required: true,
  },
}, { timestemps: true });

const User = model("User", userSchema);
module.exports = User;