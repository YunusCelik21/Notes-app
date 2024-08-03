const { Pool } = require("pg");

const pool = new Pool({
    user: "yunus",
    host: "localhost",
    database: "notes_app",
    password: "249568",
    port: 5432
});

const getNotes = (req, res) => {
    pool.query("SELECT * FROM notes", (err, result) => {
        if (err) throw err;
        res.status(200).json(result.row);
    })
}