"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const Movie_1 = __importDefault(require("../Schemas/Movie"));
const post_model_1 = __importDefault(require("./post/post.model"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get("/", async (_req, res, _next) => {
    const moovies = await Movie_1.default.findOne({});
    console.log(moovies === null || moovies === void 0 ? void 0 : moovies.title);
    res.json({ moovies });
});
app.post("/", async (req, res, next) => {
    const postData = req.body;
    const createdPost = new post_model_1.default(Object.assign({}, postData));
    const savedPost = await createdPost.save();
    res.send(savedPost);
});
async function main() {
    await (0, mongoose_1.connect)("mongodb://localhost:27017/example");
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}
main().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map