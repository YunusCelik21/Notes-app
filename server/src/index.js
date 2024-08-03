const express = require("express");

const app = express();
app.use(express.json());

const port = 4000;

const noteRouter = require("../routes/notes");

app.use("/notes", noteRouter);

app.listen(port);