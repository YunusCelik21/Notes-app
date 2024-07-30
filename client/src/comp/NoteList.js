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
                    <Link to={`/notes/${note.id}`}>
                        <h3>{note.title}</h3>
                        <h4>{note.date}</h4>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default NoteList;