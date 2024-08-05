import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Icon from "./Icon";

const NoteDetails = () => {
    const {id} = useParams();
    const {data: note, isLoading, error} = useFetch("http://localhost:4000/notes/" + id);
    
    const navigate = useNavigate();

    const handleDelete = () => {
        console.log("handle delete called");
        fetch("http://localhost:4000/notes/" + id, {
            method: "DELETE"
        })
            .then(() => {
                navigate("/")
            });
    }

    return (
        <div className="note-details">
            {isLoading && <h4>Loading...</h4>}
            {error && <h4>{error.message}</h4>}

            {note &&    <>
                            <div className="note-details-top">
                                <h2>{note[0].title}</h2>
                                <div onClick={handleDelete}><Icon icon="delete" text="Delete" /></div>
                            </div>
                            <p>{note[0].text}</p>
                        </>
            }
        </div>
    );
}

export default NoteDetails;