const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true
    },
    facebookId: {
      type: String
    },
    displayName: {
      type: String
    },
    password: {
      type: String
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
