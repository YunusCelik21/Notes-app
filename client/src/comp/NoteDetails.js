import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NoteDetails = () => {
    const {id} = useParams();
    const {data: note, isLoading, error} = useFetch("http://localhost:8000/notes/" + id);

     return (
        <div>
            <h2>{note && note.title}</h2>
            <h4>{isLoading && <div>Loading...</div>}</h4>
            <h4>{error && <div>{error}</div>}</h4>
            <h4>{note && <div>{note.text}</div>}</h4>
        </div>
     );
}

export default NoteDetails;