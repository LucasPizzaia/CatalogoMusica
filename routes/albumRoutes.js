const express = require("express");
const router = express.Router();
const albumController = require("../controllers/albumController");
const multer = require("../config/multerConfig");

router.get("/", albumController.list);
router.post("/", multer.single("cover"), albumController.create);
router.get("/edit/:id", albumController.edit);
router.post("/edit/:id", multer.single("cover"), albumController.update);
router.post("/delete/:id", albumController.delete);

module.exports = router;
