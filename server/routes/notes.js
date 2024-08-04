const express = require("express");
const db = require("../src/db");

const router = express.Router();

// Methods for notes
router.get("/", db.getNotes);
router.post("/", db.postNote);

router.get("/:id", db.getNote);
router.delete("/:id", db.deleteNote);
router.put("/:id", db.updateNote);

module.exports = router;