const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    profilepic: {
      type: String
    },
    password: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
