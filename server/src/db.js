const { Pool } = require("pg");
const { getNotesQuery, getNoteQuery } = require("./queries");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "notes_app",
    password: "249568",
    port: 5432,
});

const getNotes = (req, res) => {
    pool.query(getNotesQuery, (err, result) => {
        if (err) {
            console.error(err.message);
        }
        else {
            res.status(200).json(result.rows);
        }
    })
}

const getNote = (req, res) => {
    pool.query(getNoteQuery(req), (err, result) => {
        if (result === "") {
            console.log("DNE");
        }
        if (err) {
            console.error(err.message);
            console.log("error ya");
        }
        else {
            res.status(200).json(result.rows); 
        }
    });
}



module.exports = {getNotes, getNote};