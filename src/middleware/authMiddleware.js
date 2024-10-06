import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/constants.js";

export const authMiddleware = (req, res, next) => {
  // TODO: Check if there is a token in the request
  const token = req.cookies["auth"];

  if (!token) {
    return next();
  }

  try {
    // TODO: validate token
    const decodedToken = jwt.verify(token, jwtSecret);

    req.user = {
      _id: decodedToken._id,
      email: decodedToken.email
    };

    //   TODO: Add userData to request
    req.user._id = decodedToken._id;
    req.user.email = decodedToken.email;

    return next();
  } catch (err) {
    res.clearCookie("auth");
    res.redirect("/auth/login");
  }

  // TODO: Add user data to request
};
