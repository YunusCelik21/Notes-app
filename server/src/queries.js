const getNotesQuery = "SELECT * FROM notes";

const getNoteQuery = (req) => {
    return `SELECT * FROM notes WHERE id = ${req.params.id}`;
}

module.exports = {getNotesQuery, getNoteQuery};