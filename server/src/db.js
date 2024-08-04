const { Pool } = require("pg");
const queries = require("./queries");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "notes_app",
    password: "249568",
    port: 5432,
});

const getNotes = (req, res) => {
    pool.query(queries.getNotes, (err, result) => {
        if (err) {
            console.error(err.message);
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getNote = (req, res) => {
    pool.query(queries.getNote, [req.params.id], (err, result) => {
        if (result.rowCount === 0) {
            console.log("DNE");
        }
        if (err) {
            console.error(err.message);
        }
        else {
            res.status(200).json(result.rows); 
        }
    });
}

const postNote = (req, res) => {

    const {title, text} = req.body;
    pool.query(queries.postNote, [title, text], (err, result) => {
        if (err) {
            console.error(err.message);
        }
        else {
            res.status(201).send("Note added successfully");
        }
    });
}

const deleteNote = (req, res) => {
    console.log("got the request");
    pool.query(queries.deleteNote, [req.params.id], (err, result) => {
        if (err) {
            console.error(err.message);
        }
        else {
            res.status(204).send();
        }
    });
}

module.exports = {getNotes, getNote, postNote, deleteNote};