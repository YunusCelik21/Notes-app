import { useParams } from "react-router-dom";

const NoteDetails = () => {
    const {id} = useParams();

     return (
        <div>
            <h1>Note Details - {id}</h1>
        </div>
     );
}

export default NoteDetails;