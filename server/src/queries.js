const getNotes = "SELECT * FROM notes";
const getNote = "SELECT * FROM notes WHERE id = $1";

const postNote = "INSERT INTO notes VALUES ($1, $2)";
const deleteNote = "DELETE FROM notes WHERE id = $1";
const updateNote = "UPDATE notes SET title = $1, text = $2 WHERE id = $3;";

module.exports = {getNotes, getNote, postNote, deleteNote, updateNote};