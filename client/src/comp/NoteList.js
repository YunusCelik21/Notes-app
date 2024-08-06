import { Link } from "react-router-dom";
import Icon from "./Icon";

const NoteList = (props) => { // or instead of (props) (and delete consts) --> ({notes, title, handleDelete})
    const notes = props.notes;
    const title = props.title;

    return (
        <div className="note-list">
            <div className="note-list-title">
                <h3>{title}</h3>
                <Link to="/add"><Icon icon="add" text="Add"/></Link>
            </div>
            {notes.map((note) => (
                <div className="note" key={note.id}>
                    <div className="note-top">
                        <h3>{note.title}</h3>
                        <Link to={`/notes/${note.id}`}><Icon icon="chevron_left" text="Details"/></Link>
                    </div>
                    <h4>{note.postdate.substring(0,10)}</h4>
                </div>
            ))}
            {notes.length == 0 && <>You don't have any notes yet! Click on the add button to add some notes.</>}
        </div>
    );
}

export default NoteList;