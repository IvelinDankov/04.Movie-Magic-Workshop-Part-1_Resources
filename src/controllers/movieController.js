import { Router } from "express";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const router = Router();

function toArray(documents) {
  return documents.map(document => document.toObject());
}

router.get("/create", (req, res) => {
  res.render("movies/create");
});

router.post("/create", async (req, res) => {
  const movieData = req.body;

  await movieService.create(movieData);

  res.redirect("/");
  res.end();
});

router.get("/:movieId/details", async (req, res) => {
  const movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId).lean();
  // prepare view data
  const casts = await castService.getAll({});

  movie.ratingView = getRatingViewData(movie.rating);

  res.render("movies/details", { movie });
});
router.get("/search", async (req, res) => {
  const filter = req.query;
  const movies = await movieService.getAll(filter);

  res.render("home", { isSearch: true, movies: toArray(movies), filter });
});

////////////////////////////
//////////// Cast ///////////
/////////////////////////////
router.get("/:movieId/attach", async (req, res) => {
  const movie = await movieService.getOne(req.params.movieId).lean();
  const casts = await castService.getAll().lean();
  res.render("movies/attach", { movie, casts });
});

router.post("/:movieId/attach", (req, res) => {
  const movieId = req.params.movieId;
  const castId = req.body.cast;

  movieService.attach(movieId, castId);

  res.redirect(`/movies/${movieId}/details`);
});

function getRatingViewData(rating) {
  if (!Number.isInteger(rating)) {
    return "n\\a";
  }
  return "&#x2605;".repeat(rating);
}

export default router;
