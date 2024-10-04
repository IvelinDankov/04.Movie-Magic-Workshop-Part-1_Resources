import Movie from "../models/movie.js";

// TODO: filter in DB not
const getAll = async (filter = {}) => {
  // let movies = await movieData.getAll();
  let moviesQuery = await Movie.find();

  if (filter.search) {
    moviesQuery = moviesQuery.filter(movie =>
      movie.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }

  if (filter.genre) {
    moviesQuery = moviesQuery.filter(movie =>
      movie.genre.toLowerCase().includes(filter.genre.toLowerCase())
    );
  }

  if (filter.year) {
    moviesQuery = moviesQuery.filter(movie => movie.year === filter.year);
  }

  return moviesQuery;
};

const create = movie => Movie.create(movie);

const getOne = movieId => Movie.findById(movieId).populate('casts');

const attach =  async(movieId, castId) => {
  // TODO:
  const movie = await Movie.findById(movieId);
  movie.casts.push(castId);
  return movie.save();

//  return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});

};

export default {
  getAll,
  create,
  getOne,
  attach
};
