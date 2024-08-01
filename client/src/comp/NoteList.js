import { Link } from "react-router-dom";

const NoteList = (props) => { // or instead of (props) (and delete consts) --> ({notes, title, handleDelete})
    const notes = props.notes;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return (
        <div className="note-list">
            <div className="note-list-title">
                <h3>{title}</h3>
                <Link to={`/add`}>
                    <span class="material-symbols-outlined">add</span>
                    <div>Add</div>
                </Link>
            </div>
            {notes.map((note) => (
                <div className="note" key={note.id}>
                    <div className="note-top">
                        <h3>{note.title}</h3>
                        <Link to={`/notes/${note.id}`}>
                            <span className="material-symbols-outlined">edit</span>
                            <dev>Edit</dev>
                        </Link>    
                    </div>
                    <h4>{note.date}</h4>
                </div>
            ))}
        </div>
    );
}

export default NoteList;