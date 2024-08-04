const { Pool } = require("pg");
const queries = require("./queries");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "notes_app",
    password: "249568",
    port: 5432,
});

const noteExists = async (id) => {
    const result = await pool.query(queries.getNote, [id]);
    return result.rowCount === 1;
}

const getNotes = (req, res) => {
    pool.query(queries.getNotes, (err, result) => {
        if (err) {
            console.error(err);
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getNote = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getNote, [id], (err, result) => {
        if (err) {
            console.error(err);
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
            console.error(err);
        }
        else {
            res.status(201).send("Note added successfully");
        }
    });
}

const deleteNote = (req, res) => {
    const id = req.params.id;

    pool.query(queries.deleteNote, [id], (err, result) => {
        if (err) {
            console.error(err);
        }
        else {
            res.status(204).send("Note deleted successfully");
        }
    });
    
}

const updateNote = (req, res) => {
    const id = parseInt(req.params.id);
    const {title, text} = req.body;

    pool.query(queries.updateNote, [title, text, id], (err, result) => {
        if (err) {
            console.error(err);
        }
        else {
            res.status(204).send("Note updated successfully");
        }
    });
}

module.exports = {getNotes, getNote, postNote, deleteNote, updateNote, noteExists};