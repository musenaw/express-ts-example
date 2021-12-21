import { Schema, model, Document } from "mongoose";
import Movie from "./movie.interface";

const movieSchema = new Schema({
  title: String,
  year: Number,
  genres: [String],
  rated: String,
  languages: [String],
});
const movieModel = model<Movie & Document>("Movie", movieSchema);

export default movieModel;
