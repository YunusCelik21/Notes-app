const { Pool } = require("pg");
const queries = require("./queries");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "249568",
    port: 5432,
});

function createTable() {
    pool.query(queries.createTable, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

// Coonect to the database and check if the table exists
pool.connect((err) => {
    
    if (err) {
        console.error(err);
    }
    else {
        pool.query(`SELECT * FROM ${queries.table}`, (err) => {
            if (err) {
                if (err.message === `relation "${queries.table}" does not exist`) {
                    console.log("Relation does not exist. creating the table...");
                    createTable();
                }
            }
            else {
                console.log("Connection successful")
            }
        });
    }
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

    pool.query(queries.postNote, [title, text], (err) => {

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

    pool.query(queries.deleteNote, [id], (err) => {
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

    pool.query(queries.updateNote, [title, text, id], (err) => {
        if (err) {
            console.error(err);
        }
        else {
            res.status(204).send("Note updated successfully");
        }
    });
}

module.exports = {getNotes, getNote, postNote, deleteNote, updateNote, noteExists};