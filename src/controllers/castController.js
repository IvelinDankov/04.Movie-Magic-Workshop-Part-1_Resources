import { Router } from "express";
import castService from "../services/castService.js"

const router = Router();

router.get("/create", (req, res) => {
  res.render("cast/create");
});

router.post("/create", async (req, res) => {
  const cast = req.body;

 await castService.createCast(cast)

  res.redirect("/home");
});

export default router;
