const bookModel = require("../models/booksModels")
const mongoose = require("mongoose");


module.exports.getBooks = async (req, res) => {
    const books = await bookModel.find()
    res.send(books);
}

module.exports.createBooks = (req, res) => {
    const { nombre, autor, sinopsis } = req.body;

    bookModel.create({
        nombre,
        autor,
        sinopsis
    })
    .then((data) => {
        console.log("Creado correctamente");
        res.status(201).send(data);
    })
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Algo salió mal" });
    });
}

module.exports.updateBooks = (req, res) => {
    const {id} = req.params;
    const {book} = req.body
    bookModel.findByIdAndUpdate(id, {book})
    .then(() => {
        console.log("Editado correctamente");
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Algo salio mal"})
    })
}

module.exports.deleteBook = (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "ID de libro no válido" });
    }
    bookModel.findByIdAndDelete(id)
        .then((book) => {
            if (!book) {
                return res.status(404).json({ mensaje: "Libro no encontrado" });
            }
            return res.status(200).json({ mensaje: "Libro eliminado correctamente" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: err, mensaje: "Algo salió mal" });
        });
};