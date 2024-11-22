const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artistController");

router.get("/", artistController.list);
router.post("/", artistController.create);
router.get("/edit/:id", artistController.edit);
router.post("/edit/:id", artistController.update);
router.post("/delete/:id", artistController.delete);

module.exports = router;
