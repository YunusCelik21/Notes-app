
import Icon from "./Icon";

const NoteList = (props) => { // or instead of (props) (and delete consts) --> ({notes, title, handleDelete})
    const notes = props.notes;
    const title = props.title;

    return (
        <div className="note-list">
            <div className="note-list-title">
                <h3>{title}</h3>
                <Icon link="/add" icon="add" text="Add"/>
            </div>
            {notes.map((note) => (
                <div className="note" key={note.id}>
                    <div className="note-top">
                        <h3>{note.title}</h3>
                        <Icon link={`/notes/${note.id}`} icon="edit" text="Edit"/>
                    </div>
                    <h4>{note.postdate}</h4>
                </div>
            ))}
        </div>
    );
}

export default NoteList;