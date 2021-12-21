import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(_req: Request, _res: Response, next: NextFunction) {
  console.log("Time Birds: ", Date.now());
  next();
});
// define the home page route
router.get("/", function (_req: Request, res: Response, next: NextFunction) {
  // next('route')
  res.send("Birds home page");
});
// define the about route
router.get("/about", function (_req: Request, res: Response) {
  res.send("About birds");
});

router.all("*", function (_req: Request, res: Response) {
  res.send("Error One");
});

export default router;
