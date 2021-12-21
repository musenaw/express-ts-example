"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const movieSchema = new mongoose_1.Schema({
    title: String,
    year: Number,
    genres: [String],
    rated: String,
    languages: [String],
});
const movieModel = (0, mongoose_1.model)("Movie", movieSchema);
exports.default = movieModel;
//# sourceMappingURL=Movie.js.map