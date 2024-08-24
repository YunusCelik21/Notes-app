const express = require("express");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
    
    const WEBSITE_URL = process.env.WEBSITE_URL;

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', WEBSITE_URL);
    
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    next();
});

// Middleware to detect notes that do not exist
const { noteExists } = require("./db");
app.use("/notes/:id", async (req, res, next) => {
    const id = req.params.id;
    
    if (!await noteExists(id)) {
        res.status(404).send(`Note with id ${id} does not exist`);
    }
    else {
        next();
    }
});

const port = process.env.PORT || 4000;

const noteRouter = require("../routes/notes");
app.use("/notes", noteRouter);

app.listen(port);