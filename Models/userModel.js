import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,

      // unique: true,
      minLength: 3,
      maxLength: 30,
    },
    password: {
      type: String,
      required: true,
      minLength: 3,
    },
    first_name: {
      type: String,
      required: true,

      maxLength: 50,
    },
    last_name: {
      type: String,
      required: true,

      maxLength: 50,
    },
  }
  // {
  // timestamps: true,
  // }
);

var UserModel = mongoose.model("Users", userSchema);
export default UserModel;
