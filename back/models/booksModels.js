const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);
