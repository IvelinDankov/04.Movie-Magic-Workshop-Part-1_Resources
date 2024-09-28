import Cast from "../models/Cast.js";

const getAll = () => Cast.find();
const createCast = cast => Cast.create(cast);

export default {
  createCast,
  getAll
};
