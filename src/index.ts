import express /* ErrorRequestHandler,
  NextFunction,
  Request,
  Response, */ from "express";
import { connect } from "mongoose";
import movieModel from "../Schemas/Movie";
import Movie from "../Schemas/movie.interface";
import CreatePostDto from "./post/post.dto";
import postModel from "./post/post.model";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (_req, res, _next) => {
  const moovies = await movieModel.findOne({});
  console.log(moovies?.title);
  res.json({ moovies });
});

app.post("/", async (req, res, next) => {
  const postData: {} = req.body;
  const createdPost = new postModel({
    ...postData,
  });
  const savedPost = await createdPost.save();
  res.send(savedPost);
});

async function main() {
  await connect("mongodb://localhost:27017/example");
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

main().catch((err) => console.log(err));
