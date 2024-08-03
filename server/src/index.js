const express = require("express");

const app = express();
const port = 4000;

const noteRouter = require("../routes/notes");

app.use("/notes", noteRouter);

app.listen(port);