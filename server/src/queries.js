const table = "notes";
const createTable = `CREATE TABLE ${table} (title varchar(50),
                    text varchar(2000),
                    id SERIAL PRIMARY KEY, 
                    postdate date DEFAULT now());`;


const getNotes = `SELECT * FROM ${table}`;
const getNote = `SELECT * FROM ${table} WHERE id = $1`;

const postNote = `INSERT INTO ${table} VALUES ($1, $2)`;
const deleteNote = `DELETE FROM ${table} WHERE id = $1`;
const updateNote = `UPDATE ${table} SET title = $1, text = $2 WHERE id = $3;`;

module.exports = {table, createTable, getNotes, getNote, postNote, deleteNote, updateNote};