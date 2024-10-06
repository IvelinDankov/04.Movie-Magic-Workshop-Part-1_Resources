import express from "express";
import cookieParser from "cookie-parser";

import { authMiddleware } from "../middleware/authMiddleware.js";

export default function expressInit(app) {
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.user(authMiddleware);
}
