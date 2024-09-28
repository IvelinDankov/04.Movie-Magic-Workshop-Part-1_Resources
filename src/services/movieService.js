
import Movie from "../models/movie.js";

// TODO: refactor
const getAll = async (filter = {}) => {
  // let movies = await movieData.getAll();
  let movies = await Movie.find();

  if (filter.search) {
    movies = movies.filter(movie =>
      movie.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }

  if (filter.genre) {
    movies = movies.filter(movie =>
      movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
    );
  }

  if (filter.year) {
    movies = movies.filter(movie => movie.year === filter.year);
  }

  return movies;
};

const create = movie => Movie.create(movie);

const getOne = movieId =>  Movie.findById(movieId);


export default {
  getAll,
  create,
  getOne
};
