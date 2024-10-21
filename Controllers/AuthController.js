import User from "../Models/userModel.js";
// const { z } = require("zod");
import { z } from "zod";

const signupSchema = z.object({
  username: z.string().min(3),
  first_name: z.string().min(3),
  last_name: z.string().min(3),
  password: z.string().min(3),
});

const loginSchema = z.object({
  username: z.string().min(3),

  password: z.string().min(3),
});

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const { success } = loginSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({ msg: "Invalid credentials" });
    return;
  }
  const check = await User.findOne({ username, password });
  if (check) {
    res.status(200).json({ msg: "Logged in successfully" });
  } else {
    res.status(411).json({ msg: "User not found" });
  }
};
export const registerUser = async (req, res) => {
  const { username, password, first_name, last_name } = req.body;
  console.log("LLL");

  try {
    const { success } = signupSchema.safeParse(req.body);

    if (!success) {
      res.status(411).json({ msg: "Invalid credentials" });
      return;
    } else {
      User.create(req.body);
      res.status(200).json({ msg: "SUccess" });
    }
  } catch (e) {
    // User.create(req.body)}
    console.log("error");
  }
};
