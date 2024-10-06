import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";
// TODO create model

import { jwtSecret } from "../config/constants.js";

const register = (email, password) => {
  // TODO: check if user exist
  return User.create({ email, password });
};

const login = async (email, password) => {
  //TODO: check if user exist

  const user = await User.findOne({ email });



  if (!user) {
    throw new Error("User does not exist");
  }

  // TODO: validate password
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Password don't match");
  }

  // TODO:  generate jwt token
  const payload = { _id: user._id, email };
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "3h" });

  // TODO: return jwt token

  return token;
};

export default {
  register,
  login
};
