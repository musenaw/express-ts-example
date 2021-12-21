import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
const app = express();
const port = 3000;
import birds from "./routes/bird";

app.use(function (_req, _res, next) {
  console.log("Time:", Date.now());
  next();
});

app.use("/birds", birds);

const cb0 = function (_req: Request, _res: Response, next: NextFunction) {
  console.log("CB0");
  const err = new Error("Thats an error");
  next(err);
};

const cb1 = function (_req: Request, _res: Response, next: NextFunction) {
  console.log("CB1");

  next();
};

const cb2 = function (_req: Request, res: Response, _next: NextFunction) {
  // next("route")
  res.send("Hello from C!");
};

app.get("/example", [cb0, cb1, cb2]);
app.get("/example", (_req, res) => {
  res.send("Hello Example!");
});

app
  .route("/book")
  .get(function (_req, res) {
    res.send("Get a random book");
  })
  .post(function (_req, res) {
    res.send("Add a book");
  })
  .put(function (_req, res) {
    res.send("Update the book");
  });

app.get(
  "/",
  function (_req, _res, next) {
    console.log("after main middlewares");
    next("route");
  },
  (_req, res) => {
    res.send("Hello World!");
  }
);

app.get("/", (_req, res) => {
  res.send("Hello Other!");
});

app.use(function (
  _err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  // console.error(err.stack);
  console.log(777777777);
  // res.status(500).send('Something broke!');
  res.send("Something broke!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
