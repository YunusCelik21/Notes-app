const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Notes");
})

router.route("/:id").get((req, res) => {
    res.send(`Get the note with id: ${req.params.id}`);
}).post((req, res) => {
    res.send(`Post a note with id: ${req.params.id}`);
}).delete((req, res) => {
    res.send(`Delete the note with id: ${req.params.id}`);
}).patch((req, res) => {
    res.send(`Update the note with id: ${req.params.id}`);
});

module.exports = router;