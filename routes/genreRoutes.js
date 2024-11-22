const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get("/", genreController.list);
router.post("/", genreController.create);
router.get("/edit/:id", genreController.edit);
router.post("/edit/:id", genreController.update);
router.post("/delete/:id", genreController.delete);

module.exports = router;
