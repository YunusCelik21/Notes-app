import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Icon from "./Icon";

const NoteDetails = () => {
    const {id} = useParams();
    const {data: note, isLoading, error} = useFetch("http://localhost:8000/notes/" + id);

    const navigate = useNavigate();

    const handleDelete = () => {
        console.log("handle delete called");
        fetch("http://localhost:8000/notes/" + id, {
            method: "DELETE"
        })
            .then(() => {
                navigate("/")
            });
    }

     return (
        <div className="note-details">
            <div className="note-details-top">
                <h2>{note && note.title}</h2>
                <div onClick={handleDelete}><Icon icon="delete" text="Delete"/></div>
            </div>
            <h4>{isLoading && <div>Loading...</div>}</h4>
            <h4>{error && <div>{error}</div>}</h4>
            <p>{note && <div>{note.text}</div>}</p>
        </div>
     );
}

export default NoteDetails;