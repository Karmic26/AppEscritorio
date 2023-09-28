const { Router } = require("express");
const { getBooks, createBooks, deleteBook, updateBooks } = require("../controllers/booksControllers")


const router = Router();
router.get("/get", getBooks);
router.post("/create", createBooks);
router.delete("/delete/:id", deleteBook);
router.put("/update/:id", updateBooks);

module.exports = router;