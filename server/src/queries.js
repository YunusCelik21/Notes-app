const getNotes = "SELECT * FROM notes";
const getNote = "SELECT * FROM notes WHERE id = $1";

const postNote = "INSERT INTO notes VALUES ($1, $2)";

module.exports = {getNotes, getNote, postNote};