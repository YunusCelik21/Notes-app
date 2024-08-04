const express = require("express");
const db = require("../src/db");

const router = express.Router();

router.route("/").get(db.getNotes);
router.post("/", db.postNote);

router.get("/:id", db.getNote);


module.exports = router;