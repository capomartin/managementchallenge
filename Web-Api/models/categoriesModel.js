const mongoose = require("../bin/bd");

const categorySchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model("categories", categorySchema)