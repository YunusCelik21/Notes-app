const express = require("express");
const { getNote, getNotes } = require("../src/db");

const router = express.Router();

router.get("/", getNotes);

router.route("/:id").get(getNote)
.post((req, res) => {
    res.send(`Post a note with id: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Delete the note with id: ${req.params.id}`);
}).patch((req, res) => {
    res.send(`Update the note with id: ${req.params.id}`);
});

module.exports = router;