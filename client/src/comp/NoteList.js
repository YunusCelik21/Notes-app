import { Link } from "react-router-dom";

const NoteList = (props) => { // or instead of (props) (and delete consts) --> ({notes, title, handleDelete})
    const notes = props.notes;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return (
        <div className="note-list">
            <h3>{title}</h3>
            {notes.map((note) => (
                <div className="note" key={note.id}>
                    <Link to={`/notes/${note.id}`} style={{ textDecoration: 'none' }}>
                        <h4>{note.title + " - " + note.text + " - " + note.date}</h4>
                        <span className="material-symbols-outlined" onClick={() => handleDelete(note.id)}>delete</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default NoteList;