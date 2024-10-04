import { model, Schema, Types } from "mongoose";

const movieSchema = new Schema({
  title: String,
  genre: String,
  year: Number,
  rating: Number,
  description: {
    type: String,
    required: true,
  },
  imageUrl: String,
  director: String,

  casts: [
    {
      type: Types.ObjectId,
      ref: "Cast"
    }
  ]
});

const Movie = model("Movie", movieSchema);

export default Movie;
