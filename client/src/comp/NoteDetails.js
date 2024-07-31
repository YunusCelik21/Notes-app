import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NoteDetails = () => {
    const {id} = useParams();
    const {data: notes, isLoading, error} = useFetch("http://localhost:8000/notes/" + id);

     return (
        <div>
            <h1>Note Details - {id}</h1>
            <h4>{isLoading && <div>Loading...</div>}</h4>
            <h4>{error && <div>{error}</div>}</h4>
            <h4>{notes && <div>{notes.text}</div>}</h4>
        </div>
     );
}

export default NoteDetails;